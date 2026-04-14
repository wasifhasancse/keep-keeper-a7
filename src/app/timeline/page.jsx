import TimeLineCard from "@/Components/TimeLineCard/TimeLineCard";


const TimeLine = () => {
  return (
    <section className="bg-slate-100 min-h-screen py-8 md:py-12">
      <div className="max-w-11/12 mx-auto space-y-6">
        <h2 className="text-5xl font-bold text-zinc-800">Timeline</h2>

        <div className="bg-white border border-zinc-200 rounded-lg p-4 md:p-5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            <label className="form-control w-full xl:col-span-2">
              <div className="label pb-1">
                <span className="label-text font-medium text-zinc-600">
                  Search
                </span>
              </div>
              <input
                type="text"
                placeholder="Search by friend or interaction type"
                className="input input-bordered w-full bg-zinc-50 border-zinc-200 focus:outline-none"
              />
            </label>

            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-medium text-zinc-600">
                  Filter Type
                </span>
              </div>
              <select className="select select-bordered w-full bg-zinc-50 border-zinc-200">
                <option>All</option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
              </select>
            </label>

            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text font-medium text-zinc-600">
                  Sort By Date
                </span>
              </div>
              <select className="select select-bordered w-full bg-zinc-50 border-zinc-200">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </label>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button className="px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 text-zinc-700 font-medium hover:border-green-300 hover:bg-green-50 transition-colors">
              All
            </button>
            <button className="px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 text-zinc-700 font-medium hover:border-green-300 hover:bg-green-50 transition-colors">
              Call
            </button>
            <button className="px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 text-zinc-700 font-medium hover:border-green-300 hover:bg-green-50 transition-colors">
              Text
            </button>
            <button className="px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 text-zinc-700 font-medium hover:border-green-300 hover:bg-green-50 transition-colors">
              Video
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* client component */}
          <TimeLineCard/>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
