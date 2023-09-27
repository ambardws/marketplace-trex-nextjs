import assets from "@trex/assets";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { rupiahFormat } from "@trex/utils/helpers";

export default function DetailPayment({ dataCheckout }: { dataCheckout: any }) {
  const subtotal = dataCheckout.orders.reduce(
    (total: number, order: { price: number }) => {
      return total + order.price;
    },
    0
  );
  return (
    <div>
      <hr className="border-4" />
      <div className="p-5">
        <h6 className="text-sm font-bold">Metode Pembayaran</h6>
        <Link href={"/dashboard/checkout/checkout-choose-billing-method"}>
          <div className="flex space-x-5 items-center relative border rounded-md mt-2 h-[56px]">
            <Image
              src={assets.TrexPayments.BCA}
              alt="payments"
              className="h-[15px] w-[45px] ml-5"
              quality={90}
            />
            <h6 className="text-sm font-normal">Transfer Bank BCA</h6>
            <FiChevronRight className="absolute h-5 w-5 right-2" />
          </div>
        </Link>
      </div>

      <hr className="border-4" />
      <div className="p-5">
        <h6 className="text-sm font-bold">Rincian Pembayaran</h6>
        <div className="flex flex-col mt-3 space-y-2 text-sm font-normal">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="font-medium">{rupiahFormat(subtotal)}</p>
          </div>
          <div className="flex justify-between">
            <p>Diskon</p>
            <p className="font-medium">{rupiahFormat(subtotal)}</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Kirim</p>
            <p className="font-medium">{rupiahFormat(subtotal)}</p>
          </div>
          <div className="flex justify-between">
            <p>Diskon Biaya Kirim</p>
            <p className="font-medium">{rupiahFormat(subtotal)}</p>
          </div>
          <div className="flex justify-between">
            <p>Asuransi Pengiriman</p>
            <p className="font-medium">{rupiahFormat(subtotal)}</p>
          </div>
          <div className="flex justify-between">
            <p>Biaya Layanan</p>
            <p className="font-medium">{rupiahFormat(subtotal)}</p>
          </div>
          <hr className="border-1" />
          <div className="flex justify-between">
            <p>Total</p>
            <p className="font-medium">{rupiahFormat(subtotal)}</p>
          </div>
          <div className="flex justify-between font-semibold">
            <p>Total yang dibayar</p>
            <p>{rupiahFormat(subtotal)}</p>
          </div>
        </div>
        <Link className="flex justify-center items-center" href={"/dashboard/checkout/checkout-choose-billing-method"}>
          <button className="btn w-11/12 rounded-md mt-10 bg-primary text-white">
            Bayar
          </button>
        </Link>
      </div>
    </div>
  );
}
