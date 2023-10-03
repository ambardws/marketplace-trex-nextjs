"use client";
import React from "react";
import { rupiahFormat } from "@trex/utils/helpers";
import { DetailMyOrder } from "@trex/stores/TempData";
import Image from "next/image";
import assets from "@trex/assets";
import { useOrderStore } from "@trex/stores/order";

export default function DetailPriceOrder() {
  const { dataOrder } = useOrderStore();
  const subtotal = DetailMyOrder.orders.reduce(
    (total: number, order: { price: number }) => {
      return total + order.price;
    },
    0
  );
  return (
    <div>
      <h6 className="font-bold text-sm">Rincian Pembayaran </h6>
      <div className="flex flex-col text-sm space-y-3 mt-4 ">
        <div className="flex justify-between">
          <h6>Metode Pembayaran</h6>
          <h6 className="font-medium">Virtual Account Bank Mandiri</h6>
        </div>
        <div className="flex justify-between">
          <h6>Subtotal ({DetailMyOrder.orders.length} Barang)</h6>
          <h6 className="font-medium">{rupiahFormat(subtotal)}</h6>
        </div>
        <div className="flex justify-between">
          <h6>Biaya Kirim</h6>
          <h6 className="font-medium">{rupiahFormat(20000)}</h6>
        </div>
        <div className="flex justify-between">
          <h6>Biaya Admin</h6>
          <h6 className="font-medium">{rupiahFormat(0)}</h6>
        </div>
        <hr className="mt-4" />
        <div className="flex justify-between mt-4">
          <h6 className="font-semibold">Total</h6>
          <h6 className="font-medium">{rupiahFormat(subtotal + 20000)}</h6>
        </div>
      </div>
      <div className="mt-10">
        {dataOrder[0]?.status === "Menunggu Pembayaran" ? (
          <div>
            <button className="btn w-full rounded-lg bg-white text-primary border border-primary normal-case">
              Lihat Cara Bayar
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <button className="btn w-full rounded-lg bg-primary text-white normal-case">
              Konfirmasi Pesanan
            </button>
            <button className="btn w-full rounded-lg bg-white text-primary border border-primary normal-case">
              <Image src={assets.TrexIcons.ShareGradient} alt="share-gradien" />{" "}
              Bagikan Struk Belanja
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
