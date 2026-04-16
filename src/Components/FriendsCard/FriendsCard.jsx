import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({ friendInfo }) => {
  const { name, picture, status, days_since_contact, tags } = friendInfo;
  return (
    <Link href={`/friendsdetails/${friendInfo.id  }`}>
      <div className="bg-white p-10 rounded-lg shadow border-2 border-zinc-100 hover:border-green-300 flex flex-col items-center justify-center gap-5 hover:shadow-green-300">
      <div className="relative w-30 h-30 rounded-full overflow-hidden">
        <Image
          src={picture}
          alt={name}
          fill
          className="object-cover"
          sizes="120px"
        ></Image>
      </div>

      <div className="space-y-2.5 text-center">
        <div>
          <h2 className="text-2xl font-bold text-black">{name}</h2>
          <p className="text-zinc-400 py-1">{days_since_contact}d ago</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2.5">
          <div className="flex items-center justify-center gap-2.5">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-5 py-1.5 bg-green-100 text-green-700 font-medium uppercase rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <span
            className={`px-8 py-1.5 font-medium capitalize rounded-full ${status == "almost due" ? "bg-yellow-200 text-yellow-700" : status == "overdue" ? "bg-red-200 text-red-700" : "bg-sky-200 text-sky-700"}`}
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
