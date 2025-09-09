// app/mediamarkt/page.tsx
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
  Camera,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Comparador de Precios MediaMarkt - Tecnología y Electrónica | Comparaelprecio",
  description:
    "Especialistas en MediaMarkt España. Encuentra las mejores ofertas en móviles, informática, TV, gaming y electrónica.",
  keywords: [
    "mediamarkt precios",
    "ofertas mediamarkt",
    "tecnologia mediamarkt",
    "comparador mediamarkt",
    "electronica mediamarkt",
  ],
};

export default function MediaMarktPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background text-foreground">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50 dark:from-[#1a0d0d] dark:to-[#1a1409]">
          <div className="absolute inset-0 pointer-events-none bg-white/0 dark:bg-black/10" />
          <div className="relative z-10 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <Badge className="mb-4 bg-red-600 text-white dark:bg-red-600">
                📱 Especialistas en MediaMarkt
              </Badge>

              <h1 className="mx-auto max-w-[22ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                Comparador de Precios para{" "}
                <span className="text-red-600 dark:text-red-400">MediaMarkt</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[70ch] text-base sm:text-lg text-muted-foreground">
                Encuentra las mejores ofertas en tecnología y electrónica en MediaMarkt España.
              </p>

              {/* Buscador */}
              <div id="buscar" className="mt-8 sm:mt-10">
                <SearchForm
                  placeholder="Pega aquí la URL de MediaMarkt (ej: https://www.mediamarkt.es/...)"
                  buttonText="Analizar Producto"
                  className="mb-2"
                />
              </div>

              {/* Pills informativas */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Smartphone className="mr-1 h-4 w-4" /> Móviles y tablets
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Laptop className="mr-1 h-4 w-4" /> Informática
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Tv className="mr-1 h-4 w-4" /> TV y audio
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS PRINCIPALES */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Categorías más populares en MediaMarkt
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                    <Smartphone className="h-6 w-6" />
                    Móviles y Tablets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Los últimos smartphones, tablets y accesorios de las mejores marcas al mejor precio.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <Laptop className="h-6 w-6" />
                    Informática
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Portátiles, sobremesa, componentes y periféricos para gaming y trabajo.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-violet-700 dark:text-violet-400">
                    <Tv className="h-6 w-6" />
                    TV y Audio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Televisores 4K, sistemas de sonido, barras de sonido y equipos de música.
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
                    Consolas, videojuegos, accesorios y componentes para PC gaming.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                    <Headphones className="h-6 w-6" />
                    Audio y Sonido
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Auriculares, altavoces y accesorios de audio profesional.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                    <Camera className="h-6 w-6" />
                    Fotografía
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cámaras digitales, objetivos y accesorios para fotógrafos.
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
              Ventajas de comprar en MediaMarkt
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Benefit
                icon={<TrendingDown className="h-6 w-6 text-red-600" />}
                bubbleClass="bg-red-100/70 dark:bg-red-500/15"
                title="Precio Mínimo Garantizado"
                text="Si encuentras un precio más bajo, MediaMarkt te iguala el precio."
              />
              <Benefit
                icon={<Smartphone className="h-6 w-6 text-blue-600" />}
                bubbleClass="bg-blue-100/70 dark:bg-blue-500/15"
                title="Especialistas en Tecnología"
                text="Asesoramiento experto y servicio técnico especializado en todas las tiendas."
              />
              <Benefit
                icon={<Gamepad2 className="h-6 w-6 text-emerald-600" />}
                bubbleClass="bg-emerald-100/70 dark:bg-emerald-500/15"
                title="Zona Gaming"
                text="Sección especializada en gaming con los últimos lanzamientos y ofertas exclusivas."
              />
              <Benefit
                icon={<Tv className="h-6 w-6 text-violet-600" />}
                bubbleClass="bg-violet-100/70 dark:bg-violet-500/15"
                title="Instalación y Configuración"
                text="Servicio de instalación y configuración de TV, equipos de sonido y más."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para encontrar la mejor tecnología al mejor precio?
            </h2>
            <p className="text-muted-foreground mb-8">
              Compara precios en MediaMarkt y encuentra las mejores ofertas en tecnología y electrónica.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-red-600 hover:bg-red-700 text-white"
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
