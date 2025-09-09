// app/xiaomi/page.tsx
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchForm } from "@/components/search-form";
import {
  Search,
  TrendingDown,
  Smartphone,
  Home,
  Zap,
  Shield,
  Star,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Comparador de Precios Xiaomi - Smartphones y Smart Home | Comparaelprecio",
  description:
    "Especialistas en productos Xiaomi España. Encuentra las mejores ofertas en smartphones, smart home y ecosistema Mi.",
  keywords: [
    "xiaomi precios",
    "ofertas xiaomi",
    "smartphones xiaomi",
    "smart home xiaomi",
    "comparador xiaomi",
  ],
};

export default function XiaomiPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background text-foreground">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-rose-50 dark:from-[#1a1206] dark:to-[#190d12]">
          <div className="absolute inset-0 pointer-events-none bg-white/0 dark:bg-black/10" />
          <div className="relative z-10 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <Badge className="mb-4 bg-orange-600 text-white dark:bg-orange-600">
                📱 Especialistas en Xiaomi
              </Badge>

              <h1 className="mx-auto max-w-[22ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                Comparador de Precios para{" "}
                <span className="text-orange-600 dark:text-orange-400">Xiaomi</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[70ch] text-base sm:text-lg text-muted-foreground">
                Encuentra las mejores ofertas en productos Xiaomi España. Smartphones, smart home y
                ecosistema Mi.
              </p>

              {/* Buscador */}
              <div id="buscar" className="mt-8 sm:mt-10">
                <SearchForm
                  placeholder="Pega aquí la URL de Xiaomi (ej: https://www.mi.com/es/...)"
                  buttonText="Analizar Producto"
                  className="mb-2"
                />
              </div>

              {/* Pills informativas */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Smartphone className="mr-1 h-4 w-4" /> Smartphones
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Home className="mr-1 h-4 w-4" /> Smart Home
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Zap className="mr-1 h-4 w-4" /> Ecosistema Mi
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS PRINCIPALES */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Productos destacados de Xiaomi
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                    <Smartphone className="h-6 w-6" />
                    Smartphones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gama Redmi, Mi y POCO. Los mejores smartphones con la mejor relación
                    calidad-precio.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <Home className="h-6 w-6" />
                    Smart Home
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Aspiradoras robot, purificadores, cámaras de seguridad y dispositivos
                    inteligentes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                    <Headphones className="h-6 w-6" />
                    Audio y Wearables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Auriculares, altavoces, smartwatches y pulseras de actividad Mi Band.
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
              Ventajas de comprar productos Xiaomi
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Benefit
                icon={<TrendingDown className="h-6 w-6 text-orange-600" />}
                bubbleClass="bg-orange-100/70 dark:bg-orange-500/15"
                title="Mejor Precio-Calidad"
                text="Productos de alta calidad a precios muy competitivos, la filosofía de Xiaomi."
              />
              <Benefit
                icon={<Zap className="h-6 w-6 text-blue-600" />}
                bubbleClass="bg-blue-100/70 dark:bg-blue-500/15"
                title="Ecosistema Conectado"
                text="Todos los productos se conectan entre sí creando un hogar inteligente completo."
              />
              <Benefit
                icon={<Shield className="h-6 w-6 text-emerald-600" />}
                bubbleClass="bg-emerald-100/70 dark:bg-emerald-500/15"
                title="Garantía Oficial"
                text="Garantía oficial en España con servicio técnico y actualizaciones regulares."
              />
              <Benefit
                icon={<Star className="h-6 w-6 text-violet-600" />}
                bubbleClass="bg-violet-100/70 dark:bg-violet-500/15"
                title="Innovación Constante"
                text="Siempre a la vanguardia tecnológica con productos innovadores y actualizados."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para descubrir el ecosistema Xiaomi?
            </h2>
            <p className="text-muted-foreground mb-8">
              Compara precios de productos Xiaomi y encuentra la mejor tecnología al mejor precio.
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
