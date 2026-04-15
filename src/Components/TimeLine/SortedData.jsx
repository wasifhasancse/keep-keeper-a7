"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";

const SortedData = () => {
  const { manageSort } = useContext(DataContext);
  return (
    <select className="select select-bordered w-full bg-zinc-50 border-zinc-200 focus:outline-none focus:border-green-400">
      <option onClick={() => manageSort("Select")}>Select Order</option>
      <option onClick={() => manageSort("Newest")}>Newest</option>
      <option onClick={() => manageSort("Oldest")}>Oldest</option>
    </select>
  );
};

export default SortedData;
