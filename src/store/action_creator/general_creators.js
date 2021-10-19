import {
	INDEX_PAGE_LOAD_DATA_DONE,
	INDEX_PAGE_LOAD_DATA_FAILURE,
	INDEX_PAGE_LOAD_DATA_LOAD,
} from '../actions/general';
import Api from '../../Api/Api';

export const index_load_data_load = () => ({ type: INDEX_PAGE_LOAD_DATA_LOAD });
export const index_load_data_done = data => ({ type: INDEX_PAGE_LOAD_DATA_DONE, payload: data });
export const index_load_data_fail = error => ({
	type: INDEX_PAGE_LOAD_DATA_FAILURE,
	payload: error,
});
export const index_load_data_start = () => async dispatch => {
	dispatch(index_load_data_load());
	try {
		const response_data = await Promise.all([
			{ clients: await Api.getAllClients().then(r => r.data) },
			{ ages: await Api.getAgesGroupList().then(r => r.data) },
			{ trainers: await Api.getCouchList().then(r => r.data) },
			{ abonements: await Api.getAbonimentList().then(r => r.data) },
			{ groups: await Api.getGroupList().then(r => r.data) },
			{ lessons: await Api.getGeneralPageData().then(r => r.data) },
		]);

		dispatch(
			index_load_data_done(response_data.reduce((acc, item) => (acc = { ...acc, ...item }), {}))
		);
	} catch (e) {
		dispatch(index_load_data_fail(e?.response?.data));
	}
};
