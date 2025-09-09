"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CircleCheck, CircleHelp } from "lucide-react";
import { useState } from "react";

const tooltipContent = {
  alertas: "Recibe notificaciones por email cuando baje el precio.",
  historico: "Accede al histórico completo de precios de cualquier producto.",
  analisis: "Análisis detallado con IA de productos y recomendaciones.",
};

const YEARLY_DISCOUNT = 30;
const plans = [
  {
    name: "Gratuito",
    price: 0,
    description:
      "Perfecto para uso ocasional. Compara precios básicos sin límites.",
    features: [
      { title: "Comparación de precios ilimitada" },
      { title: "Búsqueda en 5+ tiendas principales" },
      { title: "Histórico básico (30 días)", tooltip: tooltipContent.historico },
      { title: "Soporte por email" },
    ],
    buttonText: "Empezar Gratis",
  },
  {
    name: "Premium",
    price: 9,
    isRecommended: true,
    description:
      "Para compradores inteligentes que quieren ahorrar al máximo.",
    features: [
      { title: "Todo lo del plan Gratuito" },
      { title: "Histórico completo (6 meses)", tooltip: tooltipContent.historico },
      { title: "Alertas de precio ilimitadas", tooltip: tooltipContent.alertas },
      { title: "Análisis con IA", tooltip: tooltipContent.analisis },
      { title: "Comparación en 15+ tiendas" },
      { title: "Soporte prioritario" },
    ],
    buttonText: "Comenzar Premium",
    isPopular: true,
  },
  {
    name: "Profesional",
    price: 19,
    description:
      "Para empresas y usuarios avanzados que necesitan el máximo control.",
    features: [
      { title: "Todo lo del plan Premium" },
      { title: "API de acceso a datos" },
      { title: "Exportación de datos" },
      { title: "Análisis de tendencias avanzado" },
      { title: "Alertas personalizadas" },
      { title: "Soporte telefónico" },
    ],
    buttonText: "Contactar Ventas",
  },
];

const Pricing = () => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <div id="precios" className="flex flex-col items-center justify-center py-12 sm:py-20 px-6">
      <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-center tracking-tight">
        Planes y Precios
      </h1>
      <p className="mt-4 text-sm sm:text-base text-center text-muted-foreground max-w-2xl">
        Elige el plan que mejor se adapte a tus necesidades de ahorro
      </p>
      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8"
      >
        <TabsList className="h-11 px-1.5 rounded-full bg-primary/5">
          <TabsTrigger value="monthly" className="py-1.5 rounded-full">
            Mensual
          </TabsTrigger>
          <TabsTrigger value="yearly" className="py-1.5 rounded-full">
            Anual (Ahorra {YEARLY_DISCOUNT}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="mt-8 sm:mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-6 sm:gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative border rounded-xl p-4 sm:p-6 bg-background/50", {
              "border-[2px] border-primary bg-background py-6 sm:py-10": plan.isPopular,
            })}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Más Popular
              </Badge>
            )}
            <h3 className="text-base sm:text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              {plan.price === 0 ? (
                "Gratis"
              ) : (
                <>
                  €
                  {selectedBillingPeriod === "monthly"
                    ? plan.price
                    : Math.round(plan.price * ((100 - YEARLY_DISCOUNT) / 100))}
                  <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                    /mes
                  </span>
                </>
              )}
            </p>
            <p className="mt-4 text-sm sm:text-base font-medium text-muted-foreground">
              {plan.description}
            </p>

            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-4 sm:mt-6 text-sm sm:text-base"
            >
              {plan.buttonText}
            </Button>
            <Separator className="my-4 sm:my-8" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-1.5 text-sm">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature.title}
                  {feature.tooltip && (
                    <Tooltip>
                      <TooltipTrigger className="cursor-help">
                        <CircleHelp className="h-4 w-4 mt-1 text-gray-500" />
                      </TooltipTrigger>
                      <TooltipContent>{feature.tooltip}</TooltipContent>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;