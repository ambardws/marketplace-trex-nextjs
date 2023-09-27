import React from "react";
import { Button, CustomDrawer } from "@trex/components";

const couriers = [
  {
    name: "ALFATREX",
    estimation: "3-4 Hari",
  },
  {
    name: "TIKI",
    estimation: "1-2 Hari",
  },
  {
    name: "JNE",
    estimation: "1-2 Hari",
  }
];

export default function ChangeCourier({
  open,
  onClose,
}: {
  open: boolean;
  onClose: any;
}) {
  return (
    <CustomDrawer open={open} onClose={onClose}>
      <div className="h-auto p-5">
        <h6 className="text-base font-bold my-4">Pilih Kurir</h6>
        <hr className="border-1 mt-5" />
        <div className="flex flex-col space-y-4 mt-4 font-semibold pb-10 text-base">
          {couriers.map((courier, index) => (
            <div key={index} className="flex space-x-5 relative">
              <h6>{courier.name}</h6>
              <input type="radio" name="radio-2" className="radio checked:bg-primary absolute right-0" />
            </div>
          ))}
        </div>
        <Button onClick={onClose} label="Terapkan" />
      </div>
    </CustomDrawer>
  );
}
