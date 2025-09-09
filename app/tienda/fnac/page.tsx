import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  Book, 
  Music, 
  Film,
  Gamepad2,
  Headphones,
  Coffee
} from "lucide-react";
import Link from "next/link";

export default function FnacPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de Fnac */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-orange-600 text-white mb-4">
              📚 Especialistas en Fnac
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-orange-600">Fnac</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en libros, música, cine, gaming y tecnología en Fnac España.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de Fnac (ej: https://www.fnac.es/...)"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Book className="mr-1 h-4 w-4" /> Libros y eBooks
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Music className="mr-1 h-4 w-4" /> Música y vinilos
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Film className="mr-1 h-4 w-4" /> Cine y series
              </Badge>
            </div>
          </div>
        </div>

        {/* Categorías principales */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Categorías destacadas en Fnac
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Book className="h-6 w-6" />
                    Libros y Literatura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    La mayor selección de libros, eBooks, cómics y literatura en español y otros idiomas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Music className="h-6 w-6" />
                    Música y Vinilos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    CDs, vinilos, música digital y los últimos lanzamientos de todos los géneros musicales.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Film className="h-6 w-6" />
                    Cine y Series
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    DVDs, Blu-rays, series de TV y las últimas novedades del mundo del cine.
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
                    Videojuegos para todas las consolas, accesorios gaming y merchandising.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Headphones className="h-6 w-6" />
                    Tecnología
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Auriculares, altavoces, tablets, eReaders y accesorios tecnológicos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700">
                    <Coffee className="h-6 w-6" />
                    Experiencias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Eventos culturales, presentaciones de libros y experiencias únicas en las tiendas Fnac.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de Fnac */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar en Fnac
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Book className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Cultura y Entretenimiento</h3>
                  <p className="text-gray-600">
                    Especialistas en productos culturales con la mayor selección de libros, música y cine.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ofertas Exclusivas</h3>
                  <p className="text-gray-600">
                    Descuentos especiales para socios Fnac y ofertas exclusivas en productos seleccionados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Coffee className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Experiencia en Tienda</h3>
                  <p className="text-gray-600">
                    Espacios únicos donde puedes descubrir, probar y disfrutar de la cultura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Music className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Eventos Culturales</h3>
                  <p className="text-gray-600">
                    Presentaciones de libros, conciertos íntimos y eventos exclusivos para clientes.
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
              ¿Listo para descubrir las mejores ofertas culturales?
            </h2>
            <p className="text-gray-600 mb-8">
              Compara precios en Fnac y encuentra los mejores productos culturales y de entretenimiento.
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
  title: "Comparador de Precios Fnac - Libros, Música y Cultura | Comparaelprecio",
  description: "Especialistas en Fnac España. Encuentra las mejores ofertas en libros, música, cine, gaming y productos culturales.",
  keywords: ["fnac precios", "ofertas fnac", "libros fnac", "musica fnac", "comparador fnac"],
};