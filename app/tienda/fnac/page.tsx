// app/fnac/page.tsx
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
  Coffee,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Comparador de Precios Fnac - Libros, Música y Cultura | Comparaelprecio",
  description:
    "Especialistas en Fnac España. Encuentra las mejores ofertas en libros, música, cine, gaming y productos culturales.",
  keywords: [
    "fnac precios",
    "ofertas fnac",
    "libros fnac",
    "musica fnac",
    "comparador fnac",
  ],
};

export default function FnacPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background text-foreground">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-rose-50 dark:from-[#1a120a] dark:to-[#1b0f12]">
          {/* Overlay para contraste en dark */}
          <div className="absolute inset-0 pointer-events-none bg-white/0 dark:bg-black/10" />
          <div className="relative z-10 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <Badge className="mb-4 bg-orange-600 text-white dark:bg-orange-600">
                📚 Especialistas en Fnac
              </Badge>

              <h1 className="mx-auto max-w-[22ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                Comparador de Precios para{" "}
                <span className="text-orange-600 dark:text-orange-400">Fnac</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[70ch] text-base sm:text-lg text-muted-foreground">
                Encuentra las mejores ofertas en libros, música, cine, gaming y tecnología en Fnac
                España.
              </p>

              {/* Buscador */}
              <div id="buscar" className="mt-8 sm:mt-10">
                <SearchForm
                  placeholder="Pega aquí la URL de Fnac (ej: https://www.fnac.es/...)"
                  buttonText="Analizar Producto"
                  className="mb-2"
                />
              </div>

              {/* Pills informativas */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Book className="mr-1 h-4 w-4" /> Libros y eBooks
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Music className="mr-1 h-4 w-4" /> Música y vinilos
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Film className="mr-1 h-4 w-4" /> Cine y series
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS DESTACADAS */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Categorías destacadas en Fnac
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                    <Book className="h-6 w-6" />
                    Libros y Literatura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    La mayor selección de libros, eBooks, cómics y literatura en español y otros
                    idiomas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-700 dark:text-rose-400">
                    <Music className="h-6 w-6" />
                    Música y Vinilos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    CDs, vinilos, música digital y los últimos lanzamientos de todos los géneros.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <Film className="h-6 w-6" />
                    Cine y Series
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    DVDs, Blu-rays, series de TV y las últimas novedades del mundo del cine.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                    <Gamepad2 className="h-6 w-6" />
                    Gaming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Videojuegos para todas las consolas, accesorios gaming y merchandising.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-violet-700 dark:text-violet-400">
                    <Headphones className="h-6 w-6" />
                    Tecnología
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Auriculares, altavoces, tablets, eReaders y accesorios tecnológicos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                    <Coffee className="h-6 w-6" />
                    Experiencias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Eventos culturales, presentaciones de libros y experiencias únicas en Fnac.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* VENTAJAS */}
        <section className="bg-muted/40 dark:bg-muted/20 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Ventajas de comprar en Fnac
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Benefit
                icon={<Book className="h-6 w-6 text-orange-600" />}
                bubbleClass="bg-orange-100/70 dark:bg-orange-500/15"
                title="Cultura y Entretenimiento"
                text="Especialistas en productos culturales con la mayor selección de libros, música y cine."
              />
              <Benefit
                icon={<TrendingDown className="h-6 w-6 text-rose-600" />}
                bubbleClass="bg-rose-100/70 dark:bg-rose-500/15"
                title="Ofertas Exclusivas"
                text="Descuentos especiales para socios Fnac y ofertas exclusivas en productos seleccionados."
              />
              <Benefit
                icon={<Coffee className="h-6 w-6 text-blue-600" />}
                bubbleClass="bg-blue-100/70 dark:bg-blue-500/15"
                title="Experiencia en Tienda"
                text="Espacios únicos donde puedes descubrir, probar y disfrutar de la cultura."
              />
              <Benefit
                icon={<Music className="h-6 w-6 text-emerald-600" />}
                bubbleClass="bg-emerald-100/70 dark:bg-emerald-500/15"
                title="Eventos Culturales"
                text="Presentaciones de libros, conciertos íntimos y eventos exclusivos para clientes."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para descubrir las mejores ofertas culturales?
            </h2>
            <p className="text-muted-foreground mb-8">
              Compara precios en Fnac y encuentra los mejores productos culturales y de
              entretenimiento.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-orange-600 hover:bg-orange-700 text-white"
            >
              <Link href="/#buscar">
                Empezar a Comparar <Search className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

/* ============ helpers ============ */

function Benefit({
  icon,
  bubbleClass,
  title,
  text,
}: {
  icon: React.ReactNode;
  bubbleClass?: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-full border border-border ${bubbleClass ?? ""}`}>
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
