import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green-300 text-black">
      <div className="max-w-11/12 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="mt-20 text-center">
            <Link href={"/"}>
              <h1 className="text-5xl font-black pb-5">KeenKeeper</h1>
            </Link>
            <p>
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-lg">Social Links</span>
            <div className="flex items-center justify-center gap-2.5 text-xl mt-2.5">
              <span
                className="p-2.5 bg-green-200 rounded-full hover:bg-green-400 font-bold hover:text-green-100 tooltip"
                data-tip="Instagram"
              >
                <Link href={""}>
                  <FaInstagram />
                </Link>
              </span>
              <span
                className="p-2.5 bg-green-200 rounded-full hover:bg-green-400 font-bold hover:text-green-100 tooltip"
                data-tip="Facebook"
              >
                <Link href={""}>
                  <FaFacebook />
                </Link>
              </span>
              <span
                className="p-2.5 bg-green-200 rounded-full hover:bg-green-400 font-bold hover:text-green-100 tooltip"
                data-tip="Twitter"
              >
                <Link href={""}>
                  <FaXTwitter />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="mb-5 flex flex-col md:flex-row items-center justify-center gap-2.5 md:justify-between">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
          <div className="flex items-center justify-center gap-2.5 md:gap-5">
            <Link className="hover:underline" href={""}>
              Privacy Policy{" "}
            </Link>
            <Link className="hover:underline" href={""}>
              Terms of Service
            </Link>
            <Link className="hover:underline" href={""}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
