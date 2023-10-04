import { HeaderPure } from "@trex/components";
import React from "react";
import InvoiceInformation from "./components/InvoiceInformation";
import InvoiceProduct from "./components/InvoiceProduct";

export default function page() {
  return (
    <div>
      <HeaderPure title="Invoice" />
      <div className="p-5 flex flex-col space-y-5">
      
        <InvoiceInformation />
        <InvoiceProduct />
      </div>
    </div>
  );
}
