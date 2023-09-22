import React from "react";
import { AutoComplete, Input, InputPhoneNumber, TextArea } from "../input";
import { FiMapPin } from "react-icons/fi";
import Link from "next/link";

const dataAuto = [
  "Jakarta",
  "Bekasi",
  "Bogor",
  "Tangerang",
  "Cisauk",
  "Cibogo",
  "Sampora",
  "Pamulang",
  "BSD",
];

export default function Address() {
  return (
    <div className="form-control w-full mb-5">
      <div className="flex p-4 space-x-2 rounded-md bg-info mt-2 cursor-pointer">
        <FiMapPin className="text-secondary h-5 w-5 font-bold mt-1" />
        <div className="flex flex-col">
          <h6 className="font-semibold">
            Pinpoint location address <span className="text-primary">*</span>
          </h6>
          <h6>Pinpoint not set yet</h6>
        </div>
      </div>
      <Input type="text" label="Nama Anda" />
      <InputPhoneNumber label="Nomor Telepon" />
      <TextArea label="Alamat Lengkap" />
      <AutoComplete label="Provinsi" data={dataAuto} />
      <AutoComplete label="Kabupaten/Kota" data={dataAuto} />
      <AutoComplete label="Kelurahan" data={dataAuto} />
      <AutoComplete label="Kecamatan" data={dataAuto} />
      <div className="flex justify-between">
        <div className="w-[48%]">
          <Input type="number" label="RT" />
        </div>
        <div className="w-[48%]">
          <Input type="number" label="RW" />
        </div>
      </div>
      <Link href={"/dashboard/checkout/checkout-choose-billing-method"}>
        <button className="btn w-full rounded-md mt-10 bg-primary text-white">
          Lanjutkan
        </button>
      </Link>
    </div>
  );
}
