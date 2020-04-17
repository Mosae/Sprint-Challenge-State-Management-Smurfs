import axios from 'axios';

export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA';

export const fetchSmurf = () => {
	return (dispatch) => {
		dispatch({ type: 'FETCH_SMURF_START' });
		axios
			.get('http://localhost:3333')
			.then((res) => {
				console.log(res);
				dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: res });
			})
			.catch((err) => {
				dispatch({
					type: 'FETCH_SMURF_FAILURE',
					payload: 'Error',
				});
			});
	};
};
