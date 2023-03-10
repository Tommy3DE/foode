import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecipeList = ({ recipes, type }) => {
  // console.log(recipes)
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {recipes.map((recipe, index) => {
        return (
          <div
            key={index}
            className="rounded overflow-hidden bg-slate-200 text-center flex flex-col justify-between"
          >
            <Image
              src={recipe.strMealThumb}
              width={500}
              height={500}
              alt={recipe.strMeal}
              className="sm:py-4 lg:py-0 m-auto"
            />
            <div className="">
              <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
              <Link
                href={`/types/${type}/${recipe.idMeal}`}
                className="text-white bg-blue-500 hover:bg-blue-600 rounded py-2 px-3 my-5 block"
              >
                Get Recipe Detail
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
