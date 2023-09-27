import Image from "next/image";
import logo from "../../../src/assets/images/logo.png";
import assets from "@trex/assets";

export default function Footer() {
  const logos = [assets.TrexMedsos.Facebook2, assets.TrexMedsos.Instagram, assets.TrexMedsos.Twitter, assets.TrexMedsos.Gmail, assets.TrexMedsos.Youtube];
  return (
    <footer className="p-3">
      <div className="w-11/12 h-0.5 bg-zinc-300 mx-auto" />
      <div className="h-96 px-5 flex-col justify-between items-start inline-flex mt-5">
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="justify-start items-start gap-20 inline-flex">
            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
              <div className="text-black text-2xl font-bold font-['Inter'] leading-9">
                Customer Service
              </div>
              <div className="flex-col justify-start items-start gap-1 flex">
                <div className="text-neutral-600 text-lg font-normal font-['Inter'] leading-relaxed">
                  Hubungin Kami
                </div>
                <div className="text-neutral-600 text-lg font-normal font-['Inter'] leading-relaxed">
                  F.A.Q
                </div>
              </div>
            </div>
          </div>
          <div className="w-44 h-52 relative">
            <Image
              alt="logo"
              className="w-44 h-14 left-0 top-[148.93px] absolute"
              src={logo}
            />
            <div className="left-0 top-0 absolute text-black text-2xl font-bold font-['Inter'] leading-9">
              Ikuti Kami
            </div>
            <div className="w-36 h-8 left-0 top-[36px] absolute justify-start items-center gap-2.5 inline-flex">
              {logos.map((logo, index) => (
                <Image
                  alt={logo.toString()}
                  key={index}
                  src={logo}
                  className="cursor-pointer"
                
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
