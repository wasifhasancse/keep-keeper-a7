import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({ friendInfo }) => {
  const { name, picture, status, days_since_contact, tags } = friendInfo;
  return (
    <Link href={`/friendsdetails/${friendInfo.id  }`}>
      <div className="bg-white w-full p-6 md:p-8 lg:p-10 rounded-lg md:rounded-xl shadow border-2 border-zinc-100 hover:border-green-300 flex flex-col items-center justify-center gap-4 md:gap-5 hover:shadow-green-300 transition-all duration-300">
      <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 rounded-full overflow-hidden">
        <Image
          src={picture}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 767px) 96px, (max-width: 1023px) 112px, 120px"
        ></Image>
      </div>

      <div className="space-y-2 text-center w-full">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-black wrap-break-word">{name}</h2>
          <p className="text-zinc-400 text-sm md:text-base py-1">{days_since_contact}d ago</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-2.5">
          <div className="flex items-center justify-center flex-wrap gap-2 w-full">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 md:px-5 py-1.5 text-xs md:text-sm bg-green-100 text-green-700 font-medium uppercase rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className={`px-5 md:px-8 py-1.5 text-xs md:text-sm font-medium capitalize rounded-full ${status == "almost due" ? "bg-yellow-200 text-yellow-700" : status == "overdue" ? "bg-red-200 text-red-700" : "bg-sky-200 text-sky-700"}`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default FriendsCard;
