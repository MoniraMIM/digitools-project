import React from 'react'



const NewCart = ({ carts, setCarts }) => {

  const handleRemove = (id) => {
    setCarts((prev) => prev.filter(item => item.id !== id))
  }

  const total = carts.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-5xl mx-auto p-10 border rounded-xl">

      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {carts.length === 0 ? (
        <><img className="ml-55" src="https://cdn.dribbble.com/userupload/24411904/file/original-de8c08b5917a550780b7509fadad5ed0.jpg?format=webp&resize=400x300&vertical=center"></img>
        <p>No items in cart</p></>
      ) : (
        <div className="space-y-4">

          {carts.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >

              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10"
                />

                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-red-500 text-sm"
              >
                Remove
              </button>

            </div>
          ))}

          <div className="flex justify-between mt-6 font-semibold">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <button className="w-full mt-4 py-3 rounded-full text-white bg-linear-to-r from-purple-500 to-pink-500">
            Proceed To Checkout
          </button>

        </div>
      )}
    </div>
  )
}


    

export default NewCart

