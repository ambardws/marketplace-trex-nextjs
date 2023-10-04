import { rupiahFormat } from "@trex/utils/helpers";
import React from "react";

export default function InvoiceInformation() {
  return (
    <>
      <div className="leading-4">
        <h6 className="text-xs font-semibold">INVOICE</h6>
        <h6 className="text-[10px] font-bold">IND/2023/O-0102203-AGJKL</h6>
      </div>
      <div className="text-xs leading-4">
        <h6 className="font-semibold">Diterbitkan Atas</h6>
        <h6 className="font-normal">Nurin Budiman</h6>
      </div>
    </>
  );
}
