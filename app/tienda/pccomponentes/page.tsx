import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import { 
  Search, 
  TrendingDown, 
  Cpu, 
  Monitor, 
  Gamepad2,
  Smartphone,
  Headphones,
  HardDrive
} from "lucide-react";
import Link from "next/link";

export default function PcComponentesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12">
        {/* Hero específico de PcComponentes */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-600 text-white mb-4">
              💻 Especialistas en PcComponentes
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comparador de Precios para <span className="text-blue-600">PcComponentes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Encuentra las mejores ofertas en componentes PC, gaming y tecnología en PcComponentes España.
            </p>
            
            <SearchForm 
              placeholder="Pega aquí la URL de PcComponentes (ej: https://www.pccomponentes.com/...)"
              className="mb-8"
            />

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Cpu className="mr-1 h-4 w-4" /> Componentes PC
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Gamepad2 className="mr-1 h-4 w-4" /> Gaming
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4">
                <Monitor className="mr-1 h-4 w-4" /> Periféricos
              </Badge>
            </div>
          </div>
        </div>

        {/* Categorías principales */}
        <div className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Categorías más populares en PcComponentes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Cpu className="h-6 w-6" />
                    Componentes PC
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Procesadores, tarjetas gráficas, memorias RAM, placas base y todo para montar tu PC.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Gamepad2 className="h-6 w-6" />
                    Gaming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Equipos gaming, sillas, teclados mecánicos, ratones gaming y accesorios para gamers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <Monitor className="h-6 w-6" />
                    Monitores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Monitores gaming, 4K, ultrawide, para diseño y todas las resoluciones y tamaños.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700">
                    <Smartphone className="h-6 w-6" />
                    Móviles y Tablets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Smartphones, tablets, smartwatches y accesorios móviles de las mejores marcas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <Headphones className="h-6 w-6" />
                    Audio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Auriculares gaming, altavoces, micrófonos y equipos de audio profesional.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700">
                    <HardDrive className="h-6 w-6" />
                    Almacenamiento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Discos duros, SSDs, memorias USB, tarjetas SD y soluciones de almacenamiento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Ventajas de PcComponentes */}
        <div className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Ventajas de comprar en PcComponentes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Especialistas en PC</h3>
                  <p className="text-gray-600">
                    Expertos en componentes PC con asesoramiento técnico especializado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Gamepad2 className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Gaming Zone</h3>
                  <p className="text-gray-600">
                    Sección especializada en gaming con los mejores precios en equipos gaming.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <TrendingDown className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ofertas Diarias</h3>
                  <p className="text-gray-600">
                    Ofertas flash y descuentos especiales en componentes y tecnología.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Monitor className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Montaje Gratuito</h3>
                  <p className="text-gray-600">
                    Servicio de montaje de PC gratuito con la compra de componentes.
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
              ¿Listo para encontrar los mejores componentes PC?
            </h2>
            <p className="text-gray-600 mb-8">
              Compara precios en PcComponentes y encuentra todo lo que necesitas para tu setup gaming.
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
  title: "Comparador de Precios PcComponentes - Gaming y PC | Comparaelprecio",
  description: "Especialistas en PcComponentes España. Encuentra las mejores ofertas en componentes PC, gaming, monitores y tecnología.",
  keywords: ["pccomponentes precios", "ofertas pccomponentes", "componentes pc", "gaming pccomponentes", "comparador pccomponentes"],
};