"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname().split("/");
  const randomArea = pathname[1];
  const currentArea = pathname[2];
  const recipeId = pathname[3];
  console.log(randomArea);
  return (
    <div className="py-2 flex items-center justify-between px-2">
      <div className="flex justify-between w-auto">
        <Link href="/">
          <h1 className="text-blue-700 font-bold text-5xl">Cuisine App </h1>
        </Link>
        <button className="ml-4  bg-transparent border-2 px-0.5 hidden md:block">
          <a href="https://main--startling-bienenstitch-220eca.netlify.app">
            WRÓĆ DO PORTFOLIO
          </a>
        </button>
      </div>
      <div className="flex justify-between">
        <Link
          href={randomArea ? "/" : "/random"}
          className="bg-blue-500 text-white p-4 md:text-xs rounded font-bold mr-3 text-xl"
        >
          <h1>{randomArea ? "Back home " : "Random recipe"}</h1>
        </Link>
        {pathname && currentArea && (
          <Link
            className="bg-blue-500 text-white p-4 md:text-xs text-xl rounded font-bold"
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
