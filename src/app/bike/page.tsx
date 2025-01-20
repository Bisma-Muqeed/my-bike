import Image from 'next/image'
import React from 'react'


const page = () => {

const watchData =[
    { id: 1, name: 'BMW-NINE T', price: 1500000, description: 'Luxry Bike', image: '/bmw-ninet.png' },
    { id: 2, name: 'BMW', price: 800000, description: 'Luxry Bike', image: '/bmw.png' },
    { id: 3, name: 'DUKE', price: 110000, description: 'Luxry Bike', image: '/duke.png' },
    { id: 4, name: 'HARLEY DAVIDSON', price: 50000, description: 'Affordable and reliable', image: '/harleydavidson.png' },
    { id: 5, name: 'HERITAGE CLASSIC', price: 70000, description: 'Sporty and stylish', image: '/heritage.png' },
    { id: 6, name: 'KAWASAKI NINJA H2r', price: 60000, description: 'Sports bike', image: '/kawasaki.png' },
  ]

  return (
    <div>
      <div className="watches">
        {watchData.map((watch) => (
          <div key={watch.id} className="watch-card">
             <Image src={watch.image} alt={watch.name} />
             <h3>{watch.name}</h3>
             <p>{watch.description}</p>
             <div className='price'>${watch.price}</div>
             <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page