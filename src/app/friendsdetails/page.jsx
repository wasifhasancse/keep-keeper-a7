import FriendsCard from '@/Components/FriendsCard/FriendsCard';
import React from 'react';
import { readFile } from "node:fs/promises";
import path from "node:path";

const filePath = path.join(process.cwd(), "public", "Data", "friends.json");
  const friendsData = JSON.parse(await readFile(filePath, "utf-8"));

const page = () => {
  return (
    <section className="max-w-11/12 mx-auto my-10">
        <h2 className="text-2xl text-black font-bold pb-5">Your Friends</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {friendsData.map((friendInfo) => (
            <FriendsCard key={friendInfo.id} friendInfo={friendInfo} />
          ))}
        </div>
      </section>
  );
};

export default page;
