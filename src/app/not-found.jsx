import Link from "next/link";
import { FiAlertCircle, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <section className="bg-slate-100 min-h-screen flex items-center py-8 sm:py-10">
      <div className="max-w-11/12 mx-auto">
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6 sm:p-8 md:p-10 text-center">
          <div className="mx-auto inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
            <FiAlertCircle className="text-2xl sm:text-3xl" />
          </div>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black text-zinc-800">
            404
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 max-w-lg mx-auto">
            Oops! The page you are looking for does not exist. It might have been moved or deleted. Please check the URL and try again.
          </p>

          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md border-2 border-green-500 bg-green-300 px-4 sm:px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-green-200 hover:text-green-700"
            >
              <FiArrowLeft />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
