import React from "react";
import { rupiahFormat } from "@trex/utils/helpers";

export default function InvoiceTotalPayment() {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between text-sm font-normal">
        <h6>Subtotal</h6>
        <h6>{rupiahFormat(80400)}</h6>
      </div>
      <div className="flex justify-between text-sm font-normal">
        <h6>Diskon</h6>
        <h6>{rupiahFormat(0)}</h6>
      </div>
      <div className="flex justify-between text-sm font-normal">
        <h6>Biaya Kirim</h6>
        <h6>{rupiahFormat(1800)}</h6>
      </div>
      <div className="flex justify-between text-sm font-normal">
        <h6>Diskon Biaya Kirim</h6>
        <h6>{rupiahFormat(0)}</h6>
      </div>
      <div className="flex justify-between text-sm font-normal pb-3">
        <h6>Biaya Layanan</h6>
        <h6>{rupiahFormat(500)}</h6>
      </div>
      <hr />

      <div className="flex justify-between text-sm font-normal">
        <h6>Total</h6>
        <h6>{rupiahFormat(98900)}</h6>
      </div>

      <div className="flex justify-between text-sm font-normal">
        <h6>Margin (Pototangan Langsung)</h6>
        <h6>- {rupiahFormat(12400)}</h6>
      </div>

      <div className="flex justify-between text-sm font-semibold">
        <h6>Total yang dibayar</h6>
        <h6>{rupiahFormat(86500)}</h6>
      </div>
    </div>
  );
}
