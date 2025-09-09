// app/pccomponentes/page.tsx
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
  HardDrive,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Comparador de Precios PcComponentes - Gaming y PC | Comparaelprecio",
  description:
    "Especialistas en PcComponentes España. Encuentra las mejores ofertas en componentes PC, gaming, monitores y tecnología.",
  keywords: [
    "pccomponentes precios",
    "ofertas pccomponentes",
    "componentes pc",
    "gaming pccomponentes",
    "comparador pccomponentes",
  ],
};

export default function PcComponentesPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-12 bg-background text-foreground">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-violet-50 dark:from-[#0e1524] dark:to-[#141126]">
          <div className="absolute inset-0 pointer-events-none bg-white/0 dark:bg-black/10" />
          <div className="relative z-10 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <Badge className="mb-4 bg-blue-600 text-white dark:bg-blue-600">
                💻 Especialistas en PcComponentes
              </Badge>

              <h1 className="mx-auto max-w-[22ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                Comparador de Precios para{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  PcComponentes
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-[70ch] text-base sm:text-lg text-muted-foreground">
                Encuentra las mejores ofertas en componentes PC, gaming y
                tecnología en PcComponentes España.
              </p>

              {/* Buscador */}
              <div id="buscar" className="mt-8 sm:mt-10">
                <SearchForm
                  placeholder="Pega aquí la URL de PcComponentes (ej: https://www.pccomponentes.com/...)"
                  buttonText="Analizar Producto"
                  className="mb-2"
                />
              </div>

              {/* Pills informativas */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Cpu className="mr-1 h-4 w-4" /> Componentes PC
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Gamepad2 className="mr-1 h-4 w-4" /> Gaming
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Monitor className="mr-1 h-4 w-4" /> Periféricos
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS PRINCIPALES */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Categorías más populares en PcComponentes
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <Cpu className="h-6 w-6" />,
                  title: "Componentes PC",
                  color: "text-blue-700 dark:text-blue-400",
                  desc: "Procesadores, gráficas, RAM, placas base y todo para montar tu PC.",
                },
                {
                  icon: <Gamepad2 className="h-6 w-6" />,
                  title: "Gaming",
                  color: "text-violet-700 dark:text-violet-400",
                  desc: "Equipos gaming, sillas, teclados mecánicos, ratones y accesorios.",
                },
                {
                  icon: <Monitor className="h-6 w-6" />,
                  title: "Monitores",
                  color: "text-emerald-700 dark:text-emerald-400",
                  desc: "Monitores gaming, 4K, ultrawide, para diseño y todos los tamaños.",
                },
                {
                  icon: <Smartphone className="h-6 w-6" />,
                  title: "Móviles y Tablets",
                  color: "text-orange-700 dark:text-orange-400",
                  desc: "Smartphones, tablets, wearables y accesorios de primeras marcas.",
                },
                {
                  icon: <Headphones className="h-6 w-6" />,
                  title: "Audio",
                  color: "text-red-700 dark:text-red-400",
                  desc: "Auriculares, altavoces, micrófonos y equipos de audio.",
                },
                {
                  icon: <HardDrive className="h-6 w-6" />,
                  title: "Almacenamiento",
                  color: "text-indigo-700 dark:text-indigo-400",
                  desc: "HDD, SSD, USB, tarjetas SD y soluciones de backup.",
                },
              ].map((cat, i) => (
                <Card
                  key={i}
                  className="bg-card border border-border hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className={`flex items-center gap-2 ${cat.color}`}>
                      {cat.icon}
                      {cat.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{cat.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* VENTAJAS */}
        <section className="bg-muted/40 dark:bg-muted/20 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Ventajas de comprar en PcComponentes
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Benefit
                icon={<Cpu className="h-6 w-6 text-blue-600" />}
                bubbleClass="bg-blue-100/70 dark:bg-blue-500/15"
                title="Especialistas en PC"
                text="Expertos en componentes PC con asesoramiento técnico especializado."
              />
              <Benefit
                icon={<Gamepad2 className="h-6 w-6 text-violet-600" />}
                bubbleClass="bg-violet-100/70 dark:bg-violet-500/15"
                title="Gaming Zone"
                text="Sección de gaming con los mejores precios en equipos y accesorios."
              />
              <Benefit
                icon={<TrendingDown className="h-6 w-6 text-emerald-600" />}
                bubbleClass="bg-emerald-100/70 dark:bg-emerald-500/15"
                title="Ofertas Diarias"
                text="Ofertas flash y descuentos especiales en componentes y tecnología."
              />
              <Benefit
                icon={<Monitor className="h-6 w-6 text-orange-600" />}
                bubbleClass="bg-orange-100/70 dark:bg-orange-500/15"
                title="Montaje Gratuito"
                text="Servicio de montaje de PC gratuito con la compra de componentes."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para encontrar los mejores componentes PC?
            </h2>
            <p className="text-muted-foreground mb-8">
              Compara precios en PcComponentes y encuentra todo lo que necesitas para tu setup
              gaming.
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
