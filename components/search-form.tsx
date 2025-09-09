"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface SearchFormProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export function SearchForm({
  placeholder = "Pega aquí la URL del producto (Amazon, Carrefour, MediaMarkt...)",
  buttonText = "Comparar Precios",
  className = "",
}: SearchFormProps) {
  const [url, setUrl] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const normalizeUrl = (raw: string) => {
    let v = raw.trim();
    if (!v) return "";
    if (!/^https?:\/\//i.test(v)) v = "https://" + v;
    try {
      const u = new URL(v);
      return u.toString();
    } catch {
      return raw.trim();
    }
  };

  const handleSearch = () => {
    if (url.trim()) {
      setIsSearching(true);
      const normalized = normalizeUrl(url);
      router.push(`/producto/buscar?url=${encodeURIComponent(normalized)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      {/* Desktop / tablet: pill */}
      <div className="hidden sm:flex items-center gap-3 bg-white/85 dark:bg-neutral-900/70 backdrop-blur border border-gray-200 dark:border-white/10 shadow-lg rounded-full px-4 py-2">
        <Search className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
        <Input
          type="url"
          placeholder={placeholder}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isSearching}
          className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-base md:text-lg"
        />
        <Button
          onClick={handleSearch}
          disabled={!url.trim() || isSearching}
          size="lg"
          className="rounded-full px-6 md:px-8"
        >
          {isSearching ? (
            "Buscando..."
          ) : (
            <>
              <Search className="h-5 w-5 mr-2" /> {buttonText}
            </>
          )}
        </Button>
      </div>

      {/* Móvil: input + botón apilados */}
      <div className="sm:hidden space-y-3">
        <div className="flex items-center gap-3 bg-white/90 dark:bg-neutral-900/70 backdrop-blur border border-gray-200 dark:border-white/10 shadow-lg rounded-2xl px-4 py-3">
          <Search className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
          <Input
            type="url"
            placeholder="Pega la URL del producto"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isSearching}
            className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-base"
          />
        </div>
        <Button
          onClick={handleSearch}
          disabled={!url.trim() || isSearching}
          size="lg"
          className="w-full rounded-xl h-11 text-base"
        >
          {isSearching ? "Buscando..." : buttonText}
        </Button>
      </div>

      {/* Hint */}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Ejemplo: https://www.amazon.es/dp/B0D6W88TCN/
      </p>
    </div>
  );
}
