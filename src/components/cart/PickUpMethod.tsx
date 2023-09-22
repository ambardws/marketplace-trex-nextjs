import React from "react";

export default function PickUpMethod() {
  return (
    <div className="p-5">
      <h6 className="font-semibold text-sm">Metode Pengantaran</h6>
      <h6 className="font-medium text-sm mt-4">Ambil Ditempat</h6>
      <h6 className="font-normal text-base mt-2">Hariyanto Haqani</h6>
      <h6 className="font-light text-sm">08121312412381</h6>
      <hr className="mt-4" />
      <h6 className="font-semibold text-base mt-4">Rincian Pembayaran </h6>
      <div className="flex flex-col space-y-3 mt-4">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>Rp.199.000</p>
        </div>
        <div className="flex justify-between">
          <p>Ongkir</p>
          <p>Rp.0</p>
        </div>
        <div className="flex justify-between">
          <p>Biaya Admin</p>
          <p>Rp.0</p>
        </div>
        <hr className="mt-4" />
        <div className="flex justify-between mt-4 font-bold">
          <p>Total</p>
          <p>Rp. 1.999.000</p>
        </div>
      </div>
    </div>
  );
}
