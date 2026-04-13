import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import NavItems from "./NavItems";

const Navbar = () => {
  const navItems = [
    {
      href: "/",
      title: `Home`,
    },
    {
      href: "/timeline",
      title: "Timeline",
    },
    {
      href: "/stats",
      title: "Stats",
    },
  ];
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start container mx-auto px-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm gap-2.5 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item, index) => (
                <NavItems key={index} item={item}/>
              ))}
            </ul>
          </div>
          <Link href={"/"} className="text-3xl font-bold text-green-400">
            <span className="text-green-900 font-black">Keen</span>Keeper
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2.5">
            {navItems.map((item, index) => (
                <NavItems key={index} item={item}/>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
