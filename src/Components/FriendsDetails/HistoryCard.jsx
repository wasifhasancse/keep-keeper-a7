"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";
import { MdPhonelinkOff } from "react-icons/md";

const HistoryCard = ({ id }) => {
  const { timeLineData } = useContext(DataContext);

  const friendHistory = timeLineData?.filter((item) => item?.id === id) ?? [];
  const isEmpty = friendHistory.length === 0;
  const formatDate = (value) => {
    const parsed = value ? new Date(value) : new Date();
    const date = Number.isNaN(parsed.getTime()) ? new Date() : parsed;

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <>
      {isEmpty ? (
        <div className="rounded-xl border-2 border-dashed border-zinc-200 bg-zinc-50/80 px-4 py-8 md:px-6 md:py-10 lg:px-6 lg:py-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-zinc-200 text-2xl">
            <span aria-hidden="true">
              <MdPhonelinkOff />
            </span>
          </div>
          <p className="text-lg md:text-xl lg:text-xl font-semibold text-zinc-700">
            No history found yet
          </p>
          <p className="mt-1 text-sm md:text-base lg:text-base text-zinc-500 max-w-md mx-auto">
            Your interaction log with this friend is still empty. Add a call,
            text, or video activity to see it here.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-medium">
            <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-green-700">
              Calls
            </span>
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-cyan-700">
              Texts
            </span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-700">
              Videos
            </span>
          </div>
        </div>
      ) : (
        <div className="divide-y divide-zinc-100">
          {friendHistory.map((timeLineInfo, index) => (
            <div
              key={index}
              className="flex items-center gap-4 py-3 first:pt-0 last:pb-0"
            >
              <span
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-700 ${
                  timeLineInfo.type === "Call"
                    ? "bg-green-100"
                    : timeLineInfo.type === "Video"
                      ? "bg-cyan-100"
                      : "bg-indigo-100"
                }`}
              >
                {timeLineInfo.icon}
              </span>

              <div className="min-w-0 flex-1">
                <p className="font-semibold text-zinc-800 leading-tight">
                  {timeLineInfo.type}
                </p>
                <p className="text-sm text-slate-500 truncate">
                  with {timeLineInfo.name}
                </p>
              </div>

              <p className="shrink-0 text-sm text-slate-500">
                {formatDate(timeLineInfo?.dateTime)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HistoryCard;
