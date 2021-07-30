import { combineReducers } from "redux";
import carsReducer from "./cars";
import singleCarReducer from "./singleCar";

const appReducer = combineReducers({
   cars: carsReducer,
   car: singleCarReducer
})

export default appReducer