"use client";
import assets from "@trex/assets";
import { HeaderPure, Input, InputPhoneNumber } from "@trex/components";
import Address from "@trex/components/address/Address";
import { AutoComplete, TextArea } from "@trex/components/input";
import { rupiahFormat } from "@trex/utils/helpers";
import { Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const datas = [
  {
    id: 1,
    title: "Samsung Galaxy S20 FE RAM 8gb Internal 250gb",
    image: assets.TrexImages.Samsung,
    price: 2500000,
    margin: 20000,
    available: 85,
    variaty: "6 / 12",
    merk: "Samsung",
    category: "Handphone",
    kode: 8771231,
    dimension: "57 x 49 x 10",
    weight: "0. 75kg",
    fromCity: "Tangerang",
    description: `Ukuran layar : 6.6 inches, 104.9 cm2 (~82.5% screen-to-body ratio) 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)
    Chipset Qualcomm SM6225 Snapdragon 680 4G (6 nm) dengan CPU Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)
    <br /> <br />
    Ukuran layar : 6.6 inches, 104.9 cm2 (~82.5% screen-to-body ratio) 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)
    Chipset Qualcomm SM6225 Snapdragon 680 4G (6 nm) dengan CPU Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)`,
    discount: 5,
    count: 1,
  },
  {
    id: 2,
    title: "Samsung Galaxy S21 FE RAM 8gb Internal 250gb",
    image: assets.TrexImages.Samsung,
    price: 2500000,
    margin: 20000,
    available: 85,
    variaty: "6 / 12",
    merk: "Samsung",
    category: "Handphone",
    kode: 8771231,
    dimension: "57 x 49 x 10",
    weight: "0. 75kg",
    fromCity: "Tangerang",
    description: `Ukuran layar : 6.6 inches, 104.9 cm2 (~82.5% screen-to-body ratio) 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)
    Chipset Qualcomm SM6225 Snapdragon 680 4G (6 nm) dengan CPU Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)
    <br /> <br />
    Ukuran layar : 6.6 inches, 104.9 cm2 (~82.5% screen-to-body ratio) 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)
    Chipset Qualcomm SM6225 Snapdragon 680 4G (6 nm) dengan CPU Octa-core (4x2.4 GHz Kryo 265 Gold & 4x1.9 GHz Kryo 265 Silver)`,
    discount: 5,
    count: 1,
  },
];


export default function CheckoutDataForm() {
  const [deliveryMethod, setDeliveryMethod] = useState(0);
  return (
    <div>
      <HeaderPure />
      <div className="p-5 text-sm">
        <h6 className="font-semibold">Checkout Produk</h6>
        {datas.map((data, index) => (
          <div key={index} className="flex border rounded-lg mt-3">
            <Image
              src={data.image}
              alt="checkout-image"
              className="h-24 w-28 object-cover"
            />
            <div className="border-l-[1px] p-2 space-y-2">
              <h6 className="font-semibold">{data.title}</h6>
              <h6 className="text-xs">Tipe: {data.variaty}</h6>
              <div className="flex justify-between">
                <h6 className="text-base-300">{data.count} Barang</h6>
                <h6 className="font-bold">{rupiahFormat(data.price)}</h6>
              </div>
            </div>
          </div>
        ))}

        <h6 className="font-semibold mt-5">Metode Pengantaran</h6>
        <label className="label cursor-pointer pl-0 mt-3">
          <span className="font-medium">Ambil Ditempat</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-primary"
            onClick={() => setDeliveryMethod(1)}
          />
        </label>
        {deliveryMethod === 1 && (
          <div className="form-control w-full mb-5">
            <Input type="text" label="Nama Anda" />
            <InputPhoneNumber label="Nomor Telepon" />
          </div>
        )}

        <label className="label cursor-pointer pl-0">
          <span className="font-medium text-sm">Diantar Kerumah</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-primary"
            onClick={() => setDeliveryMethod(2)}
          />
        </label>

        {deliveryMethod === 2 && (
          <Address />
        )}
      </div>
    </div>
  );
}
