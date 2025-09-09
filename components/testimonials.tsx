import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    designation: "Compradora habitual",
    company: "Madrid",
    testimonial:
      "He ahorrado más de 200€ este año usando Comparaelprecio. Las alertas de precio son increíbles, nunca más pago de más.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    designation: "Entusiasta tecnología",
    company: "Barcelona",
    testimonial:
      "El análisis con IA me ayudó a elegir el mejor portátil. Comparó características y precios de forma muy detallada.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Ana Martín",
    designation: "Madre de familia",
    company: "Valencia",
    testimonial:
      "Perfecto para comparar precios de productos para niños. El histórico de precios me ayuda a saber cuándo comprar.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David López",
    designation: "Freelancer",
    company: "Sevilla",
    testimonial:
      "Como trabajo desde casa, necesito encontrar las mejores ofertas en equipos. Esta herramienta es imprescindible.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Laura Sánchez",
    designation: "Estudiante",
    company: "Bilbao",
    testimonial:
      "Con presupuesto limitado, cada euro cuenta. Las alertas me avisan cuando bajan los precios de los libros que necesito.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Miguel Torres",
    designation: "Jubilado",
    company: "Zaragoza",
    testimonial:
      "Muy fácil de usar. Solo pego el enlace y me muestra todos los precios. He encontrado ofertas que no sabía que existían.",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Testimonials = () => (
  <div id="testimonios" className="flex justify-center items-center py-12 sm:py-20">
    <div className="h-full w-full">
      <h2 className="mb-8 sm:mb-12 text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-tight px-6">
        Lo que dicen nuestros usuarios
      </h2>
      <div className="relative">
        <div className="z-10 absolute left-0 inset-y-0 w-[15%] bg-gradient-to-r from-background to-transparent" />
        <div className="z-10 absolute right-0 inset-y-0 w-[15%] bg-gradient-to-l from-background to-transparent" />
        <Marquee pauseOnHover className="[--duration:20s]">
          <TestimonialList />
        </Marquee>
        <Marquee pauseOnHover reverse className="mt-0 [--duration:20s]">
          <TestimonialList />
        </Marquee>
      </div>
    </div>
  </div>
);

const TestimonialList = () =>
  testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="min-w-80 sm:min-w-96 max-w-sm bg-accent rounded-xl p-4 sm:p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-base sm:text-lg font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.designation}</p>
            <p className="text-xs text-gray-400">{testimonial.company}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#" target="_blank">
            <TwitterLogo className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <p className="mt-4 sm:mt-5 text-sm sm:text-[17px]">{testimonial.testimonial}</p>
    </div>
  ));

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonials;