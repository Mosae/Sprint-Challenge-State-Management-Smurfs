import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/smurfActions';

const SmurfData = (props) => {
	const initSmurf = props.fetchSmurf;
	console.log('these are props', props);
	useEffect(() => {
		initSmurf();
	}, [initSmurf]);

	return (
		<div className="smurfData">
			<h2>Smurf:</h2>
			<h3>
				{props.smurf.map((smurf) => (
					<div className="smurf" key={smurf.id}>
						<p>Name: {smurf.name}</p>
						<p>Age: {smurf.age}</p>
						<p>Height: {smurf.height}</p>
					</div>
				))}
			</h3>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		smurf: state.smurf,
		error: state.error,
	};
};

export default connect(mapStateToProps, { fetchSmurf })(SmurfData);
