import Image from "next/image";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import path from "node:path";
import {
  FiArchive,
  FiClock,
  FiMail,
  FiMessageSquare,
  FiPhoneCall,
  FiTrash2,
  FiVideo,
} from "react-icons/fi";

const formatDate = (isoDate) => {
  const parsedDate = new Date(isoDate);

  if (Number.isNaN(parsedDate.getTime())) {
    return isoDate;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsedDate);
};

const FriendDetails = async ({ params }) => {
  const { friendsid } = await params;
  const filePath = path.join(process.cwd(), "public", "Data", "friends.json");
  const friendsData = JSON.parse(await readFile(filePath, "utf-8"));
  const friendInfo = friendsData.find(
    (friend) => friend.id === Number(friendsid),
  );

  if (!friendInfo) {
    notFound();
  }

  const {
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = friendInfo;

  return (
    <section className="bg-slate-100 py-8 md:py-12 lg:py-16">
      <div className="max-w-11/12 mx-auto grid gap-5 md:grid-cols-[280px_1fr] lg:grid-cols-[310px_1fr] xl:grid-cols-[340px_1fr] md:items-start">
        <aside className="space-y-4">
          <div className="bg-white border border-zinc-200 rounded-lg shadow-sm p-6 text-center">
            <div className="relative mx-auto size-24 rounded-full overflow-hidden border-4 border-zinc-100">
              <Image
                src={picture}
                alt={name}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>

            <h1 className="text-2xl font-bold text-zinc-800 mt-4">{name}</h1>

            <span
              className={`px-8 py-1.5 font-medium capitalize rounded-full ${status == "almost due" ? "bg-yellow-100 text-yellow-700" : status == "overdue" ? "bg-red-100 text-red-700" : "bg-sky-100 text-sky-700"}`}
            >
              {status}
            </span>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold uppercase rounded-full bg-green-100 text-green-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-zinc-500 italic text-sm leading-relaxed">
              {bio}
            </p>

            <p className="mt-3 inline-flex items-center gap-2 text-sm text-zinc-500">
              <FiMail className="text-base" />
              {email}
            </p>
          </div>

          <button className="w-full rounded-md border border-zinc-200 bg-white py-3 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors">
            <span className="inline-flex items-center gap-2">
              <FiClock />
              Snooze 2 Weeks
            </span>
          </button>

          <button className="w-full rounded-md border border-zinc-200 bg-white py-3 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors">
            <span className="inline-flex items-center gap-2">
              <FiArchive />
              Archive
            </span>
          </button>

          <button className="w-full rounded-md border border-red-200 bg-white py-3 text-red-500 font-medium hover:bg-red-50 transition-colors">
            <span className="inline-flex items-center gap-2">
              <FiTrash2 />
              Delete
            </span>
          </button>
        </aside>

        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6 text-center">
              <p className="text-3xl lg:text-4xl font-bold text-zinc-700">
                {days_since_contact}
              </p>
              <p className="text-zinc-500 mt-1">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6 text-center">
              <p className="text-3xl lg:text-4xl font-bold text-zinc-700">
                {goal}
              </p>
              <p className="text-zinc-500 mt-1">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6 text-center">
              <p className="text-3xl lg:text-4xl font-bold text-zinc-700 leading-tight">
                {formatDate(next_due_date)}
              </p>
              <p className="text-zinc-500 mt-1">Next Due</p>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-medium text-green-800">
                Relationship Goal
              </p>
              <button className="px-4 py-1.5 rounded-md border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm">
                Edit
              </button>
            </div>
            <p className="text-zinc-600 mt-2 text-lg">
              Connect every{" "}
              <span className="text-zinc-900 font-semibold">{goal} days</span>
            </p>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6">
            <p className="text-2xl font-medium text-green-800">
              Quick Check-In
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              <button className="rounded-md border border-zinc-300 bg-zinc-50 py-5 text-zinc-700 hover:border-green-300 hover:bg-green-50 transition-colors">
                <span className="flex flex-col items-center justify-center gap-2">
                  <FiPhoneCall className="text-xl" />
                  <span>Call</span>
                </span>
              </button>
              <button className="rounded-md border border-zinc-300 bg-zinc-50 py-5 text-zinc-700 hover:border-green-300 hover:bg-green-50 transition-colors">
                <span className="flex flex-col items-center justify-center gap-2">
                  <FiMessageSquare className="text-xl" />
                  <span>Text</span>
                </span>
              </button>
              <button className="rounded-md border border-zinc-300 bg-zinc-50 py-5 text-zinc-700 hover:border-green-300 hover:bg-green-50 transition-colors">
                <span className="flex flex-col items-center justify-center gap-2">
                  <FiVideo className="text-xl" />
                  <span>Video</span>
                </span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-zinc-200 shadow-sm p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-3">
              <p className="text-2xl font-medium text-green-800">
                Recent Interactions
              </p>
              <button className="px-4 py-1.5 rounded-md border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-sm">
                Full History
              </button>
            </div>

            <div className="space-y-3">
              {["Text", "Meetup", "Video", "Text"].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="border-t border-zinc-100 pt-3 flex items-center justify-between text-zinc-600"
                >
                  <div>
                    <p className="font-medium text-zinc-700">{item}</p>
                    <p className="text-sm text-zinc-500">
                      Asked for career advice
                    </p>
                  </div>
                  <p className="text-sm">Jan 28, 2026</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetails;
