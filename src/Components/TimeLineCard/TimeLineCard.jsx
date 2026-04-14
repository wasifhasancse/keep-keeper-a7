"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";
import { PiPhoneCall } from "react-icons/pi";

const TimeLineCard = () => {
  const { allCallData } = useContext(DataContext);

  const formatDateTime = (value) => {
    const parsed = value ? new Date(value) : new Date();
    const date = Number.isNaN(parsed.getTime()) ? new Date() : parsed;

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(date);
  };

  return (
    <>
      {allCallData?.map((callData, index) => (
        <div
          key={index}
          className="bg-white border border-zinc-200 rounded-xl px-5 py-4 shadow-sm hover:border-green-200 hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-zinc-700">
              <PiPhoneCall className="text-xl leading-none" />
            </span>

            <div className="min-w-0">
              <p className="leading-tight">
                <span className="text-2xl font-semibold text-green-900">
                  Call
                </span>
                <span className="text-xl text-slate-600 ml-2">
                  with {callData.name}
                </span>
              </p>
              <p className="text-lg text-slate-500 mt-1">
                {formatDateTime(callData?.dateTime)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TimeLineCard;
