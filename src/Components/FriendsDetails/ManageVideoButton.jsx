"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";
import { FiVideo } from "react-icons/fi";

const ManageVideoButton = ({ name, id }) => {
  const { manageVideo } = useContext(DataContext);
  return (
    <button
      onClick={() => manageVideo(name, id)}
      className="rounded-md border border-zinc-300 bg-zinc-50 py-5 text-zinc-700 hover:border-green-300 hover:bg-green-50 transition-colors"
    >
      <span className="flex flex-col items-center justify-center gap-2">
        <FiVideo className="text-xl" />
        <span className="font-semibold">Video</span>
      </span>
    </button>
  );
};

export default ManageVideoButton;
