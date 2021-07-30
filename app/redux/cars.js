import axios from "axios";


//types
const GOT_CARS = 'GOT_CARS'
const DELETE_CAR = 'DELETE_CAR'
const UPDATE_CAR = 'UPDATE_CAR'


//action creators
export const setCars = (cars) => {
	return {
		type: GOT_CARS,
		cars,
	};
};

export const _deleteCar = (car) => {
	return {
		type: DELETE_CAR,
		car,
	};
};

export const _updateCar = (car) => {
	return {
		type: UPDATE_CAR,
		car,
	};
};


//Thunk
export const fetchAllCarsThunk = () => {
   return async (dispatch) => {
      try {
         const {data: cars} = await axios.get('/api/cars')
         
         dispatch(setCars(cars))
      } catch (error) {
         console.log(error)
      }
   }
}

export const deleteCarThunk = (carId, history) => {
	return async (dispatch) => {
		const { data: deletedCar } = await axios.delete(`/api/cars/${carId}`);

		dispatch(_deleteCar(deletedCar));
		history.push('/cars');
	};
};

export const updateCarThunk = (car, history) => {
	return async (dispatch) => {
		const { data: updatedCar } = await axios.put(
			`/api/car/${car.id}`,
			car
		);
		dispatch(_updateCar(updatedCar));
		history.push('/cars');
	};
};

export default function carsReducer(state = [], action) {
   switch (action.type) {
      case GOT_CARS: 
         return action.cars;
      case UPDATE_CAR:
         return state.map((car) => {
            return car.id === action.car.id ? action.car : car;
            });
      case DELETE_CAR:
         return state.filter((car) => car.id !== action.car.id);
      default: 
         return state
   }
}