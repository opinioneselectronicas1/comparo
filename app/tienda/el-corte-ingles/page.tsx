import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  Crown, 
  Gift, 
  Shirt,
  Home,
  Sparkles,
  Award
} from "lucide-react";
import Link from "next/link";

export default function ElCorteInglesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de El Corte Inglés */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-700 text-white mb-4">
              👑 Especialistas en El Corte Inglés
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-green-700">El Corte Inglés</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en moda, hogar, tecnología y más en El Corte Inglés España.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de El Corte Inglés (ej: https://www.elcorteingles.es/...)"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Crown className="mr-1 h-4 w-4" /> Calidad premium
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Gift className="mr-1 h-4 w-4" /> Ofertas exclusivas
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Award className="mr-1 h-4 w-4" /> Marcas de lujo
              </Badge>
            </div>
          </div>
        </div>

        {/* Categorías principales */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Categorías destacadas en El Corte Inglés
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Shirt className="h-6 w-6" />
                    Moda y Complementos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Las mejores marcas de moda para hombre, mujer y niños. Ropa, zapatos y complementos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Home className="h-6 w-6" />
                    Hogar y Decoración
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Muebles, decoración, textil hogar y todo lo necesario para tu casa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Sparkles className="h-6 w-6" />
                    Belleza y Perfumería
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Cosméticos, perfumes, cuidado personal y las mejores marcas de belleza.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de El Corte Inglés */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar en El Corte Inglés
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Crown className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Calidad Garantizada</h3>
                  <p className="text-gray-600">
                    Productos de las mejores marcas con garantía de calidad y servicio premium.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Gift className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Tarjeta de Cliente</h3>
                  <p className="text-gray-600">
                    Descuentos exclusivos, financiación y ventajas especiales para clientes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Personal Shopper</h3>
                  <p className="text-gray-600">
                    Servicio de asesoramiento personalizado en moda y estilo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Marcas Exclusivas</h3>
                  <p className="text-gray-600">
                    Acceso a marcas de lujo y productos exclusivos que no encontrarás en otros sitios.
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
              ¿Listo para encontrar las mejores ofertas premium?
            </h2>
            <p className="text-gray-600 mb-8">
              Compara precios en El Corte Inglés y encuentra productos de calidad al mejor precio.
            </p>
            <Button asChild size="lg" className="bg-green-700 hover:bg-green-800">
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
  title: "Comparador de Precios El Corte Inglés - Moda y Premium | Comparaelprecio",
  description: "Especialistas en El Corte Inglés España. Encuentra las mejores ofertas en moda, hogar, belleza y productos premium.",
  keywords: ["el corte ingles precios", "ofertas el corte ingles", "moda el corte ingles", "comparador el corte ingles"],
};