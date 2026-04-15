"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";
import { FiPhoneCall, FiVideo } from "react-icons/fi";
import { MdOutlineTextsms } from "react-icons/md";

const TimeLineCard = () => {
  const { timeLineData } = useContext(DataContext);
  const isEmpty = timeLineData.length === 0;

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
      {isEmpty ? (
        <div className="flex flex-col items-center justify-center gap-5 py-20 px-6 text-center rounded-xl border-2 border-dashed border-zinc-200 bg-white">
          <div className="flex gap-4 text-4xl sm:text-5xl">
            <span>
              <FiPhoneCall className="text-3xl text-green-400" />
            </span>
            <span>
              <MdOutlineTextsms className="text-3xl text-cyan-400" />
            </span>
            <span>
              <FiVideo className="text-3xl text-indigo-400" />
            </span>
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-bold text-zinc-700">
              Your timeline is empty
            </p>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-sm mx-auto">
              Once you log a call, text, or video with a friend it will show up
              here in chronological order.
            </p>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-600 text-xs font-semibold tracking-wide uppercase">
            No interactions yet
          </span>
        </div>
      ) : (
        timeLineData?.map((timeLineInfo, index) => (
          <div
            key={index}
            className="bg-white border border-zinc-200 rounded-xl px-5 py-4 shadow-sm hover:border-green-200 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3">
              <span
                className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-zinc-700 ${timeLineInfo.type == "Call" ? "bg-green-100" : timeLineInfo.type == "Video" ? "bg-cyan-100" : "bg-indigo-100"}`}
              >
                {timeLineInfo.icon}
              </span>

              <div className="min-w-0">
                <p className="leading-tight">
                  <span className="text-2xl font-semibold text-green-900">
                    {timeLineInfo.type}
                  </span>
                  <span className="text-xl text-slate-600 ml-2">
                    with {timeLineInfo.name}
                  </span>
                </p>
                <p className="text-lg text-slate-500 mt-1">
                  {formatDateTime(timeLineInfo?.dateTime)}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default TimeLineCard;
