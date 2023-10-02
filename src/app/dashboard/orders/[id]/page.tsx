import { HeaderPure } from "@trex/components";
import DetailOrder from "./components/DetailOrder";
import Link from "next/link";

export default function OrderDetail() {
  return (
    <div>
      <HeaderPure title="Detail Order Saya" />
      <div className="p-5">
        <div className="space-y-3 py-2">
          <div className="flex justify-between text-sm">
            <h6 className="font-normal">O - 0102203-AGJKL</h6>
            <Link href={`${encodeURIComponent('id-invoice')}/billing-how-to`}>
              <h6 className="font-semibold text-secondary underline">
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
            <h6 className="font-semibold text-primary">Dikirim</h6>
          </div>
        </div>
      </div>
      <hr className="border-4" />
      <DetailOrder />
    </div>
  );
}
