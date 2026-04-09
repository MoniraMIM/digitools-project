import React, { useEffect, useState } from 'react'
import ModelCard from "./ModelCard"


const Models = ({ aipromise, carts, setCarts }) => {
  const [models, setModels] = useState([])

  useEffect(() => {
    aipromise.then(data => setModels(data))
  }, [aipromise])

  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 space-y-3 max-w-7xl mx-auto">
        {models.map(model => (
          <ModelCard
            key={model.id} 
            model={model} 
            carts={carts} 
            setCarts={setCarts} 
          />
        ))}
      </div>
    </div>
  )
}

export default Models

