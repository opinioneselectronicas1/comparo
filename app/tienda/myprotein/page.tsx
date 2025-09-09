import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  Dumbbell, 
  Heart, 
  Zap,
  Award,
  Users,
  Target
} from "lucide-react";
import Link from "next/link";

export default function MyproteinPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de Myprotein */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600 text-white mb-4">
              💪 Especialistas en Myprotein
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-blue-600">Myprotein</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en suplementos deportivos y nutrición en Myprotein España.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de Myprotein (ej: https://www.myprotein.es/...)"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Dumbbell className="mr-1 h-4 w-4" /> Proteínas
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Zap className="mr-1 h-4 w-4" /> Pre-entrenos
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Heart className="mr-1 h-4 w-4" /> Vitaminas
              </Badge>
            </div>
          </div>
        </div>

        {/* Categorías principales */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Categorías más populares en Myprotein
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Dumbbell className="h-6 w-6" />
                    Proteínas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Whey protein, caseína, proteína vegana y todos los tipos de proteína para tus objetivos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Zap className="h-6 w-6" />
                    Pre-entrenos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Suplementos pre-entreno, creatina, BCAA y todo lo necesario para maximizar tu rendimiento.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Heart className="h-6 w-6" />
                    Salud y Bienestar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Vitaminas, minerales, omega-3 y suplementos para cuidar tu salud general.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Target className="h-6 w-6" />
                    Pérdida de Peso
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Quemadores de grasa, L-carnitina y suplementos para ayudarte a alcanzar tu peso ideal.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Users className="h-6 w-6" />
                    Ropa Deportiva
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ropa de entrenamiento, accesorios fitness y todo lo necesario para tu rutina deportiva.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700">
                    <Award className="h-6 w-6" />
                    Snacks Saludables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Barritas proteicas, snacks fitness y alternativas saludables para tus antojos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de Myprotein */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar en Myprotein
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Calidad Garantizada</h3>
                  <p className="text-gray-600">
                    Productos testados en laboratorio con certificaciones de calidad internacionales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Mejores Precios</h3>
                  <p className="text-gray-600">
                    Ofertas constantes y descuentos especiales en los mejores suplementos deportivos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comunidad Fitness</h3>
                  <p className="text-gray-600">
                    Únete a una comunidad de millones de deportistas que confían en Myprotein.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Dumbbell className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Asesoramiento Experto</h3>
                  <p className="text-gray-600">
                    Consejos de nutricionistas y entrenadores para maximizar tus resultados.
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
              ¿Listo para alcanzar tus objetivos fitness?
            </h2>
            <p className="text-gray-600 mb-8">
              Compara precios en Myprotein y encuentra los mejores suplementos para tu entrenamiento.
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
  title: "Comparador de Precios Myprotein - Suplementos Deportivos | Comparaelprecio",
  description: "Especialistas en Myprotein España. Encuentra las mejores ofertas en proteínas, pre-entrenos, vitaminas y suplementos deportivos.",
  keywords: ["myprotein precios", "ofertas myprotein", "proteinas myprotein", "suplementos deportivos", "comparador myprotein"],
};