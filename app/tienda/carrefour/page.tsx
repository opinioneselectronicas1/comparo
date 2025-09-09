// app/carrefour/page.tsx
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
  Home,
  Zap,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Comparador de Precios Carrefour - Online y Tienda | Comparaelprecio",
  description:
    "Especialistas en Carrefour España. Compara precios online y en tienda física. Ofertas semanales y descuentos exclusivos.",
  keywords: [
    "carrefour precios",
    "ofertas carrefour",
    "carrefour online",
    "comparador carrefour",
    "descuentos carrefour",
  ],
};

export default function CarrefourPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background text-foreground">
        {/* HERO */}
        <section
          className="
            relative overflow-hidden
            bg-gradient-to-br from-blue-50 to-red-50
            dark:from-[#0b0e14] dark:to-[#12151b]
          "
        >
          {/* overlay para contraste del contenido */}
          <div className="absolute inset-0 pointer-events-none bg-white/0 dark:bg-black/10" />
          <div className="relative z-10 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <Badge className="mb-4 bg-blue-600 text-white dark:bg-blue-600">
                🛒 Especialistas en Carrefour
              </Badge>

              <h1 className="mx-auto max-w-[22ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                Comparador de Precios para{" "}
                <span className="text-blue-600 dark:text-blue-400">Carrefour</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[70ch] text-base sm:text-lg text-muted-foreground">
                Encuentra las mejores ofertas en Carrefour España. Compara precios online y en tienda física.
              </p>

              {/* Buscador */}
              <div id="buscar" className="mt-8 sm:mt-10">
                <SearchForm
                  placeholder="Pega aquí la URL de Carrefour (ej: https://www.carrefour.es/...)"
                  buttonText="Analizar Producto"
                  className="mb-2"
                />
              </div>

              {/* Pills informativas */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <MapPin className="mr-1 h-4 w-4" /> Online y tienda física
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <TrendingDown className="mr-1 h-4 w-4" /> Ofertas semanales
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Percent className="mr-1 h-4 w-4" /> Descuentos exclusivos
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              ¿Por qué elegir nuestro comparador para Carrefour?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <ShoppingCart className="h-6 w-6" />
                    Precios Online y Tienda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comparamos precios tanto online como en tienda física para que encuentres la mejor opción.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <Percent className="h-6 w-6" />
                    Ofertas Semanales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seguimiento de las ofertas y promociones especiales de Carrefour.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Users className="h-6 w-6" />
                    Tarjeta Carrefour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Información sobre descuentos adicionales disponibles con la tarjeta Carrefour.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="bg-muted/40 dark:bg-muted/20 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Ventajas de comprar en Carrefour
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Benefit
                icon={<MapPin className="h-6 w-6 text-blue-600" />}
                bubbleClass="bg-blue-100/70 dark:bg-blue-500/15"
                title="Recogida en Tienda"
                text="Compra online y recoge en tu Carrefour más cercano sin gastos de envío."
              />
              <Benefit
                icon={<Percent className="h-6 w-6 text-red-600" />}
                bubbleClass="bg-red-100/70 dark:bg-red-500/15"
                title="Ofertas Exclusivas"
                text="Acceso a ofertas especiales y descuentos exclusivos para clientes online."
              />
              <Benefit
                icon={<Home className="h-6 w-6 text-green-600" />}
                bubbleClass="bg-green-100/70 dark:bg-green-500/15"
                title="Entrega a Domicilio"
                text="Servicio de entrega a domicilio para tu compra semanal y productos grandes."
              />
              <Benefit
                icon={<Clock className="h-6 w-6 text-purple-600" />}
                bubbleClass="bg-purple-100/70 dark:bg-purple-500/15"
                title="Horarios Amplios"
                text="Tiendas abiertas hasta tarde y compra online 24/7 para tu comodidad."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para encontrar las mejores ofertas en Carrefour?
            </h2>
            <p className="text-muted-foreground mb-8">
              Compara precios online y en tienda física para ahorrar en tu compra semanal.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white"
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
