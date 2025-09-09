import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  Globe, 
  Shield, 
  Truck,
  Star,
  Gift,
  Zap
} from "lucide-react";
import Link from "next/link";

export default function AliexpressPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de AliExpress */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-600 text-white mb-4">
              🌍 Especialistas en AliExpress
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-orange-600">AliExpress</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en AliExpress España. Productos únicos a precios increíbles desde China.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de AliExpress (ej: https://es.aliexpress.com/...)"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Globe className="mr-1 h-4 w-4" /> Envío mundial
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <TrendingDown className="mr-1 h-4 w-4" /> Precios únicos
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Gift className="mr-1 h-4 w-4" /> Ofertas flash
              </Badge>
            </div>
          </div>
        </div>

        {/* Características específicas de AliExpress */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Por qué elegir nuestro comparador para AliExpress?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <TrendingDown className="h-6 w-6" />
                    Precios Únicos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Accede a productos únicos y precios increíbles que no encontrarás en tiendas europeas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Shield className="h-6 w-6" />
                    Protección al Comprador
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Garantía de devolución del dinero y protección completa en todas tus compras.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Zap className="h-6 w-6" />
                    Ofertas Flash
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Descuentos por tiempo limitado y ofertas especiales que cambian constantemente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de AliExpress */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar en AliExpress
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Variedad Mundial</h3>
                  <p className="text-gray-600">
                    Millones de productos únicos de vendedores de todo el mundo, especialmente China.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Compra Segura</h3>
                  <p className="text-gray-600">
                    Protección al comprador con garantía de devolución y resolución de disputas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Envío Gratuito</h3>
                  <p className="text-gray-600">
                    Envío gratuito en millones de productos, aunque los tiempos pueden ser más largos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Reseñas Reales</h3>
                  <p className="text-gray-600">
                    Sistema de reseñas con fotos reales de compradores para tomar mejores decisiones.
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
              ¿Listo para descubrir productos únicos a precios increíbles?
            </h2>
            <p className="text-gray-600 mb-8">
              Compara precios en AliExpress y encuentra productos que no están disponibles en Europa.
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
  title: "Comparador de Precios AliExpress - Productos Únicos | Comparaelprecio",
  description: "Especialistas en AliExpress España. Encuentra productos únicos a precios increíbles con envío desde China. Protección al comprador garantizada.",
  keywords: ["aliexpress precios", "ofertas aliexpress", "productos china", "comparador aliexpress", "envio gratis aliexpress"],
};