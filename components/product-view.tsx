"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingDown,
  TrendingUp,
  Brain,
  ExternalLink,
  Star,
  ShoppingCart,
  Package,
  Eye,
  AlertCircle,
} from "lucide-react";
import { VerificadorResponse, AmazonResponse, analyze, AnalysisResponse } from "@/lib/api";
import { PriceChart } from "./price-chart";
import { AIAnalysis } from "./ai-analysis";

interface ProductViewProps {
  verificadorData: VerificadorResponse;
  amazonData: AmazonResponse | null;
}

/* ==============================
   Configuración cache IA (cliente)
   ============================== */

const IA_BLOCK_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 días

function makeAnalyzeKey(v: VerificadorResponse) {
  const raw = (v.amazon_url || v.verificador_url || "").trim().toLowerCase();
  const tienda = (v.tienda || "desconocida").trim().toLowerCase();
  return `ai:analyzed:${tienda}:${raw}`;
}

function saveAnalysisToCache(key: string, result: AnalysisResponse) {
  try {
    localStorage.setItem(key, JSON.stringify({ ts: Date.now(), analysis: result }));
  } catch {
    /* ignore quota errors */
  }
}

function loadAnalysisFromCache(key: string): AnalysisResponse | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts: number; analysis?: AnalysisResponse } | null;
    if (!parsed?.ts) return null;
    const fresh = Date.now() - parsed.ts < IA_BLOCK_TTL_MS;
    if (!fresh) {
      localStorage.removeItem(key);
      return null;
    }
    return parsed.analysis ?? null;
  } catch {
    return null;
  }
}

export function ProductView({ verificadorData, amazonData }: ProductViewProps) {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeKey = useMemo(() => makeAnalyzeKey(verificadorData), [verificadorData]);

  // Ref de la sección para hacer scroll
  const aiSectionRef = useRef<HTMLDivElement | null>(null);
  const scrollToAI = () => aiSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  // Rehidratar desde cache al montar/cambiar de producto
  useEffect(() => {
    const cached = loadAnalysisFromCache(analyzeKey);
    setAnalysis(cached);
  }, [analyzeKey]);

  // Si termina un análisis nuevo, baja a la sección (tras render)
  useEffect(() => {
    if (analysis) {
      const id = setTimeout(scrollToAI, 50);
      return () => clearTimeout(id);
    }
  }, [analysis]);

  const handleAnalyze = async () => {
    if (isAnalyzing) return;

    // Si ya tenemos resultado (en memoria o en cache), simplemente baja
    if (analysis) {
      scrollToAI();
      return;
    }
    const cached = loadAnalysisFromCache(analyzeKey);
    if (cached) {
      setAnalysis(cached);
      const id = setTimeout(scrollToAI, 50);
      return () => clearTimeout(id);
    }

    // No hay cache → calcular
    setIsAnalyzing(true);
    try {
      const result = await analyze(amazonData?.product || null, verificadorData);
      setAnalysis(result);
      if (result?.ok && result?.json) saveAnalysisToCache(analyzeKey, result);
      const id = setTimeout(scrollToAI, 50);
      return () => clearTimeout(id);
    } catch (error) {
      console.error("Error en análisis:", error);
      alert("Error al realizar el análisis. Por favor, inténtalo de nuevo.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatPrice = (price: number | string) => {
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(numPrice);
  };

  const getPriceStats = () => {
    if (!verificadorData.has_serie_historica || verificadorData.serie_historica.length === 0) {
      let currentPrice: number;
      if (amazonData?.product?.price) {
        currentPrice = amazonData.product.price;
      } else {
        const precioDestacado = verificadorData.precios_destacados[0]?.precio;
        currentPrice = precioDestacado
          ? parseFloat(precioDestacado.replace(/[€\s]/g, "").replace(",", "."))
          : 0;
      }
      return {
        current: currentPrice,
        min: currentPrice,
        max: currentPrice,
        avg: currentPrice,
        lastDate: verificadorData.precios_destacados[0]?.fecha || new Date().toISOString(),
      };
    }

    const prices = verificadorData.serie_historica.map((item) => item.precio);
    const sortedData = [...verificadorData.serie_historica].sort(
      (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );
    let currentPrice: number;
    let lastDate: string;

    if (amazonData?.product?.price) {
      currentPrice = amazonData.product.price;
      lastDate = amazonData.product.date || new Date().toISOString();
    } else {
      currentPrice = sortedData[0]?.precio || prices[prices.length - 1];
      lastDate = sortedData[0]?.fecha || new Date().toISOString();
    }

    return {
      current: currentPrice,
      min: Math.min(...prices),
      max: Math.max(...prices),
      avg: prices.reduce((a, b) => a + b, 0) / prices.length,
      lastDate,
    };
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", { year: "numeric", month: "short", day: "numeric" });
  };

  // Enlace de afiliado (igual que tenías)
  const getAffiliateLink = (originalUrl: string, store: string) => {
    const AMAZON_TAG = "tagafiliado-21";
    const AWIN_AFFILIATE_ID = "123456";
    const AWIN_CLICKREF = "webhistorial-precios";
    const AWIN_MERCHANTS: Record<string, string> = {
      carrefour: "7890",
      mediamarkt: "1234",
      "el corte inglés": "5678",
      fnac: "9012",
    };
    try {
      const url = new URL(originalUrl);
      if (url.hostname.includes("amazon")) {
        const dpMatch = url.pathname.match(/\/dp\/([A-Z0-9]{10})/);
        if (dpMatch) return `https://www.amazon.es/dp/${dpMatch[1]}?tag=${AMAZON_TAG}`;
        url.searchParams.set("tag", AMAZON_TAG);
        return url.toString();
      }
      const storeLower = (store || "").toLowerCase();
      const merchantId = AWIN_MERCHANTS[storeLower];
      if (merchantId) {
        const encodedUrl = encodeURIComponent(originalUrl);
        return `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_AFFILIATE_ID}&clickref=${AWIN_CLICKREF}&ued=${encodedUrl}`;
      }
      return originalUrl;
    } catch {
      return originalUrl;
    }
  };

  const priceStats = getPriceStats();
  const affiliateLink = getAffiliateLink(
    verificadorData.amazon_url || verificadorData.verificador_url,
    verificadorData.tienda
  );

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header del producto */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-8">
        {/* Imagen */}
        <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden border">
          {verificadorData.imagen ? (
            <img
              src={verificadorData.imagen}
              alt={verificadorData.titulo || "Producto"}
              className="w-full h-full object-contain p-2 sm:p-4"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Sin imagen disponible
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="space-y-4 sm:space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {verificadorData.tienda}
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
              {verificadorData.titulo || "Producto sin título"}
            </h1>
          </div>

          {/* Estadísticas de precio */}
          {priceStats && (
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold">Análisis de Precios</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs sm:text-sm text-blue-600 font-medium">Último Precio</div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-900">
                    {priceStats.current.toFixed(2)}€
                  </div>
                  <div className="text-xs text-blue-500 mt-0.5 sm:mt-1">
                    {formatDate(priceStats.lastDate)}
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs sm:text-sm text-green-600 font-medium">Precio Mínimo</div>
                  <div className="text-xl sm:text-2xl font-bold text-green-900">
                    {priceStats.min.toFixed(2)}€
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-xs sm:text-sm text-red-600 font-medium">Precio Máximo</div>
                  <div className="text-xl sm:text-2xl font-bold text-red-900">
                    {priceStats.max.toFixed(2)}€
                  </div>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Precio Promedio</div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">
                    {priceStats.avg.toFixed(2)}€
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Acciones */}
          <div className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button asChild className="w-full" size="lg">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-4 w-4 flex-shrink-0" />
                  Comprar Ahora
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full" size="lg">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <Package className="mr-2 h-4 w-4 flex-shrink-0" />
                  Ver Precio actual
                </a>
              </Button>
            </div>

            <Button asChild variant="outline" className="w-full" size="lg">
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4 flex-shrink-0" />
                Ver en {verificadorData.tienda}
                <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
              </a>
            </Button>

            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              variant={analysis ? "default" : "outline"}
              className="w-full"
              size="lg"
              title={analysis ? "Ir al análisis" : undefined}
            >
              <Brain className="mr-2 h-4 w-4 flex-shrink-0" />
              {isAnalyzing ? "Analizando con IA..." : analysis ? "Ver análisis con IA" : "Análisis con IA"}
            </Button>
          </div>

          {/* Extra Amazon */}
          {amazonData?.product && (
            <div className="pt-4 border-t space-y-3">
              <div className="flex flex-wrap gap-4">
                {amazonData.product.rating && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-yellow-50 rounded-full border border-yellow-200">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium text-yellow-800">{amazonData.product.rating}/5</span>
                    <span className="text-sm text-yellow-600">
                      ({amazonData.product.reviews_count} reseñas)
                    </span>
                  </div>
                )}
                {amazonData.product.brand && (
                  <div className="px-3 py-1 bg-gray-50 rounded-full border border-gray-200">
                    <span className="text-sm">
                      <span className="font-medium text-gray-700">Marca:</span>
                      <span className="text-gray-600 ml-1">{amazonData.product.brand}</span>
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Gráfico de precios */}
      {verificadorData.has_serie_historica && verificadorData.serie_historica.length > 0 && (
        <Card className="mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Histórico de Precios
            </CardTitle>
          </CardHeader>
          <CardContent className="p-3 sm:p-6">
            <PriceChart data={verificadorData.serie_historica} />
          </CardContent>
        </Card>
      )}

      {/* Ancla para scroll */}
      <div ref={aiSectionRef} />

      {/* Análisis con IA */}
      {analysis ? (
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl sm:text-2xl font-bold">Análisis Inteligente</h2>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Powered by IA
            </Badge>
          </div>
          <AIAnalysis analysis={analysis} />
        </div>
      ) : (
        // opcional: si el usuario vuelve y no hay cache ni analysis
        <div className="mb-6 sm:mb-8 hidden">
          <AlertCircle className="h-4 w-4 inline mr-2 text-gray-400" />
          <span className="text-sm text-gray-500">Sin análisis disponible.</span>
        </div>
      )}
    </div>
  );
}
