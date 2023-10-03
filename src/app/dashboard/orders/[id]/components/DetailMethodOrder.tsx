import React from "react";
import { rupiahFormat } from "@trex/utils/helpers";
import { FiCopy } from "react-icons/fi";
import Link from "next/link";
import { useOrderStore } from "@trex/stores/order";

export default function DetailMethodOrder() {
  const { dataOrder } = useOrderStore();
  return (
    <div>
      <div className="mt-5">
        <h6 className="font-bold text-sm">Metode Pengiriman</h6>
        {dataOrder[0]?.method === "Diantar Kerumah" || dataOrder[0]?.method === "Delivery" ? (
          <div>
            <h6 className="font-semibold text-sm mt-4">Diantar Kerumah</h6>
            <h6 className="font-normal text-base mt-2">{dataOrder[0]?.name}</h6>
            <h6 className="font-light text-xs mt-1">{dataOrder[0]?.phone}</h6>
            <p className="font-light text-xs mt-1">{dataOrder[0]?.address}</p>
            <div className="flex flex-col mt-5">
              <h6 className="font-bold text-sm">Layanan Pengiriman</h6>
              <div className="flex justify-between text-sm font-semibold mt-4">
                <h6 className="my-auto">ALFATREX</h6>
              </div>
              <div className="flex justify-between text-sm font-semibold mt-4">
                <div className="flex flex-col">
                  <h6 className="my-auto">ALFATREX REG {"(3-4 Hari)"}</h6>
                  <h6 className="my-auto font-normal">{rupiahFormat(20000)}</h6>
                </div>
              </div>
              <div className="flex justify-between text-sm font-semibold mt-4 relative">
                <div className="flex flex-col">
                  <div className="flex">
                    <h6 className="my-auto">No. Resi</h6>
                    <FiCopy className="text-primary mt-1 ml-2" />
                    <Link
                      href={`${encodeURIComponent("id-tracking")}/tracking`}
                    >
                      <h6 className="text-primary text-sm absolute right-0 top-0">
                        Lacak
                      </h6>
                    </Link>
                  </div>

                  <h6 className="my-auto font-normal">S-200402-DPJ67</h6>
                </div>
              </div>
              <div className="flex justify-between text-sm font-semibold mt-4">
                <div className="flex flex-col">
                  <h6 className="my-auto">No.Shipment</h6>
                  <h6 className="my-auto font-normal">S-210528-GTLGF</h6>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h6 className="font-semibold text-sm mt-4">Ambil Ditempat</h6>
            <h6 className="font-normal text-base mt-2">{dataOrder[0]?.name}</h6>
            <h6 className="font-light text-xs mt-1">{dataOrder[0]?.phone}</h6>
          </div>
        )}
      </div>
    </div>
  );
}
