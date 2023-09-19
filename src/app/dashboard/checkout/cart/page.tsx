"use client";
import { HeaderPure } from "@trex/components";
import { useState } from "react";
import handphoneImage from "../../../../assets/images/samsung.png";
import Image from "next/image";
import { rupiahFormat } from "@trex/utils/helpers";
import assets from "@trex/assets";
import { useRouter } from "next/navigation";

const data = [
  {
    id: 1,
    title: "Samsung Galaxy S20 FE RAM 8gb Internal 250gb",
    image: handphoneImage,
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
  },
  {
    id: 2,
    title: "Samsung Galaxy S21 FE RAM 8gb Internal 250gb",
    image: handphoneImage,
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
  },
];

export default function Cart() {
  const [datas, setDatas] = useState(data);
  const [cart, setCart] = useState(datas.map(() => 1)); // Membuat array jumlah barang dengan nilai awal 1
  const [selectAll, setSelectAll] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const router = useRouter();

  // Fungsi untuk menambah jumlah barang
  const increment = (index: number) => {
    const newCart = [...cart];
    newCart[index]++;
    setCart(newCart);
  };

  // Fungsi untuk mengurangi jumlah barang
  const decrement = (index: number) => {
    const newCart = [...cart];
    if (newCart[index] > 1) {
      newCart[index]--;
      setCart(newCart);
    }
  };

  const toggleSelect = (productId: number) => {
    const isSelected = selectedProducts.includes(productId);
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const removeProduct = (id: number) => {
    // Buat salinan data baru tanpa produk yang dihapus
    const updatedDatas = datas.filter((data) => data.id !== id);
    const updateCart = cart.filter((data, index) => index + 1 !== id);
    setCart(updateCart);
    setDatas(updatedDatas);
  };

  const handleCheckout = () => {
    router.push("/dashboard/checkout/checkout-confirmation")
  };

  const isProductSelected = (productId: number) =>
    selectedProducts.includes(productId);

  const canCheckout = selectedProducts.length > 0;

  return (
    <div>
      <HeaderPure title="Keranjang" />
      <div className="p-5">
        {datas.length > 0 ? (
          <div>
            <div className="flex justify-between text-sm">
              <div className="flex space-x-3">
                <input
                  checked={selectAll}
                  type="checkbox"
                  className="checkbox w-5 h-5"
                  onChange={() => {
                    setSelectAll(!selectAll);
                    if (!selectAll) {
                      const allProductIds = datas.map((data) => data.id);
                      setSelectedProducts(allProductIds);
                    } else {
                      setSelectedProducts([]);
                    }
                  }}
                />
                <h6>Pilih Semua Produk</h6>
              </div>
              <h6
                className="text-primary cursor-pointer"
                onClick={() => {
                  setDatas([]);
                }}
              >
                Hapus Barang
              </h6>
            </div>
            <hr className="w-[98%] mt-5" />
            {datas.map((data, index) => (
              <div key={data.id}>
                <div className="flex mt-5 space-x-3">
                  <input
                    checked={isProductSelected(data.id)}
                    type="checkbox"
                    className="checkbox w-5 h-5"
                    onChange={() => toggleSelect(data.id)}
                  />
                  <div className="border rounded-md p-2">
                    <Image
                      src={data.image}
                      alt="cart-photo"
                      className="h-24 w-28 object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-evenly">
                    <h6 className="text-sm font-semibold">{data.title}</h6>
                    <h6 className="text-xs">{data.variaty} GB</h6>
                    <h6 className="text-sm font-bold">
                      {rupiahFormat(data.price)}
                    </h6>
                  </div>
                </div>
                <div className="flex justify-between px-2">
                  <Image
                    src={assets.TrexIcons.Trash}
                    alt="trash"
                    className="h-6 w-6 mt-5 ml-4 cursor-pointer"
                    onClick={() => removeProduct(data.id)}
                  />
                  <div className="flex space-x-5 mt-4">
                    <button
                      disabled={cart[index] === 1}
                      onClick={() => decrement(index)}
                      className={`btn-xs rounded-full text-white text-sm font-bold ${
                        cart[index] === 1
                          ? "bg-gray-200 cursor-not-allowed"
                          : "bg-primary"
                      }`}
                    >
                      -
                    </button>
                    <p className="text-sm font-semibold mt-1">{cart[index]}</p>
                    <button
                      onClick={() => increment(index)}
                      className="btn-xs rounded-full bg-primary text-white text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-10 flex justify-between px-5">
              <div className="text-sm">
                <h6>Total</h6>
                <h5 className="text-primary font-bold">
                  {rupiahFormat(
                    cart.reduce(
                      (total, quantity, index) =>
                        total + quantity * datas[index].price,
                      0
                    )
                  )}
                </h5>
              </div>
              <button
                className={`btn-md rounded-md text-center text-white ${
                  canCheckout ? "bg-primary" : "bg-gray-200 cursor-not-allowed"
                }`}
                disabled={!canCheckout}
                onClick={() => handleCheckout()}
              >
                Checkout ({selectedProducts.length})
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex item-center justify-center">
              <Image
                src={assets.TrexImages.Empty}
                alt="empty"
                className="h-2/4 w-2/4"
              />
            </div>
            <p className="text-sm text-center">
              Keranjang Kamu kosong. Ayo belanja kebutuhan kamu disini.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
