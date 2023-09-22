"use client";

import assets from "@trex/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderPure({ title }: { title?: string }) {
  const router = useRouter();
  function back() {
    router.back();
  }
  return (
    <header>
      <div className="flex justify-between pt-5 px-8 shadow-md h-[100px]">
        <div onClick={() => back()} className="space-x-2 cursor-pointer flex">
          <Image src={assets.TrexIcons.Back} alt="back" className="inline-block"/>
          <h6 className="text-base font-bold pt-7">{title}</h6>
        </div>
        <Link href={"/dashboard/checkout/cart"} className="pt-7">
          <Image src={assets.TrexIcons.Cart} alt="cart" />
        </Link>
      </div>
    </header>
  );
}
