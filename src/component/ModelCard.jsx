

import React, { useState } from 'react'

const ModelCard = ({ model, carts, setCarts })=> {
    const[isBuy, setIsBuy] = useState(false)
    const handleBuy = () => {
        setIsBuy(true)
        setCarts((prev) => {
    if (!Array.isArray(prev)) return [model];
    return [...prev, model];
  });
};
const getBadgeColor = (badge) => {
  switch (badge) {
    case "Best Seller":
      return "bg-blue-600 text-white";
    case "Popular":
      return "bg-yellow-400 text-black";
    case "New":
      return "bg-green-500 text-white";
    default:
      return "bg-gray-400 text-white";
  }
};
        
  
  return (
    <div className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-xl transition relative">

  <div className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${getBadgeColor(model.badge)}`}>
    {model.badge}
  </div>

  <div className="flex items-center gap-3 mb-4">
    <img className="h-10 w-10 object-contain" src={model.image} alt={model.title}/>
  </div>

  <h2 className="text-lg font-semibold">{model.title}</h2>

  <p className="text-gray-500 text-sm mt-1">{model.description}</p>

  <div className="text-2xl font-bold mt-3">
    ${model.price}
    <span className="text-sm text-gray-500">/mo</span>
  </div>

  <ul className="mt-4 space-y-2 text-sm text-gray-600">
    {model.features?.map((f, i) => (
      <li key={i}>✓ {f}</li>
    ))}
  </ul>

  <button
    onClick={handleBuy}
    className="w-full mt-6 py-2 rounded-lg text-white bg-linear-to-r from-purple-500 to-indigo-600 hover:opacity-90"
  >
    {isBuy ? "Purchased" : "Buy Now"}
  </button>

</div>


  )}




export default ModelCard