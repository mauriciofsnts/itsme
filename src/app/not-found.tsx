import Link from "next/link";

export default function Custom404() {
  return (
    <div className="max-w-screen md:max-w-7xl p-10 mt-10 mx-auto flex flex-col gap-3">
      <h1 className="font-bold text-4xl">
        Unfortunately, the page you are looking for does not exist.
      </h1>

      <p>
        In the meantime, feel free to navigate to another page on the sidebar,
        or return to the homepage.
      </p>

      <div className="mt-3">
        <Link href="/">
          <button
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 border-2 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2"
          >
            <a>Return to Homepage</a>
          </button>
        </Link>
      </div>
    </div>
  );
}
