import {
	INDEX_PAGE_LOAD_DATA_DONE,
	INDEX_PAGE_LOAD_DATA_FAILURE,
	INDEX_PAGE_LOAD_DATA_LOAD,
} from '../actions/general';

const initialState = {
	clients: null,
	ages: null,
	trainers: null,
	abonements: null,
	groups: null,
	lessons: null,
	loading: false,
	errors: null,
};

export const general = (state = initialState, action) => {
	switch (action.type) {
		case INDEX_PAGE_LOAD_DATA_LOAD:
			return {
				...state,
				loading: true,
			};
		case INDEX_PAGE_LOAD_DATA_DONE:
			return {
				...state,
				...action.payload,
				loading: false,
				errors: null,
			};
		case INDEX_PAGE_LOAD_DATA_FAILURE:
			return {
				...state,
				errors: action.payload,
			};
		default:
			return state;
	}
};
