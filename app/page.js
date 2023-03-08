import Link from "next/link";

export default function Home() {
  return (
    <main className="p-0 m-0">
      <div className="bg-[url('../public/bg4.jpeg')] bg-cover h-screen w-full">
        <div className="w-4/5 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="my-8 text-5xl text-white">Explore food from the world</h1>
          <Link
            href="/types"
            className="shadow-gray-50 bg-gray-500 rounded text-2xl py-2 px-4 cursor-pointer hover:bg-blue-500 hover:text-white "
          >
            List of cuisines
          </Link>
        </div>
      </div>
    </main>
  );
}
