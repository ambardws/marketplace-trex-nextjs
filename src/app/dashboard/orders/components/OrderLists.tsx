import React from "react";
import Image from "next/image";
import { rupiahFormat } from "@trex/utils/helpers";
import { ListOrders, classStatus } from "@trex/stores/TempData";
import Link from "next/link";

// export const classStatus = {
//   deliver: `bg-info text-secondary`,
//   waitingPayment: `bg-base-200 text-slate-400`,
//   process: `bg-orange-100 text-orange-500`,
//   finished: `bg-green-100 text-success`,
// };

export default function OrderLists() {
  return (
    <>
      <div className="flex flex-col space-y-5">
        {ListOrders &&
          ListOrders.map((listOrder, index) => (
            <div
              key={index}
              className="border rounded-[10px] h-max px-2 pb-2 space-y-2"
            >
              <div className="flex justify-between text-xs py-3">
                <h6 className="font-semibold">{listOrder.kodeTransaksi}</h6>
                <h6 className="font-normal">{listOrder.date}</h6>
              </div>
              {listOrder.orders.map((order, index) => (
                <div key={index} className="border rounded-[10px] px-3 hover:bg-slate-100 h-[236px]">
                  <Link href={"/tes"}>
                    <div className="flex justify-between flex-nowrap text-xs py-3">
                      <div
                        className={`font-bold rounded-[40px] text-white px-2 py-1 ${
                          order.method === "Diantar Kerumah" ||
                          order.method === "Delivery"
                            ? "bg-secondary"
                            : "bg-primary"
                        }`}
                      >
                        {order.method}
                      </div>
                      <div
                        className={`font-semibold rounded-md p-1 ${
                          order.status === "Dikirim"
                            ? classStatus.deliver
                            : order.status === "Menunggu Pembayaran"
                            ? classStatus.waitingPayment
                            : order.status === "Di Proses"
                            ? classStatus.process
                            : classStatus.finished
                        }`}
                      >
                        {order.status}
                      </div>
                    </div>
                    {order.items.map((item, index) => (
                      <div className="pb-2" key={index}>
                        {index === 0 ? (
                          <div key={item.merk} className="flex space-x-3">
                            <div className="border h-max p-1 rounded-md mt-3">
                              <Image
                                src={item.image}
                                alt="checkout-image"
                                className="h-[32px] w-[40px] object-cover"
                              />
                            </div>
                            <div className="p-2 space-y-2">
                              <h6 className="font-semibold text-sm line-clamp-2">
                                {item.title}
                              </h6>
                              <h6 className="text-[10px]">
                                Tipe: {item.variaty}
                              </h6>
                              <h6 className="text-base-300 text-xs">
                                {item.count} Barang
                              </h6>
                            </div>
                          </div>
                        ) : (
                          <h6 className="text-xs font-semibold text-primary">
                            +1 Produk Lainnya
                          </h6>
                        )}
                      </div>
                    ))}
                    <hr />
                    <div className="flex justify-between text-sm font-semibold py-3">
                      <h6>Total Transaksi</h6>
                      <h6 className="text-primary">
                        {rupiahFormat(order.totalPrice)}
                      </h6>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
      </div>
    </>
  );
}
