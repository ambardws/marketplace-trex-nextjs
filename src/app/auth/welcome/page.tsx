import Image from "next/image";
import bgWelcome from "../../../assets/images/bg-main-top.png";
import logoWhite from "../../../assets/images/logo-white.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import assets from "@trex/assets";

export default function Welcome() {
  return (
    <div>
      <div className="w-full min-h-[300px] relative">
      <Image src={bgWelcome} quality={90} alt="background" className="w-full h-[471px] absolute" />
      <div className="absolute z-10 w-full">
        <div className="flex justify-center items-center">
          <Image src={logoWhite} alt="logo-white" className="mt-20" />
        </div>
        <div className="flex flex-col items-start mt-10 text-white p-5">
          <h1 className="text-2xl font-bold">Selamat Datang</h1>
          <h2 className="text-sm mt-3">
            Silakan masuk untuk memulai belanja di Parastar
          </h2>
        </div>
      </div>
       
      </div>

      <div className="text-black flex flex-col justify-center items-center">
        <h2 className="text-center mt-24 font-semibold">Masuk/Daftar dengan</h2>
        <div className="w-80 h-14 px-3 bg-white hover:bg-black hover:text-white rounded-full shadow justify-between items-center inline-flex mt-5 cursor-pointer relative">
          <div className="justify-start items-center gap-6 flex">
            <Image className="w-6 h-6" src={assets.TrexIcons.Google} alt="google" />
            <div className="text-sm font-bold">
              Lanjutkan dengan Google{" "}
              <AiOutlineArrowRight className="inline h-10 w-5 absolute right-5 top-2" />
            </div>
          </div>
          <div className="w-6 h-6 relative" />
        </div>
        <div className="w-80 h-14 px-3 bg-white hover:bg-black hover:text-white rounded-full shadow justify-between items-center inline-flex mt-5 cursor-pointer relative">
          <div className="justify-start items-center gap-6 flex">
            <Image className="w-6 h-6" src={assets.TrexIcons.Facebook} alt="facebook" />
            <div className="text-sm font-bold">
              Lanjutkan dengan Facebook{" "}
              <AiOutlineArrowRight className="inline h-10 w-5 absolute right-5 top-2" />
            </div>
          </div>
          <div className="w-6 h-6 relative" />
        </div>
      </div>
    </div>
  );
}
