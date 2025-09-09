"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown,
  Brain
} from "lucide-react";
import { AnalysisResponse } from "@/lib/api";

interface AIAnalysisProps {
  analysis: AnalysisResponse;
}

export function AIAnalysis({ analysis }: AIAnalysisProps) {
  const { json: data } = analysis;

  // Verificar que tenemos los datos necesarios
  if (!data || !data.recomendacion) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center text-gray-500">
            <Brain className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p>Error al procesar el análisis. Inténtalo de nuevo.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const getRecommendationIcon = () => {
    switch (data.recomendacion) {
      case "comprar":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "no_comprar":
        return <XCircle className="h-5 w-5 text-red-600" />;
      case "depende":
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getRecommendationColor = () => {
    switch (data.recomendacion) {
      case "comprar":
        return "bg-green-100 text-green-800 border-green-200";
      case "no_comprar":
        return "bg-red-100 text-red-800 border-red-200";
      case "depende":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  return (
    <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-blue-600" />
            Análisis con IA
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {/* Recomendación principal */}
          <div className="flex items-start gap-3">
            {getRecommendationIcon()}
            <div className="flex-1">
              <Badge className={getRecommendationColor()}>
                {data.recomendacion === "comprar" && "Recomendado comprar"}
                {data.recomendacion === "no_comprar" && "No recomendado"}
                {data.recomendacion === "depende" && "Depende de tus necesidades"}
              </Badge>
              <p className="mt-2 text-gray-700">{data.argumentos}</p>
            </div>
          </div>

          {/* Resumen */}
          <div className="p-3 sm:p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">📋 Resumen del Análisis</h4>
            <p className="text-blue-800">{data.resumen}</p>
          </div>
        </CardContent>
      </Card>

      {/* Análisis de precio */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5 text-green-600" />
            💰 Análisis de Precio
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">Último precio:</span>
                <span className="font-semibold text-sm sm:text-base">
                  {data.analisis_precio.precio_actual ? formatPrice(data.analisis_precio.precio_actual) : 'N/D'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">Precio mínimo:</span>
                <span className="font-semibold text-green-600 text-sm sm:text-base">
                  {data.analisis_precio.min_180d ? formatPrice(data.analisis_precio.min_180d) : 'N/D'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm sm:text-base text-gray-600">Precio promedio:</span>
                <span className="font-semibold text-sm sm:text-base">
                  {data.analisis_precio.media_180d ? formatPrice(data.analisis_precio.media_180d) : 'N/D'}
                </span>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2">
                {data.analisis_precio.es_buena_oferta === true ? (
                  <TrendingDown className="h-4 w-4 text-green-600" />
                ) : data.analisis_precio.es_buena_oferta === false ? (
                  <TrendingUp className="h-4 w-4 text-red-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-gray-600" />
                )}
                <span className={`font-semibold text-sm sm:text-base ${
                  data.analisis_precio.es_buena_oferta === true 
                    ? "text-green-600" 
                    : data.analisis_precio.es_buena_oferta === false 
                    ? "text-red-600" 
                    : "text-gray-600"
                }`}>
                  {data.analisis_precio.es_buena_oferta === true 
                    ? "Buena oferta" 
                    : data.analisis_precio.es_buena_oferta === false 
                    ? "Precio alto" 
                    : "Precio incierto"}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {data.analisis_precio.motivo_precio || "Sin información adicional"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pros y contras */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle className="h-5 w-5 text-green-600" />
              ✅ Ventajas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {(data.pros || []).map((pro, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{pro}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <XCircle className="h-5 w-5 text-red-600" />
              ❌ Desventajas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {(data.contras || []).map((contra, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{contra}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}