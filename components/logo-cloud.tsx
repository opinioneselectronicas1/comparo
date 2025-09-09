import { HTMLAttributes } from "react";
import Link from "next/link";

function LogoCloud(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <p className="text-center text-muted-foreground">Comparamos precios en las mejores tiendas</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
        <Link href="/tienda/amazon" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-orange-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-orange-500 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-sm font-medium group-hover:text-orange-600">Amazon</span>
          </div>
        </Link>
        
        <Link href="/tienda/carrefour" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-blue-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-sm font-medium group-hover:text-blue-600">Carrefour</span>
          </div>
        </Link>
        
        <Link href="/tienda/mediamarkt" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-red-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-red-600 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-sm font-medium group-hover:text-red-600">MediaMarkt</span>
          </div>
        </Link>
        
        <Link href="/tienda/el-corte-ingles" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-green-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-green-700 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-sm font-medium group-hover:text-green-700">El Corte Inglés</span>
          </div>
        </Link>
        
        <Link href="/tienda/fnac" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-orange-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-orange-600 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-sm font-medium group-hover:text-orange-600">Fnac</span>
          </div>
        </Link>
        
        <Link href="/tienda/aliexpress" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-orange-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-orange-500 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-sm font-medium group-hover:text-orange-600">AliExpress</span>
          </div>
        </Link>
        
        <Link href="/tienda/pccomponentes" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-blue-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-sm font-medium group-hover:text-blue-600">PcComponentes</span>
          </div>
        </Link>
        
        <Link href="/tienda/xiaomi" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-orange-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-orange-600 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-sm font-medium group-hover:text-orange-600">Xiaomi</span>
          </div>
        </Link>
        
        <Link href="/tienda/myprotein" className="flex items-center justify-center p-4 bg-white border rounded-lg hover:shadow-md transition-all hover:border-blue-500 group">
          <div className="text-center">
            <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-sm font-medium group-hover:text-blue-600">Myprotein</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LogoCloud;