"use client";
import { invoiceOrders } from "@trex/stores/TempData";
import { rupiahFormat } from "@trex/utils/helpers";
import React from "react";
import InvoiceTotalPayment from "./InvoiceTotalPayment";

export default function InvoiceProduct() {
  const totalHarga = (invoice: any) => {
    const total = invoice.orderProducts.reduce(
      (qty: number, orderProducts: { price: number }) => {
        return qty + orderProducts.price;
      },
      0
    );
    return total;
  };

  const SubTotal = (invoiceOrders: any) => {
    const subTotal = invoiceOrders.map((invoice: any) => {
        const total = totalHarga(invoice) 
    })
    return subTotal
  }

  return (
    <>
      {invoiceOrders.map((invoice, index) => (
        <div key={index} className="space-y-5">
          <div className="flex justify-between">
            <div className="flex flex-col text-xs w-2/4 leading-4 space-y-1">
              <div>
                <h6 className="font-semibold">Pesanan</h6>
                <h6 className="font-normal">#{invoice.no}</h6>
              </div>
              <div>
                <h6 className="font-semibold">Nama Penerima</h6>
                <h6 className="font-normal">{invoice.namaPenerima}</h6>
              </div>
              <div>
                <h6 className="font-semibold">Tanggal Transaksi</h6>
                <h6 className="font-normal">{invoice.tangalTransaksi}</h6>
              </div>
              <div>
                <h6 className="font-semibold">Kurir</h6>
                <h6 className="font-normal">{invoice.kurir}</h6>
              </div>
            </div>
            <div className="flex flex-col text-xs w-2/4 leading-4">
              <div>
                <h6 className="font-semibold">Alamat Pengiriman</h6>
                <h6 className="font-normal">{invoice.alamatPengiriman}</h6>
              </div>
            </div>
          </div>
          <div>
            <div className="border-y-[1px] border-primary py-2 flex justify-between text-xs font-semibold">
              <h6 className="w-2/4">NAMA PRODUK</h6>
              <h6 className="w-1/5">QTY</h6>
              <h6 className="w-2/4">HARGA SATUAN</h6>
              <h6 className="w-1/4">TOTAL</h6>
            </div>
            {invoice.orderProducts.map((product, index) => (
              <div className="flex py-2 justify-between text-xs" key={index}>
                <h6 className="w-2/4">{product.namaProduk}</h6>
                <h6 className="w-1/5">{product.qty}</h6>
                <h6 className="w-2/4">{rupiahFormat(product.price)}</h6>
                <h6 className="w-1/4">
                  {rupiahFormat(product.price * product.qty)}
                </h6>
              </div>
            ))}
          </div>

          <div className="text-xs space-y-2">
            <div className="flex justify-between font-semibold">
              <h6>TOTAL HARGA ({invoice.orderProducts.length} BARANG)</h6>
              <h6>{rupiahFormat(totalHarga(invoice))}</h6>
            </div>
            <div className="flex justify-between">
              <h6>Total Ongkos Kirim</h6>
              <h6>{rupiahFormat(invoice.biayaKirim)}</h6>
            </div>
            <div className="flex justify-between">
              <h6>Asuransi Pengiriman</h6>
              <h6>{rupiahFormat(invoice.asuransi)}</h6>
            </div>
            <div className="flex justify-between font-semibold">
              <h6>TOTAL BELANJA</h6>
              <h6>
                {rupiahFormat(
                  totalHarga(invoice) + invoice.biayaKirim + invoice.asuransi
                )}
              </h6>
            </div>
          </div>
          <hr />
        </div>
      ))}
      <InvoiceTotalPayment />
    </>
  );
}
