import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  Smartphone, 
  Home, 
  Zap,
  Shield,
  Star,
  Headphones
} from "lucide-react";
import Link from "next/link";

export default function XiaomiPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de Xiaomi */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-600 text-white mb-4">
              📱 Especialistas en Xiaomi
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-orange-600">Xiaomi</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en productos Xiaomi España. Smartphones, smart home y ecosistema Mi.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de Xiaomi (ej: https://www.mi.com/es/...)"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Smartphone className="mr-1 h-4 w-4" /> Smartphones
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Home className="mr-1 h-4 w-4" /> Smart Home
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Zap className="mr-1 h-4 w-4" /> Ecosistema Mi
              </Badge>
            </div>
          </div>
        </div>

        {/* Categorías principales */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Productos destacados de Xiaomi
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Smartphone className="h-6 w-6" />
                    Smartphones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gama Redmi, Mi y POCO. Los mejores smartphones con la mejor relación calidad-precio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Home className="h-6 w-6" />
                    Smart Home
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Aspiradoras robot, purificadores, cámaras de seguridad y dispositivos inteligentes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Headphones className="h-6 w-6" />
                    Audio y Wearables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Auriculares, altavoces, smartwatches y pulseras de actividad Mi Band.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de Xiaomi */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar productos Xiaomi
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mejor Precio-Calidad</h3>
                  <p className="text-gray-600">
                    Productos de alta calidad a precios muy competitivos, la filosofía de Xiaomi.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ecosistema Conectado</h3>
                  <p className="text-gray-600">
                    Todos los productos se conectan entre sí creando un hogar inteligente completo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Garantía Oficial</h3>
                  <p className="text-gray-600">
                    Garantía oficial en España con servicio técnico y actualizaciones regulares.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovación Constante</h3>
                  <p className="text-gray-600">
                    Siempre a la vanguardia tecnológica con productos innovadores y actualizados.
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
              ¿Listo para descubrir el ecosistema Xiaomi?
            </h2>
            <p className="text-gray-600 mb-8">
              Compara precios de productos Xiaomi y encuentra la mejor tecnología al mejor precio.
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
  title: "Comparador de Precios Xiaomi - Smartphones y Smart Home | Comparaelprecio",
  description: "Especialistas en productos Xiaomi España. Encuentra las mejores ofertas en smartphones, smart home y ecosistema Mi.",
  keywords: ["xiaomi precios", "ofertas xiaomi", "smartphones xiaomi", "smart home xiaomi", "comparador xiaomi"],
};