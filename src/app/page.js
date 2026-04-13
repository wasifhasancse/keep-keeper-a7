import Stats from "@/Components/Stats/Stats";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-zinc-100">
      <section>
        <div className="hero min-h-[50vh]">
          <div className="hero-content text-center max-w-11/12 mx-auto mt-10">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl font-bold">
                Friends to keep close in your life
              </h1>
              <p className="py-6 max-w-xl">
                Your personal shelf of meaningful connections. Browse, tend, and
                nurture the relationships that matter most.
              </p>
              <Link href={"/"}>
                <button className="px-5 py-2.5 text-lg font-medium rounded-md bg-green-300 hover:bg-green-200 hover:text-green-700 border-2 border-green-500">
                  + Add a Friend
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-11/12 mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Stats />
        <Stats />
        <Stats />
        <Stats />
      </section>
      <div className="divider max-w-11/12 mx-auto"></div>
      <section className="max-w-11/12 mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <h2 className="text-2xl text-black font-bold">Your Friends</h2>
      </section>
    </main>
  );
}
