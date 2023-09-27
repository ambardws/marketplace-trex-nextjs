"use client";
import ChangeCourier from "./Drawers/ChangeCourier";
import ChangeService from "./Drawers/ChangeService";
import { rupiahFormat } from "@trex/utils/helpers";
import React, { useState } from "react";

export default function DeliveryMethod({
  dataCheckout,
}: {
  dataCheckout: any;
}) {
  const [openCourierDrawer, setOpenCourierDrawer] = useState(false);
  const [openServiceDrawer, setOpenServiceDrawer] = useState(false);
  const totalPrice = dataCheckout.orders.reduce(
    (total: number, order: { price: number }) => {
      return total + order.price;
    },
    0
  );


  return (
    <div className="p-5">
      <h6 className="font-semibold text-sm">Metode Pengantaran</h6>
      <h6 className="font-medium text-sm mt-4">Diantar Kerumah</h6>
      <h6 className="font-normal text-base mt-2">{dataCheckout.name}</h6>
      <h6 className="font-light text-sm mt-1">{dataCheckout.phone}</h6>
      <h6 className="font-light text-sm mt-1">{dataCheckout.address}</h6>
      <hr className="mt-4" />
      <div className="flex flex-col mt-4">
        <h6 className="font-semibold text-sm">Pilih Layanan Pengiriman</h6>
        <div className="flex justify-between text-sm font-semibold mt-4">
          <h6 className="my-auto">ALFATREX</h6>
          <button className="btn-xs border border-primary text-primary bg-red-100 rounded-xl" onClick={() => setOpenCourierDrawer(true)}>
            Ubah Kurir
          </button>
        </div>
        <div className="flex justify-between text-sm font-semibold mt-4">
          <div className="flex flex-col">
            <h6 className="my-auto">ALFATREX REG {"(3-4 Hari)"}</h6>
            <h6 className="my-auto font-normal">{rupiahFormat(20000)}</h6>
          </div>

          <button className="btn-xs border border-primary text-primary bg-red-100 rounded-xl"  onClick={() => setOpenServiceDrawer(true)}>
            Ubah Layanan
          </button>
        </div>
        <div className="flex justify-between"></div>
      </div>
      <hr className="mt-4" />
      <h6 className="font-semibold text-base mt-4">Rincian Pembayaran </h6>
      <div className="flex flex-col space-y-3 mt-4">
        <div className="flex justify-between">
          <h6>Subtotal</h6>
          <h6>{rupiahFormat(totalPrice)}</h6>
        </div>
        <div className="flex justify-between">
          <h6>Ongkir</h6>
          <h6>Rp.0</h6>
        </div>
        <div className="flex justify-between">
          <h6>Biaya Admin</h6>
          <h6>Rp.0</h6>
        </div>
        <hr className="mt-4" />
        <div className="flex justify-between mt-4 font-bold">
          <h6>Total</h6>
          <h6>{rupiahFormat(totalPrice)}</h6>
        </div>
      </div>
    <ChangeCourier open={openCourierDrawer} onClose={()=> (setOpenCourierDrawer(!openCourierDrawer))} />
    <ChangeService open={openServiceDrawer} onClose={()=> (setOpenServiceDrawer(!openServiceDrawer))} />
    </div>
  );
}
