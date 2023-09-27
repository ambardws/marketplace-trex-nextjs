"use client"
import { rupiahFormat } from "@trex/utils/helpers";
import React from "react";

export default function PickUpMethod({dataCheckout} : {dataCheckout: any}) {
const totalPrice = dataCheckout.orders.reduce((total: number, order: {price: number}) => {
  console.log(order)
  return total + order.price;
}, 0);
  return (
    <div className="p-5">
      <h6 className="font-semibold text-sm">Metode Pengantaran</h6>
      <h6 className="font-medium text-sm mt-4">Ambil Ditempat</h6>
      <h6 className="font-normal text-base mt-2">{dataCheckout.name}</h6>
      <h6 className="font-light text-sm">{dataCheckout.phone}</h6>
      <hr className="mt-4" />
      <h6 className="font-semibold text-base mt-4">Rincian Pembayaran </h6>
      <div className="flex flex-col space-y-3 mt-4">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{rupiahFormat(totalPrice)}</p>
        </div>
        <div className="flex justify-between">
          <p>Ongkir</p>
          <p>Rp.0</p>
        </div>
        <div className="flex justify-between">
          <p>Biaya Admin</p>
          <p>Rp.0</p>
        </div>
        <hr className="mt-4" />
        <div className="flex justify-between mt-4 font-bold">
          <p>Total</p>
          <p>{rupiahFormat(totalPrice)}</p>
        </div>
      </div>
    </div>
  );
}
