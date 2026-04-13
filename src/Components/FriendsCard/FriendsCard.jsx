import Image from "next/image";

const FriendsCard = () => {
  return (
    <div className="shadow">
      <div className="text-center p-10 bg-white flex flex-col items-center justify-center space-y-2.5">
        <div>
          <Image
            className="rounded-full w-lg"
            src={`https://images.unsplash.com/photo-1484399172022-72a90b12e3c1`}
            alt="img"
            width={100}
            height={100}
          ></Image>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black">Wasif Hasan</h2>
          <p className="text-zinc-400 py-1">21% more than last month</p>
        </div>
        <span className="px-5 py-1.5 bg-green-100 text-green-700 font-medium uppercase rounded-full">
          month
        </span>
        <span className="px-5 py-1.5 bg-green-100 text-green-700 font-medium uppercase rounded-full">
          month
        </span>
      </div>
    </div>
  );
};

export default FriendsCard;
