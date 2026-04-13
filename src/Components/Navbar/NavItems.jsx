"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = ({ item }) => {
  const pathname = usePathname();
  return (
    <li>
      <Link
        className={`px-5 py-2 text-md text-black font-medium rounded-md ${pathname == item.href && " bg-green-300 border-green-500 border-2"} hover:bg-green-200 hover:text-green-700`}
        href={item.href}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default NavItems;
