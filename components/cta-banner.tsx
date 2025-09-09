import { ArrowUpRight, Search } from "lucide-react";
import { Button } from "./ui/button";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function CTABanner() {
  return (
    <div className="px-6">
      <div className="dark:border relative overflow-hidden my-12 sm:my-20 w-full dark bg-background text-foreground max-w-screen-lg mx-auto rounded-2xl py-8 sm:py-10 md:py-16 px-4 sm:px-6 md:px-14">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
            "inset-x-0 inset-y-0 h-[200%] skew-y-12"
          )}
        />
        <div className="relative z-0 flex flex-col gap-3">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            ¿Listo para empezar a ahorrar?
          </h3>
          <p className="mt-2 text-sm sm:text-base md:text-lg">
            Únete a miles de usuarios que ya ahorran dinero con nuestro comparador de precios inteligente.
          </p>
        </div>
        <div className="relative z-0 mt-8 sm:mt-14 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <a href="/#buscar">
              Comparar Precios Ahora <Search className="!h-5 !w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline">
            Ver Demo <ArrowUpRight className="!h-5 !w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}