import RecipeList from '@/components/RecipeList'
import React from 'react'

const getRecipes = async (type)=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`)
    const response = res.json()
    return response
}

const Page = async({params}) => {
    const recipes = await getRecipes(params.type)
  return (
    <div className="bg-[url('../public/menubg.jpeg')] bg-contain h-full" >
    <RecipeList recipes={recipes.meals} type={params.type}/>
    </div>
  )
}

export default Page