import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/smurfActions';

const SmurfData = (props) => {
	console.log('these are props', props);
	useEffect(() => {
		props.fetchSmurf();
	}, []);

	return (
		<div>
			<h2>Smurf name:</h2>
			<h2>{props.name}</h2>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		name: state.name.name,
		isFetching: state.name.isFetching,
	};
};

export default connect(mapStateToProps, { fetchSmurf })(SmurfData);
