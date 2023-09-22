"use client";
import Image from "next/image";
import bgHeader from "../../assets/images/bgHeader.png";
import logoToko from "../../assets/images/toko.png";
import cable from "../../assets/images/cable.svg";
import handphone from "../../assets/images/handphone.png";
import { useState } from "react";
import assets from "@trex/assets";

const categories = [
  { name: "Semua", icon: "" },
  { name: "Charger", icon: assets.TrexIcons.Cable },
  { name: "Handphone", icon: assets.TrexIcons.Handphone },
];

export default function HeaderHome() {
  const [active, setActive] = useState("Semua");
  return (
    <header className="h-max ">
      <div className="overflow-hidden">
        <div className="relative">
          <Image
            src={bgHeader}
            quality={90}
            alt="bgHeader"
            className="absolute -top-2 -right-2 w-[187px] h-[163px]"
          />
        </div>
        <div className="flex pt-10 w-full space-x-5 justify-center">
          <div className="relative w-3/5">
            <Image
              src={assets.TrexIcons.Search}
              alt="search"
              quality={80}
              className="absolute left-2 top-2 w-4 h-4"
            />
            <input
              type="text"
              prefix="tes"
              placeholder="Cari Produk Di Toko Lingga"
              className="input input-bordered rounded-full w-full h-8 text-xs pl-8"
            />
          </div>
          <Image src={assets.TrexIcons.Cart} alt="cart" quality={80} className="z-10" />
          <Image src={assets.TrexIcons.MenuHamburger} alt="menu" quality={80} className="z-10"/>
        </div>
        <div className="flex mt-5 w-full justify-evenly">
          <Image
            src={logoToko}
            alt="logoToko"
            quality={90}
            className="rounded-full h-10 w-10 z-10"
          />
          <h2 className="font-bold z-10 my-auto">Toko Lingga</h2>
          <div className="flex bg-primary text-white h-max w-max rounded-lg p-2 space-x-2 z-10">
            <Image src={assets.TrexIcons.Whatsapp} alt="logoWA" className="h-5 w-5" />
            <p className="text-sm font-medium my-auto">Chat Toko</p>
          </div>
        </div>
      </div>

      <h1 className="text-sm font-bold mt-5 p-5">Kategori Produk</h1>
      <div className="flex text-sm px-5 overflow-x-scroll space-x-3">
        {categories.map((categorie) => (
          <div key={categorie.name}
            className={`h-max w-max py-2 px-5 rounded-full cursor-pointer flex items-center gap-1 ${
              active === categorie.name
                ? "text-primary bg-red-100 border border-primary font-semibold"
                : "bg-base-100 border"
            }`}
            onClick={() => setActive(categorie.name)}
          >
            {categorie.icon && (
              <Image
                src={categorie.icon}
                alt={categorie.name.toString()}
                className="w-4 h-4 inline"
              />
            )}
            {categorie.name}
          </div>
        ))}
      </div>
    </header>
  );
}
