import { getVerificador, getAmazon } from "@/lib/api";
import { ProductView } from "@/components/product-view";
import { notFound, redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";

interface SearchPageProps {
  searchParams: {
    url?: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams;
  const { url } = resolvedSearchParams;
  
  if (!url) {
    redirect('/');
  }

  // Limpiar URL de Amazon si es necesario
  const cleanUrl = cleanAmazonUrl(url);

  try {
    // Siempre llamamos primero al verificador
    const verificadorData = await getVerificador(cleanUrl);
    
    // Si es Amazon, también obtenemos los datos detallados
    let amazonData = null;
    if (verificadorData.tienda.toLowerCase().includes("amazon")) {
      try {
        amazonData = await getAmazon(cleanUrl);
      } catch (error) {
        console.error("Error obteniendo datos de Amazon:", error);
      }
    }

    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 pb-12">
          <ProductView 
            verificadorData={verificadorData}
            amazonData={amazonData}
          />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error:", error);
    return (
      <>
        <Navbar />
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Error al procesar el producto</h1>
            <p className="text-gray-600 mb-6">
              No pudimos obtener información del producto. Verifica que la URL sea correcta y de una tienda compatible.
            </p>
            <a 
              href="/" 
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </>
    );
  }
}

function cleanAmazonUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    
    // Si es Amazon, extraer solo el DP
    if (urlObj.hostname.includes('amazon')) {
      const pathMatch = urlObj.pathname.match(/\/dp\/([A-Z0-9]{10})/);
      if (pathMatch) {
        return `${urlObj.protocol}//${urlObj.hostname}/dp/${pathMatch[1]}/`;
      }
    }
    
    return url;
  } catch (error) {
    return url;
  }
}

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams;
  const { url } = resolvedSearchParams;
  
  if (!url) {
    return {
      title: "Búsqueda - Comparaelprecio",
    };
  }

  try {
    const cleanUrl = cleanAmazonUrl(url);
    const verificadorData = await getVerificador(cleanUrl);
    
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