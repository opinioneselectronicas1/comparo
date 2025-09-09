import {
  TrendingDown,
  Brain,
  Bell,
  ShoppingCart,
  BarChart3,
  Zap,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: TrendingDown,
    title: "Histórico de Precios",
    description:
      "Visualiza la evolución del precio durante los últimos 6 meses y descubre el mejor momento para comprar.",
  },
  {
    icon: Brain,
    title: "Análisis con IA",
    description:
      "Nuestra IA analiza reseñas, características y precios para darte una recomendación personalizada.",
  },
  {
    icon: Bell,
    title: "Alertas de Precio",
    description:
      "Recibe notificaciones cuando el precio baje al nivel que deseas. Nunca te pierdas una oferta.",
  },
  {
    icon: ShoppingCart,
    title: "Comparación Multi-tienda",
    description:
      "Compara precios en Amazon, Carrefour, MediaMarkt, El Corte Inglés y muchas tiendas más.",
  },
  {
    icon: BarChart3,
    title: "Estadísticas Avanzadas",
    description:
      "Precio mínimo, máximo, promedio y tendencias para tomar la mejor decisión de compra.",
  },
  {
    icon: Zap,
    title: "Búsqueda Instantánea",
    description:
      "Solo pega la URL del producto y obtén toda la información en segundos. Rápido y sencillo.",
  },
];

const Features = () => {
  return (
    <div id="funcionalidades" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Todo lo que necesitas para ahorrar
      </h2>
      <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
        Herramientas inteligentes para encontrar el mejor precio y tomar decisiones de compra informadas
      </p>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5 hover:shadow-lg transition-shadow"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-primary/10 rounded-full">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;