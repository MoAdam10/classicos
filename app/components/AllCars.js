import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchAllCarsThunk}  from '../redux/cars'
import aos from 'aos'
import anime from 'animejs'

export class AllCars extends React.Component {
   componentDidMount(){
      this.props.loadAllCars()
   }

   render(){
      const {cars} = this.props
      const animate = anime({
         targets: '.car-image',
         width: '100%', 
         scale: 1,
         rotate: '2turn',
         easing: 'easeInOutQuad',
         direction: 'alternate',
         loop: false

         
       })
   
      return (
         <div>
            <div className="all-cars-container">
               <div className="add-car">
                  {/* <Link to="/cars/create">
                   <button type="button">Add A Car</button>

                  </Link> */}

               </div>
               <div className="car-container">
                  {cars.map(car => {
                     return (
                        <div key={car.id} className="single-car" data-aos="zoom-in" >
                           <Link to={`/cars/${car.id}`}>
                              <div className="car-image" onLoad={() => animate}>
                                 <img src={car.imageUrl}/>
                              </div>
                              <div className="car-details">
                                 <h3>Name: {car.name}</h3>
                                 <h4>Make: {car.make}</h4>
                                 <h4>Model: {car.model}</h4>
                                 <h4>Description: {car.description}</h4>
                              </div>
                           </Link>
                        </div>
                     )
                  })}
               </div>

            </div>
         </div>
      )
   }
}

const mapState = ({cars}) => {
   return {
      cars
   }
}

const mapDispatch = (dispatch) => {
   return {
		loadAllCars: () => dispatch(fetchAllCarsThunk()),
	};
}


export default connect(mapState, mapDispatch)(AllCars)