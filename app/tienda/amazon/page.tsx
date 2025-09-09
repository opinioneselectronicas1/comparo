// app/amazon/page.tsx
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import {
  Search,
  TrendingDown,
  Brain,
  Star,
  Truck,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Comparador de Precios Amazon - Histórico y Análisis IA | Comparaelprecio",
  description:
    "Especialistas en Amazon España. Histórico de precios, análisis con IA, alertas personalizadas y las mejores ofertas. ¡Ahorra hasta un 40%!",
  keywords: [
    "amazon precios",
    "ofertas amazon",
    "historico precios amazon",
    "comparador amazon",
    "descuentos amazon",
  ],
};

export default function AmazonPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background text-foreground">
        {/* HERO */}
        <section
          className="
            relative overflow-hidden
            bg-gradient-to-br from-orange-50 to-yellow-50
            dark:from-[#0b0b0b] dark:to-[#121212]
          "
        >
          {/* overlay para contraste del contenido */}
          <div className="absolute inset-0 pointer-events-none bg-white/0 dark:bg-black/10" />
          <div className="relative z-10 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <Badge className="mb-4 bg-orange-500 text-white dark:bg-orange-500">
                🛒 Especialistas en Amazon
              </Badge>

              <h1 className="mx-auto max-w-[20ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                Comparador de Precios para{" "}
                <span className="text-orange-600 dark:text-orange-400">
                  Amazon
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-[70ch] text-base sm:text-lg text-muted-foreground">
                Encuentra las mejores ofertas en Amazon España. Histórico de
                precios, análisis con IA y alertas personalizadas.
              </p>

              {/* Buscador */}
              <div id="buscar" className="mt-8 sm:mt-10">
                <SearchForm
                  placeholder="Pega aquí la URL de Amazon (ej: https://www.amazon.es/dp/...)"
                  buttonText="Analizar Producto"
                  className="mb-2"
                />
              </div>

              {/* Pills informativas */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-3 border-border"
                >
                  <Star className="mr-1 h-4 w-4" /> Análisis de reseñas
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-3 border-border"
                >
                  <TrendingDown className="mr-1 h-4 w-4" /> Histórico 6 meses
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm py-2 px-3 border-border"
                >
                  <Brain className="mr-1 h-4 w-4" /> IA especializada
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              ¿Por qué elegir nuestro comparador para Amazon?
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                    <Brain className="h-6 w-6" />
                    Análisis IA Avanzado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Analizamos reseñas, características técnicas y tendencias de
                    precio para darte la mejor recomendación de compra.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <BarChart3 className="h-6 w-6" />
                    Histórico Completo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Accede al histórico de precios de los últimos 6 meses y
                    descubre cuándo es el mejor momento para comprar.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <Zap className="h-6 w-6" />
                    Alertas Inteligentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Configura alertas de precio y recibe notificaciones cuando
                    tu producto favorito baje de precio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* BENEFICIOS AMAZON */}
        <section className="bg-muted/40 dark:bg-muted/20 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Ventajas de comprar en Amazon
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Benefit
                icon={<Truck className="h-6 w-6 text-orange-600" />}
                bubbleClass="bg-orange-100/70 dark:bg-orange-500/15"
                title="Envío Rápido"
                text="Envío gratuito con Amazon Prime y entrega en 24-48 horas en miles de productos."
              />
              <Benefit
                icon={<Shield className="h-6 w-6 text-blue-600" />}
                bubbleClass="bg-blue-100/70 dark:bg-blue-500/15"
                title="Garantía A-Z"
                text="Protección completa en tus compras con la garantía de devolución de Amazon."
              />
              <Benefit
                icon={<Star className="h-6 w-6 text-green-600" />}
                bubbleClass="bg-green-100/70 dark:bg-green-500/15"
                title="Reseñas Verificadas"
                text="Miles de reseñas de compradores reales para ayudarte a decidir."
              />
              <Benefit
                icon={<TrendingDown className="h-6 w-6 text-purple-600" />}
                bubbleClass="bg-purple-100/70 dark:bg-purple-500/15"
                title="Ofertas Diarias"
                text="Ofertas flash, ofertas del día y descuentos especiales constantemente."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para encontrar las mejores ofertas en Amazon?
            </h2>
            <p className="text-muted-foreground mb-8">
              Únete a miles de usuarios que ya ahorran dinero con nuestro
              comparador especializado en Amazon.
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
      <div
        className={`p-3 rounded-full border border-border ${bubbleClass ?? ""}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
