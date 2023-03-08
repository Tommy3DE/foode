import Image from "next/image";
import React from "react";

const fetchRandomRecipe = async () => {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  const random_meal = respData.meals[0];
  console.log(random_meal);
  return random_meal;
};

const page = async () => {
  const randomRecipe = await fetchRandomRecipe();

  const ingredients = Object.keys(randomRecipe)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => randomRecipe[ingKey])
    .filter(Boolean);
  //   console.log(id)

  return (
    <div className="flex flex-col mt-5 items-center justify-center">
      <Image
        src={randomRecipe.strMealThumb}
        width={500}
        height={500}
        alt={randomRecipe.strMeal}
        className="rounded-lg"
      />
      <p className="mt-3">Todays Random recipe is:</p>
      <h1 className="text-3xl mb-3 font-bold">{randomRecipe.strMeal}</h1>
      <h2 className="text-xl">
        {randomRecipe.strArea} <span className="lowercase">{randomRecipe.strCategory}</span>
      </h2>
      <div className="mt-3 w-1/2">
        <p className="text-3xl mb-3 text-center font-bold">Ingredients:</p>
        <div className=" grid grid-cols-3">
          {ingredients.map((ingredient, index) => (
            <span
              className="bg-slate-400 text-white hover:bg-blue-400 px-2 py-1 rounded mr-2 mb-2"
              key={index}
            >
              {ingredient}
            </span>
          ))}
        </div>
      </div>
      <p className="w-1/2 mt-3">{randomRecipe.strInstructions}</p>
    </div>
  );
};

export default page;
