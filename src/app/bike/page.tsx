import Image from 'next/image'
import React from 'react'


const page = () => {

const bikesData =[
    { id: 1, name: 'BMW-NINE T', price: 1500000, description: 'Luxry Bike', image: '/bmw-ninet.png' },
    { id: 2, name: 'BMW', price: 800000, description: 'Luxry Bike', image: '/bmw.png' },
    { id: 3, name: 'DUKE', price: 110000, description: 'Luxry Bike', image: '/duke.png' },
    { id: 4, name: 'HARLEY DAVIDSON', price: 50000, description: 'Affordable and reliable', image: '/harleydavidson.png' },
    { id: 5, name: 'HERITAGE CLASSIC', price: 70000, description: 'Sporty and stylish', image: '/heritage.png' },
    { id: 6, name: 'KAWASAKI NINJA H2r', price: 60000, description: 'Sports bike', image: '/kawasaki.png' },
  ]

  return (
    <div>
      <div className="bikes">
        {bikesData.map((bikes) => (
          <div key={bikes.id} className="bikes-card">
             <Image src={bikes.image} alt={bikes.name} />
             <h3>{bikes.name}</h3>
             <p>{bikes.description}</p>
             <div className='price'>${bikes.price}</div>
             <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page