import React from 'react'

export default function loading() {
  const propSquares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div className="bg-[url('../public/bg3.jpeg')] bg-cover h-screen">
      <h1 className="text-5xl mt-3 text-center py-3 font-bold text-white ">Pick country of origin</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        {propSquares.map((a, index) => (
          <div
            key={index}
            className="shadow-gray-500 bg-gray-300 rounded text-2xl py-10 text-center font-bold hover:bg-blue-500 hover:text-white"
          />
        ))}
      </div>
    </div>
  );
}
