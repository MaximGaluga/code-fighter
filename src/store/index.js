import { createStore } from 'vuex'
import { markRaw } from 'vue'

const vuexInitData = {
	state: {
		userInfo: {
			name: null,
			token: null,
		},
		activePopupType: {
			component: null,
		},
	},
	mutations: {
		setActivePopup(state, activePopup) {
			state.activePopupType.component = markRaw(activePopup);
		},
		setToken(state, token) {
			state.userInfo.token = 'Bearer ' + token;
		},
		setName(state, userName) {
			state.userInfo.name = userName;
		}
	},
	getters: {
		getActivePopup: (state) => {
			return state.activePopupType.component;
		},
		getUserInfo: (state) => {
			return state.userInfo;
		},
		getToken: (state) => {
			return state.userInfo.token;
		}
	},
};

const store = createStore(vuexInitData);

export default store;