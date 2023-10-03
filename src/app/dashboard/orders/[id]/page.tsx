"use client"
import { HeaderPure } from "@trex/components";
import DetailOrder from "./components/DetailOrder";
import Link from "next/link";
import { ListOrders } from "@trex/stores/TempData";
import { useOrderStore } from "@trex/stores/order";
import { useEffect } from "react";

export default function OrderDetail({ params }: { params: { id: string } }) {
  const { dataOrder, setDataOrder } = useOrderStore();
  const detailOrder = ListOrders.map((list) => {
    return list.orders.filter((order) => order.idOrder === params.id);
  });

  // Menghapus array yang kosong
  const filteredDetailOrder = detailOrder.filter((orders) => orders.length > 0).flat();
  useEffect(() => {
      setDataOrder(filteredDetailOrder)
  }, [])
  
  return (
    <div>
      <HeaderPure title="Detail Order Saya" />
      <div className="p-5">
        <div className="space-y-3 py-2">
          <div className="flex justify-between text-sm">
            <h6 className="font-normal">O - 0102203-AGJKL</h6>
            <Link
              className={`${
                dataOrder[0]?.status === "Menunggu Pembayaran" ? "pointer-events-none" : ""
              }`}
              href={`${encodeURIComponent("id-invoice")}/billing-how-to`}
            >
              <h6
                className={`font-semibold ${
                  dataOrder[0]?.status === "Di Proses"
                    ? "text-secondary underline"
                    : dataOrder[0]?.status === "Menunggu Pembayaran"
                    ? "text-base-300"
                    : "text-secondary"
                }`}
              >
                Lihat Invoice
              </h6>
            </Link>
          </div>
          <div className="flex justify-between text-sm">
            <h6 className="font-normal">Tanggal Pembelian</h6>
            <h6 className="font-normal">2 Desember 2022</h6>
          </div>
          <div className="flex justify-between text-sm">
            <h6 className="font-normal">Status Transaksi</h6>
            <h6 className="font-semibold text-primary">{dataOrder[0]?.status}</h6>
          </div>
        </div>
      </div>
      <hr className="border-4" />
      <DetailOrder />
    </div>
  );
}
