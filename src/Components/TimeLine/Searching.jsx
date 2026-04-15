'use client'
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";

const Searching = () => {
  const { manageSearch } = useContext(DataContext);
  return (
    <div className="relative">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10 pointer-events-none" />
      <input
        type="search"
        placeholder="Search by friend or interaction type"
        className="input input-bordered w-full bg-zinc-50 border-zinc-200 pl-9 focus:outline-none focus:border-green-400"
        onChange={manageSearch}
      />
    </div>
  );
};

export default Searching;
