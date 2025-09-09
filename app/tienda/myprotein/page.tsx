// app/myprotein/page.tsx
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
  Target,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title:
    "Comparador de Precios Myprotein - Suplementos Deportivos | Comparaelprecio",
  description:
    "Especialistas en Myprotein España. Encuentra las mejores ofertas en proteínas, pre-entrenos, vitaminas y suplementos deportivos.",
  keywords: [
    "myprotein precios",
    "ofertas myprotein",
    "proteinas myprotein",
    "suplementos deportivos",
    "comparador myprotein",
  ],
};

export default function MyproteinPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background text-foreground pt-24 pb-12">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-[#0d1a1d] dark:to-[#0e1a10]">
          <div className="absolute inset-0 pointer-events-none bg-white/0 dark:bg-black/10" />
          <div className="relative z-10 px-6 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <Badge className="mb-4 bg-blue-600 text-white dark:bg-blue-600">
                💪 Especialistas en Myprotein
              </Badge>

              <h1 className="mx-auto max-w-[22ch] text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1]">
                Comparador de Precios para{" "}
                <span className="text-blue-600 dark:text-blue-400">Myprotein</span>
              </h1>

              <p className="mx-auto mt-5 max-w-[70ch] text-base sm:text-lg text-muted-foreground">
                Encuentra las mejores ofertas en suplementos deportivos y nutrición en Myprotein España.
              </p>

              {/* Buscador */}
              <div id="buscar" className="mt-8 sm:mt-10">
                <SearchForm
                  placeholder="Pega aquí la URL de Myprotein (ej: https://www.myprotein.es/...)"
                  buttonText="Analizar Producto"
                  className="mb-2"
                />
              </div>

              {/* Pills */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Dumbbell className="mr-1 h-4 w-4" /> Proteínas
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Zap className="mr-1 h-4 w-4" /> Pre-entrenos
                </Badge>
                <Badge variant="outline" className="text-sm py-2 px-3 border-border">
                  <Heart className="mr-1 h-4 w-4" /> Vitaminas
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORÍAS PRINCIPALES */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center text-3xl font-bold">
              Categorías más populares en Myprotein
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: <Dumbbell className="h-6 w-6" />,
                  title: "Proteínas",
                  color: "text-blue-700 dark:text-blue-400",
                  desc: "Whey protein, caseína, proteína vegana y todos los tipos de proteína para tus objetivos.",
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Pre-entrenos",
                  color: "text-emerald-700 dark:text-emerald-400",
                  desc: "Suplementos pre-entreno, creatina, BCAA y todo lo necesario para maximizar tu rendimiento.",
                },
                {
                  icon: <Heart className="h-6 w-6" />,
                  title: "Salud y Bienestar",
                  color: "text-red-700 dark:text-red-400",
                  desc: "Vitaminas, minerales, omega-3 y suplementos para cuidar tu salud general.",
                },
                {
                  icon: <Target className="h-6 w-6" />,
                  title: "Pérdida de Peso",
                  color: "text-purple-700 dark:text-purple-400",
                  desc: "Quemadores de grasa, L-carnitina y suplementos para ayudarte a alcanzar tu peso ideal.",
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Ropa Deportiva",
                  color: "text-orange-700 dark:text-orange-400",
                  desc: "Ropa de entrenamiento, accesorios fitness y todo lo necesario para tu rutina deportiva.",
                },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Snacks Saludables",
                  color: "text-indigo-700 dark:text-indigo-400",
                  desc: "Barritas proteicas, snacks fitness y alternativas saludables para tus antojos.",
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
              Ventajas de comprar en Myprotein
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Benefit
                icon={<Award className="h-6 w-6 text-blue-600" />}
                bubbleClass="bg-blue-100/70 dark:bg-blue-500/15"
                title="Calidad Garantizada"
                text="Productos testados en laboratorio con certificaciones de calidad internacionales."
              />
              <Benefit
                icon={<TrendingDown className="h-6 w-6 text-emerald-600" />}
                bubbleClass="bg-emerald-100/70 dark:bg-emerald-500/15"
                title="Mejores Precios"
                text="Ofertas constantes y descuentos especiales en los mejores suplementos deportivos."
              />
              <Benefit
                icon={<Users className="h-6 w-6 text-purple-600" />}
                bubbleClass="bg-purple-100/70 dark:bg-purple-500/15"
                title="Comunidad Fitness"
                text="Únete a una comunidad de millones de deportistas que confían en Myprotein."
              />
              <Benefit
                icon={<Dumbbell className="h-6 w-6 text-orange-600" />}
                bubbleClass="bg-orange-100/70 dark:bg-orange-500/15"
                title="Asesoramiento Experto"
                text="Consejos de nutricionistas y entrenadores para maximizar tus resultados."
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para alcanzar tus objetivos fitness?
            </h2>
            <p className="text-muted-foreground mb-8">
              Compara precios en Myprotein y encuentra los mejores suplementos para tu entrenamiento.
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
