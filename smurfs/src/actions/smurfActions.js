import axios from 'axios';

export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA';

export const fetchSmurf = () => {
	return (dispatch) => {
		dispatch({ type: 'FETCH_SMURF_START' });
		axios
			.get('http://localhost:3333/smurfs')
			.then((res) => {
				console.log('success', res.data);
				dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: res.data });
			})
			.catch((err) => {
				dispatch({
					type: 'FETCH_SMURF_FAILURE',
					payload: 'Error',
				});
			});
	};
};

export const addSmurf = (newSmurf) => (dispatch) => {
	dispatch({ type: 'POST_SMURF_START' });
	axios
		.post('http://localhost:3333/smurfs', newSmurf)
		.then((res) => {
			dispatch({ type: 'POST_SMURF_SUCCESS', payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: 'POST_SMURF_FAILURE', payload: err });
		});
};
