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
  className = ""
}: SearchFormProps) {
  const [url, setUrl] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (url.trim()) {
      setIsSearching(true);
      const encodedUrl = encodeURIComponent(url.trim());
      router.push(`/producto/buscar?url=${encodedUrl}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3 p-2 bg-background border rounded-full shadow-lg">
        <Input
          type="url"
          placeholder={placeholder}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isSearching}
          className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-base"
        />
        <Button
          onClick={handleSearch}
          disabled={!url.trim() || isSearching}
          size="lg"
          className="rounded-full px-8"
        >
          <Search className="!h-5 !w-5 mr-2" />
          {isSearching ? "Buscando..." : buttonText}
        </Button>
      </div>
    </div>
  );
}