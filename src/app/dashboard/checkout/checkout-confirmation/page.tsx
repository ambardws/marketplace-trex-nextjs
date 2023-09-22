import assets from "@trex/assets";
import { HeaderPure } from "@trex/components";
import { rupiahFormat } from "@trex/utils/helpers";
import Image from "next/image";
import React from "react";
import { datasCheckout } from "@trex/stores/TempData";
import PickUpMethod from "@trex/components/cart/PickUpMethod";
import DeliveryMethod from "@trex/components/cart/DeliveryMethod";

export default function CheckoutConfirmation() {
  return (
    <div>
      <HeaderPure />
      <div className="p-5 text-sm">
        <h6 className="font-semibold">Checkout Produk</h6>
        {datasCheckout.orders.map((data, index) => (
          <div key={index} className="flex border rounded-lg mt-3">
            <Image
              src={data.image}
              alt="checkout-image"
              className="h-24 w-28 object-cover"
            />
            <div className="border-l-[1px] p-2 space-y-2">
              <h6 className="font-semibold">{data.title}</h6>
              <h6 className="text-xs">Tipe: {data.variaty}</h6>
              <div className="flex justify-between">
                <h6 className="text-base-300">{data.count} Barang</h6>
                <h6 className="font-bold">{rupiahFormat(data.price)}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-4 mt-4" />
      {
        datasCheckout.method === 1 ? (
          <PickUpMethod />
        ) : (
          <DeliveryMethod />
        )
      }
     
    </div>
  );
}
