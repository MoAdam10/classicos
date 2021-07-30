import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import AllCars from './AllCars'
import anime from 'animejs'
import SingleCar from './SingleCar'
import EditCar from './EditCar'

const Routes = () => {
   const animation = anime({
      targets: '#home',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate',
      loop: true
    });
   return (
      <Router>
         <div>
            <nav>
               <div className="nav-bar">
                  <Link to="/" onLoad={() => animation} id="home">Home</Link>
                  <Link to="/cars">Collection</Link>
                  <Link to="/favorites">Favorites</Link>

               </div>
            </nav>
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/cars' component={AllCars}/>
            <Route exact path='/cars/:id' component={SingleCar}/>
            <Route exact path='/cars/:id/edit' component={EditCar}/>
         </Switch>
         </div>
      </Router>
   )
}

export default Routes