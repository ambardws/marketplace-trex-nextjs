import assets from "@trex/assets";
import Image from "next/image";
import React from "react";
import { FiCopy } from "react-icons/fi";

export default function PaymentInfo() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex space-x-3 mt-14">
        <Image src={assets.TrexPayments.BCA} alt="bank-payment" height={19} width={52} />
        <h6 className="text-base font-semibold">Bank BCA</h6>
      </div>
      <div className="leading-3">
        <h6 className="text-sm font-normal">Nomor Virtual Account</h6>
        <div className="flex justify-between text-primary font-semibold">
          <h6 className="text-lg">1110001003583452</h6>
          <h6 className="text-sm cursor-pointer">Salin <FiCopy className="inline-block h-5 w-5 ml-0.5" /></h6>
        </div>
      </div>
      <div>
        <h6 className="text-sm font-normal">Batas Waktu Pembayaran</h6>
        <h6 className="text-lg font-semibold">23:59:59</h6>
      </div>
    </div>
  );
}
