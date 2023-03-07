import Link from "next/link";
import React from "react";

export const fetchRecipeAreas = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((a) => a.strArea);
};

const page = async () => {
  const areas = await fetchRecipeAreas();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {areas.map((a, index) => (
        <Link
          href={`/types/${a}`}
          key={index}
          className="shadow-gray-500 bg-gray-300 rounded text-2xl py-10 text-center font-bold hover:bg-blue-500 hover:text-white"
        >
          {a}
        </Link>
      ))}
    </div>
  );
};

export default page;
