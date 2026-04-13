import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen max-w-11/12 mx-auto">
      <div className="hero-content text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold">
            Friends to keep close in your life
          </h1>
          <p className="py-6 max-w-xl">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <Link href={'/'}>
            <button className="px-5 py-2.5 text-lg font-medium rounded-md bg-green-300 hover:bg-green-200 hover:text-green-700 border-2 border-green-500">
              + Add a Friend
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
