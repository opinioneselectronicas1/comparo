import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  Brain, 
  Star, 
  Truck, 
  Shield,
  Zap,
  BarChart3
} from "lucide-react";
import Link from "next/link";

export default function AmazonPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de Amazon */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-500 text-white mb-4">
              🛒 Especialistas en Amazon
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-orange-600">Amazon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en Amazon España. Histórico de precios, análisis con IA y alertas personalizadas.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de Amazon (ej: https://www.amazon.es/dp/...)"
              buttonText="Analizar Producto"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Star className="mr-1 h-4 w-4" /> Análisis de reseñas
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <TrendingDown className="mr-1 h-4 w-4" /> Histórico 6 meses
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Brain className="mr-1 h-4 w-4" /> IA especializada
              </Badge>
            </div>
          </div>
        </div>

        {/* Características específicas de Amazon */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Por qué elegir nuestro comparador para Amazon?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Brain className="h-6 w-6" />
                    Análisis IA Avanzado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Analizamos reseñas, características técnicas y tendencias de precio para darte la mejor recomendación de compra.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <BarChart3 className="h-6 w-6" />
                    Histórico Completo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Accede al histórico de precios de los últimos 6 meses y descubre cuándo es el mejor momento para comprar.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Zap className="h-6 w-6" />
                    Alertas Inteligentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Configura alertas de precio y recibe notificaciones cuando tu producto favorito baje de precio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de Amazon */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar en Amazon
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Envío Rápido</h3>
                  <p className="text-gray-600">
                    Envío gratuito con Amazon Prime y entrega en 24-48 horas en miles de productos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Garantía A-Z</h3>
                  <p className="text-gray-600">
                    Protección completa en tus compras con la garantía de devolución de Amazon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Reseñas Verificadas</h3>
                  <p className="text-gray-600">
                    Miles de reseñas de compradores reales para ayudarte a decidir.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ofertas Diarias</h3>
                  <p className="text-gray-600">
                    Ofertas flash, ofertas del día y descuentos especiales constantemente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para encontrar las mejores ofertas en Amazon?
            </h2>
            <p className="text-gray-600 mb-8">
              Únete a miles de usuarios que ya ahorran dinero con nuestro comparador especializado en Amazon.
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/#buscar">
                Empezar a Comparar <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "Comparador de Precios Amazon - Histórico y Análisis IA | Comparaelprecio",
  description: "Especialistas en Amazon España. Histórico de precios, análisis con IA, alertas personalizadas y las mejores ofertas. ¡Ahorra hasta un 40%!",
  keywords: ["amazon precios", "ofertas amazon", "historico precios amazon", "comparador amazon", "descuentos amazon"],
};