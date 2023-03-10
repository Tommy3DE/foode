import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="flex flex-col mt-5 items-center justify-center">
      <div>
        <Image
          src={details.strMealThumb}
          width={500}
          height={500}
          alt={details.strMeal}
          className='rounded-lg'
        />
      </div>
      <div className="flex flex-col justify-center items-center w-4/5">
        <h1 className="text-3xl my-3 font-bold">Recipe Name: <span className="text-3xl"> {details.strMeal}</span></h1>
        <div className="mt-3 w-2/3 items-center">
            <p className="text-3xl text-center my-4 ">Ingredients:</p>
            {ingredients.map((ingredient, index)=>(
                <span className="bg-slate-400 text-white hover:bg-blue-400 px-2 py-1 rounded inline-block mr-2 mb-2" key={index}>
                    {ingredient}
                </span>
            ))}
        </div>
        <p className="mt-3 w-4/5 text-lg">{details.strInstructions}</p>
        {details.strYoutube && 
            <div className="mt-5 text-lg">
                <p>Video Link: {' '}
                <a target='_blank' className="text-blue-600 font-bold" href={details.strYoutube}>{details.strMeal}</a>
                </p>
            </div>
        }
      </div>
    </div>
  );
};



export default page;
