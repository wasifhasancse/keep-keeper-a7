"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";

const HistoryCard = ({ id }) => {
  const { timeLineData } = useContext(DataContext);

  const friendHistory = timeLineData?.filter((item) => item?.id === id) ?? [];

  const formatDate = (value) => {
    const parsed = value ? new Date(value) : new Date();
    const date = Number.isNaN(parsed.getTime()) ? new Date() : parsed;

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  if (friendHistory.length === 0) {
    return (
      <p className="rounded-md border border-dashed border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-500">
        No interactions yet.
      </p>
    );
  }

  return (
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
  );
};

export default HistoryCard;
