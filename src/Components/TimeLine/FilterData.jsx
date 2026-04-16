"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";

const FilterData = () => {
  const { manageFilter } = useContext(DataContext);

  return (
    <select className="select select-bordered w-full bg-zinc-50 border-zinc-200 focus:outline-none focus:border-green-300 hover:bg-green-50 hover:border-green-200 transition-colors">
      <option onClick={() => manageFilter("All")}>All</option>
      <option onClick={() => manageFilter("Call")}>Call</option>
      <option onClick={() => manageFilter("Text")}>Text</option>
      <option onClick={() => manageFilter("Video")}>Video</option>
    </select>
  );
};

export default FilterData;
