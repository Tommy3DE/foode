import React from 'react'

const fetchRecipeDetails = async (id) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const response = await res.json();
    return response
  };

const page = async({params}) => {
    const details = await fetchRecipeDetails(params.id) //szczegóły potraw
    // console.log(details)
  return (
    <div>page</div>
  )
}

export default page