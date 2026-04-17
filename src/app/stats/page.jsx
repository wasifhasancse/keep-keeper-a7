"use client";
import { DataContext } from "@/context/DataContextProvider";
import { useContext } from "react";
import { FaChartPie } from "react-icons/fa";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


const Stats = () => {
  const { timeLineData } = useContext(DataContext);
  const callCount = timeLineData.filter((item) => item.type == "Call").length;
  const textCount = timeLineData.filter((item) => item.type == "Text").length;
  const videoCount = timeLineData.filter((item) => item.type == "Video").length;
  const isEmpty = timeLineData.length === 0;
  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];

  return (
    <section className="bg-slate-100 min-h-screen py-8 md:py-12">
      <div className="max-w-11/12 mx-auto space-y-6">
        <h2 className="text-4xl text-center md:text-left md:text-5xl font-bold text-zinc-800">
          Friendship Analytics
        </h2>

        <div className="bg-white border border-zinc-200 rounded-lg p-6 shadow-sm">
          <p className="text-sm text-zinc-500 mb-4">By Interaction Type</p>
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <span className="text-6xl">
                <FaChartPie className="text-7xl text-green-300" />
              </span>
              <div>
                <p className="text-xl font-semibold text-zinc-700">
                  No interactions yet
                </p>
                <p className="text-sm text-zinc-400 mt-1 max-w-xs mx-auto">
                  Log a call, text, or video with a friend and your analytics
                  will appear here.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <ResponsiveContainer width="100%" height={340}>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="55%"
                    outerRadius="75%"
                    cornerRadius={8}
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={true}
                  />
                  <Tooltip formatter={(value, name) => [value, name]} />
                  <Legend
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{ paddingTop: "16px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
