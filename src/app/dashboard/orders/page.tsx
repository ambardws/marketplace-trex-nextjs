"use client";
import { HeaderPure } from "@trex/components";
import { useState } from "react";
import OrderLists from "./components/OrderLists";

const rangeOrders = [
  "Semua Order Masuk",
  "30 Hari Terakhir",
  "90 Hari Terakhir",
];

export default function Orders() {
  const [activeRange, setActiveRange] = useState(rangeOrders[0]);
  return (
    <div>
      <HeaderPure title="Order Saya" />
      <div className="flex flex-row text-sm overflow-x-scroll mt-3 whitespace-nowrap gap-3 py-3 px-5">
        {rangeOrders.map((range, index) => (
          <div
            key={index}
            className={`h-max w-max py-2 px-5 rounded-full cursor-pointer flex items-center gap-1 ${
              activeRange === range
                ? "text-primary bg-red-100 border border-primary font-semibold"
                : "bg-base-100 border"
            }`}
            onClick={() => setActiveRange(range)}
          >
            {range}
          </div>
        ))}
      </div>
      <div className="p-5">
          <OrderLists />
      </div>
    </div>
  );
}
