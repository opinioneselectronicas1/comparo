// app/el-corte-ingles/page.tsx
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
  Award,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Comparador de Precios El Corte Inglés - Moda y Premium | Comparaelprecio",
  description:
    "Especialistas en El Corte Inglés España. Encuentra las mejores ofertas en moda, hogar, belleza y productos premium.",
  keywords: [
    "el corte ingles precios",
    "ofertas el corte ingles",
    "moda el corte ingles",
    "comparador el corte ingles",
  ],
};

export default function ElCorteInglesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background text-foreground">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-green-50 dark:from-[#0a1410] dark:to-[#0f1a14]">
          {/* Overlay para contraste en dark */}
          <div className="absolute inset-0 pointer-events-none bg-white/0 dark:bg-black/10" />
          <div className="relative z-10 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <Badge className="mb-4 bg-green-700 text-white dark:bg-green-700">
                👑 Especialistas en El Corte Inglés
              </Badge>

              <h1 className="mx-auto max-w-[22ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                Comparador de Precios para{" "}
                <span className="text-green-700 dark:text-emerald-400">
                  El Corte Inglés
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-[70ch] text-base sm:text-lg text-muted-foreground">
                Encuentra las mejores ofertas en moda, hogar, tecnología y más
                en El Corte Inglés España.
              </p>

              {/* Buscador */}
              <div id="buscar" className="mt-8 sm:mt-10">
                <SearchForm
                  placeholder="Pega aquí la URL de El Corte Inglés (ej: https://www.elcorteingles.es/...)"
                  buttonText="Analizar Producto"
                  className="mb-2"
                />
              </div>

              {/* Pills */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Crown className="mr-1 h-4 w-4" /> Calidad premium
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Gift className="mr-1 h-4 w-4" /> Ofertas exclusivas
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Award className="mr-1 h-4 w-4" /> Marcas de lujo
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS DESTACADAS */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Categorías destacadas en El Corte Inglés
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-emerald-400">
                    <Shirt className="h-6 w-6" />
                    Moda y Complementos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Las mejores marcas de moda para hombre, mujer y niños. Ropa,
                    zapatos y complementos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <Home className="h-6 w-6" />
                    Hogar y Decoración
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Muebles, decoración, textil hogar y todo lo necesario para
                    tu casa.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-400">
                    <Sparkles className="h-6 w-6" />
                    Belleza y Perfumería
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cosméticos, perfumes, cuidado personal y las mejores marcas
                    de belleza.
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
              Ventajas de comprar en El Corte Inglés
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Benefit
                icon={<Crown className="h-6 w-6 text-green-600" />}
                bubbleClass="bg-green-100/70 dark:bg-emerald-500/15"
                title="Calidad Garantizada"
                text="Productos de las mejores marcas con garantía de calidad y servicio premium."
              />
              <Benefit
                icon={<Gift className="h-6 w-6 text-blue-600" />}
                bubbleClass="bg-blue-100/70 dark:bg-blue-500/15"
                title="Tarjeta de Cliente"
                text="Descuentos exclusivos, financiación y ventajas especiales para clientes."
              />
              <Benefit
                icon={<Sparkles className="h-6 w-6 text-purple-600" />}
                bubbleClass="bg-purple-100/70 dark:bg-purple-500/15"
                title="Personal Shopper"
                text="Servicio de asesoramiento personalizado en moda y estilo."
              />
              <Benefit
                icon={<Award className="h-6 w-6 text-orange-600" />}
                bubbleClass="bg-orange-100/70 dark:bg-orange-500/15"
                title="Marcas Exclusivas"
                text="Acceso a marcas de lujo y productos exclusivos que no encontrarás en otros sitios."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para encontrar las mejores ofertas premium?
            </h2>
            <p className="text-muted-foreground mb-8">
              Compara precios en El Corte Inglés y encuentra productos de
              calidad al mejor precio.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-green-700 hover:bg-green-800 text-white"
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
