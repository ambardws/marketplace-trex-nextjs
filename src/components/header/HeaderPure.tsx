"use client";

import assets from "@trex/assets";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiDownload } from "react-icons/fi";

export default function HeaderPure({ title }: { title?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  function back() {
    router.back();
  }
  return (
    <header>
      <div className="flex justify-between p-5 shadow-md h-[60px]">
        <div onClick={() => back()} className="space-x-2 cursor-pointer flex">
          <Image
            src={assets.TrexIcons.Back}
            alt="back"
            className="inline-block"
          />
          <h6 className="text-base font-bold m-auto">{title}</h6>
        </div>
        {pathname.includes("billing-how-to") && (
          <FiDownload className="my-auto h-6 w-6" />
        )}
      </div>
    </header>
  );
}
