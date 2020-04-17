import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const SmurfData = (props) => {
	useEffect(() => {}, []);

	return (
		<div>
			<h2>Smurf name:</h2>
			<h2>{props.name}</h2>
		</div>
	);
};

export default SmurfData;
