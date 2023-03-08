import React from "react";
import Image from "next/image";
import { fetchRecipeAreas } from "../../page";

const fetchRecipeDetails = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const response = await res.json();
  return response;
};

const page = async ({ params }) => {
  const recipeDetails = await fetchRecipeDetails(params.id); //szczegóły potraw
  const details = recipeDetails && recipeDetails.meals ? recipeDetails?.meals[0] : {};
//   console.log(details); szczegóły dań

  const ingredients = Object.keys(details).filter(
    (key)=> key.indexOf('Ingredient') > 0
  ).map((ingKey)=>(
    details[ingKey]
  )).filter(Boolean)
//   console.log(ingredients); wartosci skladników w których cos było
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <Image
          src={details.strMealThumb}
          width={500}
          height={500}
          alt={details.strMeal}
          className='rounded-r-lg'
        />
      </div>
      <div className="p-5">
        <h1 className="font-bold text-xl">Recipe Name: <span className="text-3xl"> {details.strMeal}</span></h1>
        <div className="mt-3 ">
            <p className="text-xl my-3">Ingredients:</p>
            {ingredients.map((ingredient, index)=>(
                <span className="bg-slate-400 text-white hover:bg-blue-400 px-2 py-1 rounded inline-block mr-2 mb-2" key={index}>
                    {ingredient}
                </span>
            ))}
        </div>
        <p className="mt-3">{details.strInstructions}</p>
        {details.strYoutube && 
            <div className="mt-3 text-slate-500">
                <p>Video Link:</p>
                <a target='_blank' href={details.strYoutube}>{details.strMeal}</a>
            </div>
        }
      </div>
    </div>
  );
};



export default page;
