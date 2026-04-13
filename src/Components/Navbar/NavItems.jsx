"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ item }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className={`px-5 py-2 text-md text-black text-lg font-medium rounded-md ${pathname == item.href && "bg-green-300"} hover:bg-green-200 hover:text-green-700 hover:shadow hover:shadow-green-300`}
        href={item.href}
      >
        { item.icon}{item.title}
      </Link>
    </li>
  );
};

export default NavItems;
