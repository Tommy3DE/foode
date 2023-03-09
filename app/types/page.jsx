import Link from "next/link";
import React from "react";

const fetchRecipeAreas = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((a) => a.strArea);
};

const page = async () => {
  const areas = await fetchRecipeAreas();
  console.log(areas.length);
  return (
    <div className="bg-[url('../public/bg3.jpeg')] bg-cover h-screen">
      <h1 className="text-5xl mt-3 text-center py-3 font-bold text-white ">
        Pick country of origin
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {areas.map((a, index) => (
          <Link
            href={`/types/${a}`}
            key={index}
            className="shadow-gray-500 bg-gray-200 rounded text-2xl py-10 text-center font-bold hover:bg-blue-500 hover:text-white"
          >
            {a}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
