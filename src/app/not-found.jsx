import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">


        <div className="relative flex items-center justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 bg-green-300/40 rounded-full flex items-center justify-center animate-pulse">

            <svg
              viewBox="0 0 120 120"
              className="w-24 h-24 md:w-28 md:h-28 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            >
              {/* Eyes */}
              <circle cx="40" cy="45" r="5" fill="currentColor" />
              <circle cx="80" cy="45" r="5" fill="currentColor" />

              {/* Sad mouth */}
              <path d="M35 80 Q60 60 85 80" />
            </svg>
          </div>

          {/* floating ring */}
          <div className="absolute w-56 h-56 md:w-64 md:h-64 border-2 border-green-300 rounded-full animate-ping"></div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
            4<span className="text-green-400 px-1.5">0</span>4
          </h1>

          <h2 className="mt-2 text-lg md:text-xl font-semibold text-gray-700">
            Oops! Page not found
          </h2>

          <p className="mt-3 text-gray-500 text-sm md:text-base leading-relaxed">
            Sorry, the page you’re looking for doesn’t exist, has been removed
            or is temporarily unavailable.
          </p>

          <Link href={"/"}>
                <button className="px-5 py-2.5 mt-2.5 text-lg font-medium rounded-md bg-green-200 hover:bg-green-100 hover:text-green-600 border-2 border-green-200 hover:shadow hover:shadow-green-300 hover:border-green-300 cursor-pointer">
                  Back to Home
                </button>
              </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
