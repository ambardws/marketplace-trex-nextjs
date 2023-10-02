import { HeaderHome } from "@trex/components";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const menus = [
  {
    title: "Order Saya",
    link: "/dashboard/orders",
  },
  {
    title: "Pengajuan Retur Barang",
    link: "/dashboard/services/retur/retur-data-form",
  },
  {
    title: "Riwayat Retur Barang",
    link: "/dashboard/services/retur/retur-history",
  },
];

export default function HomeMenu() {
  return (
    <div>
      <HeaderHome title="Home" />
      <div className="flex flex-col space-y-6 mt-6 p-5">
        {menus.map((menu, index) => (
          <Link href={menu.link}>
            <div className="flex space-x-4 relative" key={index}>
              <h6 className="text-sm font-semibold">{menu.title}</h6>
              <FiChevronRight className="absolute h-5 w-5 right-0 top-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
