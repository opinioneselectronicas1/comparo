"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface PriceChartProps {
  data: Array<{
    fecha: string;
    precio: number;
  }>;
}

export function PriceChart({ data }: PriceChartProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-ES", { 
      month: "short", 
      day: "numeric" 
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
    }).format(price);
  };

  const chartData = data.map(item => ({
    ...item,
    fechaFormatted: formatDate(item.fecha)
  }));

  return (
    <div className="h-48 sm:h-64 lg:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="fechaFormatted" 
            tick={{ fontSize: 8 }}
            className="text-xs"
            interval="preserveStartEnd"
          />
          <YAxis 
            tick={{ fontSize: 8 }}
            className="text-xs"
            tickFormatter={formatPrice}
            width={60}
          />
          <Tooltip 
            formatter={(value: number) => [formatPrice(value), "Precio"]}
            labelFormatter={(label) => `Fecha: ${label}`}
            contentStyle={{ fontSize: '10px' }}
          />
          <Line 
            type="monotone" 
            dataKey="precio" 
            stroke="#2563eb" 
            strokeWidth={1.5}
            dot={{ fill: "#2563eb", strokeWidth: 1, r: 2 }}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}