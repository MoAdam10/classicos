import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateCarThunk, _setCar } from '../redux/cars';
import { fetchSingleCar } from '../redux/singleCar';

class EditCar extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			make: '',
			model: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		this.props.fetchCar(this.props.match.params.id);
	}
	componentDidUpdate(preState) {
		if (preState.car.id !== this.props.car.id) {
			this.setState({
				name: this.props.car.name || '',
				make: this.props.car.make || '',
				model: this.props.car.model || '',
			});
		}
	}



	handleSubmit(event) {
		event.preventDefault();
		this.props.updateCar({ ...this.props.car, ...this.state });
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	render() {
		const { name, make, model } = this.state;

		return (
			<div>
				<form id="car-form" onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name: </label>
					<input name="name" value={name} onChange={this.handleChange} />

					<label htmlFor="make">make: </label>
					<input
						name="make"
						value={make}
						onChange={this.handleChange}
					/>

					<label htmlFor="model">model: </label>
					<input
						name="model"
						value={model}
						onChange={this.handleChange}
					/>

					<button type="submit">Submit</button>
					<Link to="/cars">Cancel</Link>
				</form>
			</div>
		);
	}
}

const mapState = ({ car }) => {
	return {
		car,
	};
};

const mapDispatch = (dispatch, { history }) => {
	return {
		updateCar: (id) => dispatch(updateCarThunk(id, history)),
		fetchCar: (id) => dispatch(fetchSingleCar(id)),
		
	};
};

export default connect(mapState, mapDispatch)(EditCar);
