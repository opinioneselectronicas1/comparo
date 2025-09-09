import { getVerificador, getAmazon } from "@/lib/api";
import { ProductView } from "@/components/product-view";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    slug: string[];
  };
  searchParams: {
    url?: string;
  };
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { url } = searchParams;
  
  if (!url) {
    notFound();
  }

  try {
    // Siempre llamamos primero al verificador
    const verificadorData = await getVerificador(url);
    
    // Si es Amazon, también obtenemos los datos detallados
    let amazonData = null;
    if (verificadorData.tienda.includes("amazon")) {
      try {
        amazonData = await getAmazon(url);
      } catch (error) {
        console.error("Error obteniendo datos de Amazon:", error);
      }
    }

    return (
      <div className="min-h-screen pt-24 pb-12">
        <ProductView 
          verificadorData={verificadorData}
          amazonData={amazonData}
        />
      </div>
    );
  } catch (error) {
    console.error("Error:", error);
    notFound();
  }
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const { url } = searchParams;
  
  if (!url) {
    return {
      title: "Producto no encontrado - Comparaelprecio",
    };
  }

  try {
    const verificadorData = await getVerificador(url);
    
    return {
      title: `${verificadorData.titulo || "Producto"} - Comparaelprecio`,
      description: `Compara precios y encuentra la mejor oferta para ${verificadorData.titulo || "este producto"}`,
    };
  } catch (error) {
    return {
      title: "Error al cargar producto - Comparaelprecio",
    };
  }
}