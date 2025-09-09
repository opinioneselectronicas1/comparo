import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  Smartphone, 
  Laptop, 
  Tv,
  Gamepad2,
  Headphones,
  Camera
} from "lucide-react";
import Link from "next/link";

export default function MediaMarktPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de MediaMarkt */}
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-red-600 text-white mb-4">
              📱 Especialistas en MediaMarkt
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-red-600">MediaMarkt</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en tecnología y electrónica en MediaMarkt España.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de MediaMarkt (ej: https://www.mediamarkt.es/...)"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Smartphone className="mr-1 h-4 w-4" /> Móviles y tablets
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Laptop className="mr-1 h-4 w-4" /> Informática
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Tv className="mr-1 h-4 w-4" /> TV y audio
              </Badge>
            </div>
          </div>
        </div>

        {/* Categorías principales */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Categorías más populares en MediaMarkt
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Smartphone className="h-6 w-6" />
                    Móviles y Tablets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Los últimos smartphones, tablets y accesorios de las mejores marcas al mejor precio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Laptop className="h-6 w-6" />
                    Informática
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Portátiles, ordenadores de sobremesa, componentes y periféricos para gaming y trabajo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Tv className="h-6 w-6" />
                    TV y Audio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Televisores 4K, sistemas de sonido, barras de sonido y equipos de música.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Gamepad2 className="h-6 w-6" />
                    Gaming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Consolas, videojuegos, accesorios gaming y componentes para PC gaming.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Headphones className="h-6 w-6" />
                    Audio y Sonido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Auriculares, altavoces, equipos de música y accesorios de audio profesional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700">
                    <Camera className="h-6 w-6" />
                    Fotografía
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Cámaras digitales, objetivos, accesorios fotográficos y equipos profesionales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de MediaMarkt */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar en MediaMarkt
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Precio Mínimo Garantizado</h3>
                  <p className="text-gray-600">
                    Si encuentras un precio más bajo, MediaMarkt te iguala el precio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Especialistas en Tecnología</h3>
                  <p className="text-gray-600">
                    Asesoramiento experto y servicio técnico especializado en todas las tiendas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Gamepad2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Zona Gaming</h3>
                  <p className="text-gray-600">
                    Sección especializada en gaming con los últimos lanzamientos y ofertas exclusivas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Tv className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Instalación y Configuración</h3>
                  <p className="text-gray-600">
                    Servicio de instalación y configuración de TV, equipos de sonido y más.
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
              ¿Listo para encontrar la mejor tecnología al mejor precio?
            </h2>
            <p className="text-gray-600 mb-8">
              Compara precios en MediaMarkt y encuentra las mejores ofertas en tecnología y electrónica.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
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
  title: "Comparador de Precios MediaMarkt - Tecnología y Electrónica | Comparaelprecio",
  description: "Especialistas en MediaMarkt España. Encuentra las mejores ofertas en móviles, informática, TV, gaming y electrónica.",
  keywords: ["mediamarkt precios", "ofertas mediamarkt", "tecnologia mediamarkt", "comparador mediamarkt", "electronica mediamarkt"],
};