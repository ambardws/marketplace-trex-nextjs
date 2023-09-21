import assets from "@trex/assets";
import { HeaderPure } from "@trex/components";
import { rupiahFormat } from "@trex/utils/helpers";
import Image from "next/image";
import React from "react";

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

export default function CheckoutConfirmation() {
  return (
    <div>
      <HeaderPure />
    </div>
  );
}
