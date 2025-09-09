"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingDown, 
  TrendingUp, 
  Brain, 
  ExternalLink,
  Star,
  ShoppingCart,
  Package,
  Eye,
  Heart,
  Share2
} from "lucide-react";
import { VerificadorResponse, AmazonResponse, analyze, AnalysisResponse } from "@/lib/api";
import { PriceChart } from "./price-chart";
import { AIAnalysis } from "./ai-analysis";

interface ProductViewProps {
  verificadorData: VerificadorResponse;
  amazonData: AmazonResponse | null;
}

export function ProductView({ verificadorData, amazonData }: ProductViewProps) {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    // Ahora podemos analizar cualquier producto, no solo Amazon
    
    setIsAnalyzing(true);
    try {
      const result = await analyze(amazonData?.product || null, verificadorData);
      setAnalysis(result);
    } catch (error) {
      console.error("Error en análisis:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const formatPrice = (price: number | string) => {
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(numPrice);
  };

  const getPriceStats = () => {
    if (!verificadorData.has_serie_historica || verificadorData.serie_historica.length === 0) {
      // Si no hay histórico, usar el precio de Amazon si está disponible, sino el precio destacado
      let currentPrice;
      if (amazonData?.product?.price) {
        currentPrice = amazonData.product.price;
      } else {
        const precioDestacado = verificadorData.precios_destacados[0]?.precio;
        currentPrice = precioDestacado ? parseFloat(precioDestacado.replace(/[€,\s]/g, '').replace(',', '.')) : 0;
      }
      
      return {
        current: currentPrice,
        min: currentPrice,
        max: currentPrice,
        avg: currentPrice,
        lastDate: verificadorData.precios_destacados[0]?.fecha || new Date().toISOString()
      };
    }

    const prices = verificadorData.serie_historica.map(item => item.precio);
    // El último precio debe ser el más reciente del histórico, o el de Amazon si está disponible
    const sortedData = [...verificadorData.serie_historica].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
    let currentPrice;
    let lastDate;
    
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
      lastDate: lastDate
    };
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", { 
      year: "numeric",
      month: "short", 
      day: "numeric" 
    });
  };

  // Función para generar enlaces de afiliados
  const getAffiliateLink = (originalUrl: string, store: string) => {
    // Configuración de afiliados (esto debería venir de variables de entorno)
    const AMAZON_TAG = "tagafiliado-21";
    const AWIN_AFFILIATE_ID = "123456";
    const AWIN_CLICKREF = "webhistorial-precios";
    
    // Merchant IDs de Awin para cada tienda
    const AWIN_MERCHANTS = {
      carrefour: "7890",
      mediamarkt: "1234",
      "el corte inglés": "5678",
      fnac: "9012",
      // Añadir más según sea necesario
    };

    try {
      const url = new URL(originalUrl);
      
      // Amazon
      if (url.hostname.includes('amazon')) {
        const dpMatch = url.pathname.match(/\/dp\/([A-Z0-9]{10})/);
        if (dpMatch) {
          return `https://www.amazon.es/dp/${dpMatch[1]}?tag=${AMAZON_TAG}`;
        }
        // Si no encontramos el DP, añadir el tag como parámetro
        url.searchParams.set('tag', AMAZON_TAG);
        return url.toString();
      }
      
      // Otras tiendas con Awin
      const storeLower = store.toLowerCase();
      const merchantId = AWIN_MERCHANTS[storeLower as keyof typeof AWIN_MERCHANTS];
      
      if (merchantId) {
        const encodedUrl = encodeURIComponent(originalUrl);
        return `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_AFFILIATE_ID}&clickref=${AWIN_CLICKREF}&ued=${encodedUrl}`;
      }
      
      // Si no tenemos configuración de afiliados, devolver URL original
      return originalUrl;
    } catch (error) {
      console.error("Error generando enlace de afiliado:", error);
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
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Imagen */}
        <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden border">
          {verificadorData.imagen ? (
            <img
              src={verificadorData.imagen}
              alt={verificadorData.titulo || "Producto"}
              className="w-full h-full object-contain p-4"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Sin imagen disponible
            </div>
          )}
        </div>

        {/* Información del producto */}
        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {verificadorData.tienda}
            </Badge>
            <h1 className="text-3xl font-bold">
              {verificadorData.titulo || "Producto sin título"}
            </h1>
          </div>

          {/* Estadísticas de precio */}
          {priceStats && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Análisis de Precios</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm text-blue-600 font-medium">Último Precio</div>
                  <div className="text-2xl font-bold text-blue-900">
                    {priceStats.current.toFixed(2)}€
                  </div>
                  <div className="text-xs text-blue-500 mt-1">
                    {formatDate(priceStats.lastDate)}
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm text-green-600 font-medium">Precio Mínimo</div>
                  <div className="text-2xl font-bold text-green-900">
                    {priceStats.min.toFixed(2)}€
                  </div>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-sm text-red-600 font-medium">Precio Máximo</div>
                  <div className="text-2xl font-bold text-red-900">
                    {priceStats.max.toFixed(2)}€
                  </div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-600 font-medium">Precio Promedio</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {priceStats.avg.toFixed(2)}€
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Button asChild className="w-full" size="lg">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Comprar Ahora
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full" size="lg">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <Package className="mr-2 h-4 w-4" />
                  Ver Stock
                </a>
              </Button>
            </div>
            
            <Button asChild variant="outline" className="w-full" size="lg">
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                Ver en {verificadorData.tienda}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            
            <Button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              variant={analysis ? "default" : "outline"}
              className="w-full"
              size="lg"
            >
              <Brain className="mr-2 h-4 w-4" />
              {isAnalyzing ? "Analizando con IA..." : analysis ? "✓ Análisis Completado" : "Análisis con IA"}
            </Button>

            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="flex-1">
                <Heart className="mr-2 h-4 w-4" />
                Favoritos
              </Button>
              <Button variant="ghost" size="sm" className="flex-1">
                <Share2 className="mr-2 h-4 w-4" />
                Compartir
              </Button>
            </div>
          </div>

          {/* Información adicional de Amazon */}
          {amazonData?.product && (
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              {amazonData.product.rating && (
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{amazonData.product.rating}/5</span>
                  <span className="text-sm text-gray-500">
                    ({amazonData.product.reviews_count} reseñas)
                  </span>
                </div>
              )}
              {amazonData.product.brand && (
                <div className="text-sm">
                  <span className="font-medium">Marca:</span> {amazonData.product.brand}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Gráfico de precios */}
      {verificadorData.has_serie_historica && verificadorData.serie_historica.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Histórico de Precios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <PriceChart data={verificadorData.serie_historica} />
          </CardContent>
        </Card>
      )}

      {/* Análisis con IA */}
      {analysis && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-blue-600" />
            <h2 className="text-2xl font-bold">Análisis Inteligente</h2>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Powered by IA
            </Badge>
          </div>
          <AIAnalysis analysis={analysis} />
        </div>
      )}

      {/* Detalles del producto de Amazon */}
      {amazonData?.product && (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Descripción */}
          {amazonData.product.description && (
            <Card>
              <CardHeader>
                <CardTitle>Descripción</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{amazonData.product.description}</p>
              </CardContent>
            </Card>
          )}

          {/* Puntos clave */}
          {amazonData.product.bullet_points && (
            <Card>
              <CardHeader>
                <CardTitle>Características principales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {amazonData.product.bullet_points.split('\n').map((point, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{point.trim()}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}