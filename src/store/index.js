import { createStore } from 'vuex'
import { markRaw } from 'vue'

const vuexInitData = {
	state: {
		userInfo: {
			name: null,
			token: null,
		},
		activePopupType: null,
		activePopupTypeProps: null,
		tasks: null,
	},
	mutations: {
		setActivePopup(state, activePopup) {
			state.activePopupTypeProps = activePopup.props;
			state.activePopupType = markRaw(activePopup);
		},
		deactivateActivePopup(state) {
			state.activePopupType = null;
			state.activePopupTypeProps = null;
		},
		setToken(state, token) {
			state.userInfo.token = 'Bearer ' + token;
		},
		setName(state, userName) {
			state.userInfo.name = userName;
		},
		setTasks(state, tasks) {
			state.tasks = tasks;
		}
	},
	getters: {
		getActivePopup: (state) => {
			return state.activePopupType;
		},
		getActivePopupProps: (state) => {
			return state.activePopupTypeProps;
		},
		getUserInfo: (state) => {
			return state.userInfo;
		},
		getToken: (state) => {
			return state.userInfo.token;
		},
		getTasks: (state) => {
			return state.tasks;
		}
	},
};

const store = createStore(vuexInitData);

export default store;