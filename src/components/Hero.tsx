import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className='hero' style={{backgroundImage: "url(bg.png)"}}>
           <div>
            <h1 className="fade-in">Welcome to Rider</h1>
            <p>Your one-stop shop for the best Rider</p>
            <button>Shop Now</button>
            </div>        
        </section>
    </div>
  )
}

export default Hero
