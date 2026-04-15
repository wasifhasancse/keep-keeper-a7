import FriendsCard from "@/Components/FriendsCard/FriendsCard";
import Stats from "@/Components/Stats/Stats";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";

export default async function Home() {
  const filePath = path.join(process.cwd(), "public", "Data", "friends.json");
  const friendsData = JSON.parse(await readFile(filePath, "utf-8"));
  // const res = await fetch("live-link/data.json", {
  //   cache: "no-store",
  // });
  // const friendsData = await fetch("/Data/friends.json").then(res=>res.json());
  return (
    <main className="bg-slate-50">
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
              <Link href={""}>
                <button className="px-5 py-2.5 text-lg font-medium rounded-md bg-green-300 hover:bg-green-200 hover:text-green-700 border-2 border-green-500 hover:shadow hover:shadow-green-300 cursor-pointer">
                  + Add a Friend
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-11/12 mx-auto my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Stats title={"Total Friends"} value={friendsData.length} />
        <Stats
          title={"On Track"}
          value={friendsData.filter((item) => item.status == "on-track").length}
        />
        <Stats
          title={"Need Attention"}
          value={
            friendsData.filter((item) => item.days_since_contact > 30).length
          }
        />
        <Stats
          title={"Interactions This Month"}
          value={
            friendsData.filter((item) => item.days_since_contact < 30).length
          }
        />
      </section>

      <div className="divider max-w-11/12 mx-auto my-16"></div>

      <section className="max-w-11/12 mx-auto my-10">
        <h2 className="text-2xl text-black font-bold pb-5">Your Friends</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {friendsData.map((friendInfo) => (
            <FriendsCard key={friendInfo.id} friendInfo={friendInfo} />
          ))}
        </div>
      </section>
    </main>
  );
}
