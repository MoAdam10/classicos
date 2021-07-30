import React from 'react';
import { connect } from 'react-redux';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { deleteCarThunk } from '../redux/cars';
import { fetchSingleCar} from '../redux/singleCar';

export class SingleCar extends React.Component {
	componentDidMount() {
		this.props.loadSingleCar(this.props.match.params.id);
	}
	render() {
		const { car } = this.props;
      console.log(car)
		return (
			<div>
				<div id="single-car-container">
					<div key={car.id} className="single-car">
						<div className="car-image">
							<img src={car.imageUrl} />
						</div>
						<div className="car-details">
							<h3>Name: {car.name}</h3>
							<h4>Make: {car.make}</h4>
							<h4>Model: {car.model}</h4>
							<h4>Description: {car.description}</h4>
						</div>
						<div className="edit">
							<Link to={`/cars/${car.id}/edit`}>
								<button type="button">Edit</button>
							</Link>
						</div>
						<div>
							<button
								type="button"
								className="delete"
								onClick={() =>
									this.props.deleteCar(this.props.match.params.id)
								}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		car: state.car,
	};
};
const mapDispatch = (dispatch, { history }) => {
	return {
		loadSingleCar: (id) => dispatch(fetchSingleCar(id)),
		deleteCar: (id) => dispatch(deleteCarThunk(id, history)),
	};
};

export default connect(mapState, mapDispatch)(SingleCar);