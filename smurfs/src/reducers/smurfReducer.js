import { FETCH_SMURF_START } from '../actions/smurfActions';

const initialState = {
	smurf: [],
	isFetching: false,
	error: '',
};
const smurfReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_SMURF_START':
			return {
				...state,
				isFetching: true,
			};
		case 'FETCH_SMURF_SUCCESS':
			return {
				...state,
				isFetching: false,
				smurf: action.payload,
				error: '',
			};
		case 'FETCH_SMURF_FAILURE':
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};

		case 'POST_SMURF_START':
			return {
				...state,
				isFetching: true,
			};
		case 'POST_SMURF_SUCCESS':
			return {
				...state,
				isFetching: false,
				smurf: action.payload,
			};
		case 'POST_SMURF_FAILURE':
			return {
				...state,
				isFetching: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
export default smurfReducer;
