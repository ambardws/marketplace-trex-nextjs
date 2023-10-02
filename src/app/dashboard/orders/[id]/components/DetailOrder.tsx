import React from "react";
import Image from "next/image";
import { DetailMyOrder } from "@trex/stores/TempData";
import DetailMethodOrder from "./DetailMethodOrder";
import DetailPriceOrder from "./DetailPriceOrder";
import { rupiahFormat } from "@trex/utils/helpers";

export default function DetailOrder() {
  return (
    <div>
      <div className="p-5">
        {DetailMyOrder.orders.map((order, index) => (
          <div key={index} className="flex space-x-3">
            <div className="h-max p-1 mt-3">
              <Image
                src={order.image}
                alt="checkout-image"
                className="h-[32px] w-[40px] object-cover"
              />
            </div>
            <div className="p-2 space-y-2">
              <h6 className="font-semibold text-sm line-clamp-2">
                {order.title}
              </h6>
              <h6 className="text-[10px] font-medium">
                Tipe: {order.variaty} GB
              </h6>
              <h6 className="text-base-300 text-xs">{order.count} Barang</h6>
              <h6 className="text-sm">{rupiahFormat(order.price)}</h6>
            </div>
          </div>
        ))}

        <DetailMethodOrder />
      </div>
      <hr className="border-4 p-0" />
      <div className="p-5">
        <DetailPriceOrder />
      </div>
    </div>
  );
}
