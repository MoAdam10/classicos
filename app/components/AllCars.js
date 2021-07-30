import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {fetchAllCarsThunk}  from '../redux/cars'

export class AllCars extends React.Component {
   componentDidMount(){
      this.props.loadAllCars()
   }

   render(){
      const {cars} = this.props
   
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
                        <div key={car.id} className="single-car">
                           <Link to={`/cars/${car.id}`}>
                              <div className="car-image">
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