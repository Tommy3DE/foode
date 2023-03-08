"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname().split("/");
  const randomArea = pathname[1]
  const currentArea = pathname[2];
  const recipeId = pathname[3];
  console.log(randomArea);
  return (
    <div className="py-5 bg-slate-300 flex items-center justify-between px-2 border-b-4 ">
      <Link href="/">
        <h1 className="text-blue-700 font-bold text-5xl">Foode</h1>
      </Link>
      <div className="flex justify-between">
        <Link href={randomArea ? "/" : "/random"} className="bg-blue-500 text-white p-4 text-xs rounded font-bold mr-3">
          <h1>{randomArea ? 'Back home ':'Random recipe'}</h1>
        </Link>
        {pathname && currentArea && (
          <Link
            className="bg-blue-500 text-white p-4 text-xs rounded font-bold"
            href={recipeId ? `/types/${currentArea}` : `/types`}
          >
            Back to {recipeId ? `${currentArea} recipes` : "countries browser"}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
