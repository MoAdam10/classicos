import React from 'react'
import anime from 'animejs'

const Home = () => {
   const animation = anime({
      targets: "#home-image",
      translateX: [1200, 0],
      duration: 3000,
      direction: 'alternate',
       scale: {
         value: 2,
         duration: 1600,
         delay: 1000,
         easing: 'easeInOutSine'
       },
      delay: 250,
      loop: true
      
   })
   return (
      <div className="home">
         <p>Hello and Welcome to Classicos, your number 1 website for classic car collections</p>
         <div id="home-image" onLoadedData={() => animation}>
            <img src="https://cdn.pixabay.com/photo/2018/05/08/20/21/old-car-3383820_1280.png"/>
            
         </div>
      </div>
   )
}

export default Home