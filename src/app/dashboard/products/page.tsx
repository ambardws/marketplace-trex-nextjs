"use client";
import Image from "next/image";
import handphoneImage from "../../../assets/images/samsung.png";
import shareImage from "../../../assets/images/Share.png";
import { rupiahFormat } from "@trex/utils/helpers";
import { toastSuccess } from "@trex/utils/toast";
import assets from "@trex/assets";

const products = [
  {
    title: "Samsung Galaxy S20 FE RAM 8gb Internal 250gb",
    image: handphoneImage,
    price: 100000000,
    margin: 20000,
  },
  {
    title: "Samsung S22 Ultra",
    image: handphoneImage,
    price: 100000000,
    margin: 20000,
  },
  {
    title: "Samsung S21 FE",
    image: handphoneImage,
    price: 100000000,
    margin: 20000,
  },
  {
    title: "Xiaomi 12",
    image: handphoneImage,
    price: 100000000,
    margin: 20000,
  },
  {
    title: "Samsung S20 FE",
    image: handphoneImage,
    price: 100000000,
    margin: 20000,
  },
  {
    title: "Samsung S20 FE",
    image: handphoneImage,
    price: 100000000,
    margin: 20000,
  },
];

export default function Products() {
  const addToCart = (product: Cart) => {
    console.log(product);
    toastSuccess("Produk Berhasil di tambahkan ke keranjang");
  };

  return (
    <div className="p-5">
      <h1 className="text-sm font-bold mt-5">Product List</h1>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {products.map((product, index) => (
          <div className="card bg-base-100 border" key={index}>
            <Image
              src={handphoneImage}
              alt="cart"
              className="w-40 h-[150px] mx-auto"
            />
            <hr />
            <div className="p-5 space-y-1">
              <h2 className="text-base font-bold truncate cursor-pointer">
                {product.title}
              </h2>
              <p className="text-sm">{rupiahFormat(product.price)}</p>
              <p className="text-success text-xs font-semibold">
                Margin {rupiahFormat(product.margin)}
              </p>
            </div>
            <div className="flex p-5 justify-between">
              <div className="p-1 text-sm w-3/4 h-max bg-primary rounded-lg text-white cursor-pointer">
                <p className="text-center" onClick={() => addToCart(product)}>
                  {" "}
                  Tambah
                </p>
              </div>
              <Image
                src={assets.TrexIcons.Share}
                alt="share-image"
                className="h-5 w-6 my-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
