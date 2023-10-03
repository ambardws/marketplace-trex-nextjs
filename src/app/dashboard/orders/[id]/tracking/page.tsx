import React from "react";
import { HeaderPure } from "@trex/components";
import { trackingOrders } from "@trex/stores/TempData";

export default function page() {
  return (
    <div>
      <HeaderPure title="Lacak Pesanan" />
      <div className="p-5 space-y-7">
        {trackingOrders.map((tracking, index) => (
          <div key={index}>
            <div className="flex space-x-5">
              <div className="flex flex-col relative">
                <div className="w-5 h-5 rounded-full bg-primary"></div>
                {trackingOrders.length !== index+1 && (
                  <div className="w-0.5 h-full bg-primary absolute top-6 left-[9px]"></div>
                )}
              </div>
              <div className="flex-col">
                <h6 className="text-base font-semibold">{tracking.status}</h6>
                <h6 className="text-sm font-normal">{tracking.date}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
