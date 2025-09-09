import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  ShoppingCart, 
  MapPin, 
  Clock,
  Percent,
  Users,
  Home
} from "lucide-react";
import Link from "next/link";

export default function CarrefourPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de Carrefour */}
        <div className="bg-gradient-to-br from-blue-50 to-red-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600 text-white mb-4">
              🛒 Especialistas en Carrefour
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-blue-600">Carrefour</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en Carrefour España. Compara precios online y en tienda física.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de Carrefour (ej: https://www.carrefour.es/...)"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <MapPin className="mr-1 h-4 w-4" /> Online y tienda física
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <TrendingDown className="mr-1 h-4 w-4" /> Ofertas semanales
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Percent className="mr-1 h-4 w-4" /> Descuentos exclusivos
              </Badge>
            </div>
          </div>
        </div>

        {/* Características específicas de Carrefour */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              ¿Por qué elegir nuestro comparador para Carrefour?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <ShoppingCart className="h-6 w-6" />
                    Precios Online y Tienda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comparamos precios tanto online como en tienda física para que encuentres la mejor opción.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Percent className="h-6 w-6" />
                    Ofertas Semanales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seguimiento de las ofertas semanales y promociones especiales de Carrefour.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Users className="h-6 w-6" />
                    Tarjeta Carrefour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Información sobre descuentos adicionales disponibles con la tarjeta Carrefour.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de Carrefour */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar en Carrefour
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Recogida en Tienda</h3>
                  <p className="text-gray-600">
                    Compra online y recoge en tu Carrefour más cercano sin gastos de envío.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Percent className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ofertas Exclusivas</h3>
                  <p className="text-gray-600">
                    Acceso a ofertas especiales y descuentos exclusivos para clientes online.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Home className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Entrega a Domicilio</h3>
                  <p className="text-gray-600">
                    Servicio de entrega a domicilio para tu compra semanal y productos grandes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Horarios Amplios</h3>
                  <p className="text-gray-600">
                    Tiendas abiertas hasta tarde y compra online 24/7 para tu comodidad.
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
              ¿Listo para encontrar las mejores ofertas en Carrefour?
            </h2>
            <p className="text-gray-600 mb-8">
              Compara precios online y en tienda física para ahorrar en tu compra semanal.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
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
  title: "Comparador de Precios Carrefour - Online y Tienda | Comparaelprecio",
  description: "Especialistas en Carrefour España. Compara precios online y en tienda física. Ofertas semanales y descuentos exclusivos.",
  keywords: ["carrefour precios", "ofertas carrefour", "carrefour online", "comparador carrefour", "descuentos carrefour"],
};