'use client'
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";
import { FiPhoneCall } from "react-icons/fi";

const ManageCallButton = ({ name, id }) => {
  const { manageCall} = useContext(DataContext)
  return (
    <button onClick={()=>manageCall(name, id)} className="rounded-md border border-zinc-300 bg-zinc-50 py-5 text-zinc-700 hover:border-green-300 hover:bg-green-50 transition-colors">
      <span className="flex flex-col items-center justify-center gap-2">
        <FiPhoneCall className="text-xl" />
        <span className="font-semibold">Call</span>
      </span>
    </button>
  );
};

export default ManageCallButton;
