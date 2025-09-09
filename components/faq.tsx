import {
  Search,
  TrendingDown,
  ShieldCheck,
  Bell,
  Zap,
  HelpCircle,
} from "lucide-react";

const faq = [
  {
    icon: Search,
    question: "¿Cómo funciona el comparador de precios?",
    answer:
      "Simplemente pega la URL del producto de cualquier tienda compatible y nuestro sistema buscará automáticamente el mejor precio en todas las tiendas disponibles.",
  },
  {
    icon: TrendingDown,
    question: "¿Qué tiendas están incluidas?",
    answer:
      "Comparamos precios en Amazon, Carrefour, MediaMarkt, El Corte Inglés, Fnac, PcComponentes y muchas más. Añadimos nuevas tiendas regularmente.",
  },
  {
    icon: Bell,
    question: "¿Cómo funcionan las alertas de precio?",
    answer:
      "Configura el precio objetivo para cualquier producto y te enviaremos un email cuando el precio baje a ese nivel o por debajo.",
  },
  {
    icon: ShieldCheck,
    question: "¿Es seguro usar Comparaelprecio?",
    answer:
      "Completamente seguro. No almacenamos información personal sensible y todos los enlaces te llevan directamente a las tiendas oficiales.",
  },
  {
    icon: Zap,
    question: "¿Qué incluye el análisis con IA?",
    answer:
      "Nuestra IA analiza reseñas, características técnicas, histórico de precios y tendencias para darte una recomendación personalizada de compra.",
  },
  {
    icon: HelpCircle,
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario. No hay compromisos ni penalizaciones.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Preguntas Frecuentes
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Resolvemos las dudas más comunes sobre nuestro comparador de precios.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-primary/10">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6 text-primary" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base text-muted-foreground">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;