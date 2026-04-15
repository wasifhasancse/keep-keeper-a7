import FilterData from "@/Components/TimeLine/FilterData";
import SortedData from "@/Components/TimeLine/SortedData";
import TimeLineCard from "@/Components/TimeLine/TimeLineCard";
import { FiSearch } from "react-icons/fi";

const TimeLine = () => {
  return (
    <section className="bg-slate-100 min-h-screen py-8 md:py-12">
      <div className="max-w-11/12 mx-auto space-y-6">
        <h2 className="text-5xl font-bold text-zinc-800">Timeline</h2>

        <div className="bg-white border border-zinc-200 rounded-xl p-5 md:p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400 mb-4">
            Filter &amp; Search
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_180px_180px] gap-4 items-end">
            {/* Search */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-600">
                Search
              </label>
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search by friend or interaction type"
                  className="input input-bordered w-full bg-zinc-50 border-zinc-200 pl-9 focus:outline-none focus:border-green-400"
                />
              </div>
            </div>

            {/* Filter Type */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-600">
                Filter Type
              </label>
              {/* client component */}
              <FilterData/>
            </div>

            {/* Sort By Date */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-zinc-600">
                Sort By Date
              </label>
              {/* client component */}
              <SortedData/>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* client component */}
          <TimeLineCard />
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
