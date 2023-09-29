"use client";

import { HeaderHome, HeaderPure } from "@trex/components";
import { useState } from "react";
import assets from "@trex/assets";
import Image from "next/image";
import handphoneImage from "../../../../assets/images/samsung.png";
import { calculateDiscountedPrice, rupiahFormat } from "@trex/utils/helpers";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { toastSuccess } from "@trex/utils/toast";

const data = {
  id: 1,
  title: "Samsung Galaxy S20 FE RAM 8gb Internal 250gb",
  image: handphoneImage,
  price: 2500000,
  margin: 20000,
  available: 85,
  variaty: ["6 / 12", "6 / 256", "8 / 128", "8 / 256"],
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
};

export default function ProductDetail() {
  const [imageActive, setImageActive] = useState("#item1");
  const [active, setActive] = useState(data.variaty[0]);
  const [count, setCount] = useState(1);
  const [IsOpenAllDesc, setIsOpenAllDesc] = useState(false);

  const manageString = () => {
    if (IsOpenAllDesc) {
      return data.description;
    } else {
      let limitString = data.description?.substring(0, 240);
      if (data.description?.length > 240) {
        limitString += "...";
      }
      return limitString;
    }
  };

  const handleDetailStore = () => {
  };

  const handleChatStore = () => {
   
  };

  const addToCart = (product: Cart) => {
    console.log(product);
    toastSuccess("Produk Berhasil di tambahkan ke keranjang");
  };

  return (
    <div>
      <HeaderHome cart={true} />
      <div className="bg-base-200">
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <Image
              alt="detail-photo"
              src={handphoneImage}
              width={300}
              height={250}
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image
              alt="detail-photo"
              src={handphoneImage}
              width={300}
              height={250}
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image
              alt="detail-photo"
              src={handphoneImage}
              width={300}
              height={250}
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image
              alt="detail-photo"
              src={handphoneImage}
              width={300}
              height={250}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-4 gap-2">
          <a
            href="#item1"
            onClick={() => {
              setImageActive("#item1");
            }}
            className={`h-3 w-3 rounded-full ${
              imageActive === "#item1" ? "bg-primary" : "bg-base-300"
            }`}
          ></a>
          <a
            href="#item2"
            onClick={() => {
              setImageActive("#item2");
            }}
            className={`h-3 w-3 rounded-full ${
              imageActive === "#item2" ? "bg-primary" : "bg-base-300"
            }`}
          ></a>
          <a
            href="#item3"
            onClick={() => {
              setImageActive("#item3");
            }}
            className={`h-3 w-3 rounded-full ${
              imageActive === "#item3" ? "bg-primary" : "bg-base-300"
            }`}
          ></a>
          <a
            href="#item4"
            onClick={() => {
              setImageActive("#item4");
            }}
            className={`h-3 w-3 rounded-full ${
              imageActive === "#item4" ? "bg-primary" : "bg-base-300"
            }`}
          ></a>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-base font-bold w-[80%]">{data.title}</h2>
          <div className="bg-red-100 rounded-lg w-12 h-10 flex items-center justify-center">
            <Image
              src={assets.TrexIcons.Share}
              alt="share"
              className="w-5 h-5"
            />
          </div>
        </div>
        <h6 className="text-secondary text-sm font-medium mt-2">
          Terserdia {data.available}
        </h6>
        <h6 className="text-sm font-bold mt-4">Pilih Variasi</h6>
        <div className="flex flex-row text-sm overflow-x-scroll mt-3 whitespace-nowrap gap-3">
          {data.variaty.map((categorie) => (
            <div
              key={categorie}
              className={`h-max w-max py-2 px-5 rounded-full cursor-pointer flex items-center gap-1 ${
                active === categorie
                  ? "text-primary bg-red-100 border border-primary font-semibold"
                  : "bg-base-100 border"
              }`}
              onClick={() => setActive(categorie)}
            >
              {categorie} GB
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-between">
          <div className="w-max">
            {data.discount ? (
              <div className="text-sm font-bold space-y-1">
                <h1 className="text-base-300">
                  {rupiahFormat(data.price)}{" "}
                  <span className="bg-warning h-5 w-5 p-1 ml-1 text-primary text-xs font-light rounded-lg">
                    -{data.discount}%
                  </span>
                </h1>
                <h1 className="text-primary text-base">
                  {rupiahFormat(
                    calculateDiscountedPrice(data.price, data.discount)
                  )}
                </h1>
              </div>
            ) : (
              <div className="text-sm font-bold space-y-1">
                <h1 className="text-base-300">{rupiahFormat(data.price)} </h1>
              </div>
            )}
          </div>

          <div className="flex space-x-5">
            <button
              disabled={count === 1 ? true : false}
              onClick={() => setCount(count - 1)}
              className={`btn-xs rounded-full bg-primary text-white text-sm font-bold ${
                count === 1 ? "bg-gray-200 cursor-not-allowed" : ""
              }`}
            >
              -
            </button>
            <p className="text-sm font-semibold mt-1">{count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="btn-xs rounded-full bg-primary text-white text-sm font-bold"
            >
              +
            </button>
          </div>
        </div>

        <h6 className="text-sm font-bold mt-8">Detail Produk</h6>
        <div className="flex flex-col mt-2 space-y-2">
          <div className="flex justify-between">
            <h6>Merek</h6>
            <h6>{data.merk}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Sub Kategori</h6>
            <h6 className="text-primary font-semibold">{data.category}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Kode PLU</h6>
            <h6>{data.kode}</h6>
          </div>
          <div className="flex justify-between">
            <h6>P x L x T {`(cm)`}</h6>
            <h6>{data.dimension}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Berat</h6>
            <h6>{data.weight}</h6>
          </div>
          <div className="flex justify-between">
            <h6>Dikirim dari</h6>
            <h6>{data.fromCity}</h6>
          </div>
        </div>

        <h6 className="text-sm font-bold mt-8">Deskripsi Produk</h6>
        <p
          className="mb-0 overflow-hidden mt-2"
          dangerouslySetInnerHTML={{
            __html: manageString(),
          }}
        ></p>
        {data.description.length > 240 && (
          <p
            className="font-bold mt-3 text-primary cursor-pointer"
            onClick={() => setIsOpenAllDesc((prev) => !prev)}
          >
            {IsOpenAllDesc ? (
              <>
                Lihat lebih sedikit <FiChevronUp className="inline" />
              </>
            ) : (
              <>
                Lihat selengkapnya <FiChevronDown className="inline" />
              </>
            )}
          </p>
        )}

        <div className="mt-10 flex justify-between h-10">
        <button className="w-[135px] w bg-red-100 text-primary border border-primary rounded-lg text-center flex items-center justify-evenly"><Image src={assets.TrexIcons.Chat} alt="chat-toko" /> Chat Toko</button>
        <button  onClick={() => addToCart(data)} className="w-[65%] mx-3 bg-primary text-white rounded-lg text-center">Tambah Keranjang</button>
        </div>
      </div>
    </div>
  );
}
