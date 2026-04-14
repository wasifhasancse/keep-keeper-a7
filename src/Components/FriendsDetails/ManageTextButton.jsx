"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";
import { MdOutlineTextsms } from "react-icons/md";

const ManageTextButton = ({name, id }) => {
  const { manageText } = useContext(DataContext);
  return (
    <button
      onClick={() => manageText(name, id)}
      className="rounded-md border border-zinc-300 bg-zinc-50 py-5 text-zinc-700 hover:border-green-300 hover:bg-green-50 transition-colors"
    >
      <span className="flex flex-col items-center justify-center gap-2">
        <MdOutlineTextsms className="text-xl" />
        <span className="font-semibold">Text</span>
      </span>
    </button>
  );
};

export default ManageTextButton;
