import axios from "axios";

const GOT_SINGLE_CAR = 'GOT_SINGLE_CAR'

//Action Creator
export const setSingleCar = (car) => {
	return {
		type: GOT_SINGLE_CAR,
		car,
	};
};

//Thunk
export const fetchSingleCar = (id) => {
	return async (dispatch) => {
		const { data: singlecar } = await axios.get(`/api/cars/${id}`);
      console.log(singlecar)
		dispatch(setSingleCar(singlecar));
	};
};

export default function singleCarReducer(state = {}, action) {
	switch (action.type) {
		case GOT_SINGLE_CAR:
			return action.car;
		default:
			return state;
	}
}
