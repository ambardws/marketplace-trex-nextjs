import { HeaderPure } from "@trex/components";
import { rupiahFormat } from "@trex/utils/helpers";
import React from "react";
import PaymentInfo from "./components/PaymentInfo";
import PaymentGuide from "./components/PaymentGuide";
import Link from "next/link";

export default function CheckoutBillingHowTo() {
  return (
    <div>
      <HeaderPure title="Informasi Pembayaran" />
      <div className="p-5 text-sm">
        <div className="flex justify-between">
          <h6 className="font-semibold">Total Pembayaran</h6>
          <h6 className="font-bold">{rupiahFormat(3299000)}</h6>
        </div>
        <PaymentInfo />
      </div>
      <PaymentGuide />
      <Link href={"/dashboard/home"}>
        <div className="p-5">
          <button className="btn w-full rounded-lg mt-10 bg-white text-primary border-1 border-primary normal-case hover:border-1 hover:border-primary">
            Belanja Lagi
          </button>
        </div>
      </Link>
    </div>
  );
}
