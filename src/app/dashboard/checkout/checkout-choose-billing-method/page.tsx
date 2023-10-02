import assets from "@trex/assets";
import { HeaderPure } from "@trex/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";

const dataBank = [
  {
    title: "BANK BCA",
    logo: assets.TrexPayments.BCA,
  },
  {
    title: "BANK BNI",
    logo: assets.TrexPayments.BNI,
  },
  {
    title: "Mandiri",
    logo: assets.TrexPayments.Mandiri,
  },
  {
    title: "Bank Syariah Indonesia",
    logo: assets.TrexPayments.BSI,
  },
  {
    title: "Bank BRI",
    logo: assets.TrexPayments.BRI,
  },
];
const dataRetail = [
  {
    title: "Alfamart",
    logo: assets.TrexPayments.Alfamart,
  },
  {
    title: "Indomaret",
    logo: assets.TrexPayments.Indomaret,
  },
];

export default function CheckOutBillingMethod() {
  return (
    <div>
      <HeaderPure title="Pilih Metode Bayar" />
      <div className="p-5 text-sm">
        <div className="flex flex-col space-y-3">
          <h6 className="text-base font-medium">Subtotal Pembayaran</h6>
          <h2 className="font-bold text-3xl">Rp 2.320.000</h2>
          <h6 className="text-secondary font-medium">Biaya Admin +Rp 1.500</h6>
        </div>
        <hr className="mt-5 border-base-300" />
        <h6 className="text-base font-semibold mt-5">Bank Transfer</h6>
        <div className="flex flex-col space-y-10 mt-6">
          {dataBank.map((bank, index) => (
            <Link href={"/dashboard/checkout/checkout-confirmation"}>
              <div className="flex space-x-4 relative" key={index}>
                <Image
                  src={bank.logo}
                  alt={bank.title}
                  className="h-[15px] w-[45px] mt-1"
                  quality={90}
                />
                <h6 className="text-base font-medium">{bank.title}</h6>
                <FiChevronRight className="absolute h-5 w-5 right-0 top-0" />
              </div>
            </Link>
          ))}
        </div>
        <h6 className="text-base font-semibold mt-10">Gerai Retail</h6>
        <div className="flex flex-col space-y-10 mt-6">
          {dataRetail.map((retail, index) => (
            <Link href={"/dashboard/checkout/checkout-confirmation"}>
              <div className="flex space-x-4 relative" key={index}>
                <Image
                  src={retail.logo}
                  alt={retail.title}
                  className="h-[15px] w-[45px] mt-1"
                  quality={90}
                />
                <h6 className="text-base font-medium">{retail.title}</h6>
                <FiChevronRight className="absolute h-5 w-5 right-0 top-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
