import Image from "next/image";

const FriendsCard = () => {
  return (
    <div className="shadow">
      <div className="text-center p-10 bg-white flex flex-col items-center justify-center space-y-2.5">
        <div className="w-75 h-75 rounded-full ">
          <Image
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_1v9BHUenboGM-5dGAdk-fgIrCBEnXsbCw&s`}
            height={150}
            width={150}
            alt="Profile Picture"
            className="rounded-full object-cover"
            loading="eager"
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
