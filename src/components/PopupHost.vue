<template>
	<div class="popup-host" @wheel.prevent v-show="activePopupType">
		<component :is="activePopupType" v-model="activePopupTypeProps"></component>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import PopupSystem from '../scripts/PopupSystem'
import Autorisation from '../popups/Autorisation.vue'
import SignUp from '../popups/SignUp.vue'
import ResultSolveProblem from '../popups/ResultSolveProblem.vue'
import LogIn from '../popups/LogIn.vue';

export default {
	name: 'PopupHost',
	computed: {
		...mapState(['activePopupType', 'activePopupTypeProps']),
	},
	mounted() {
		PopupSystem.init(this);

		PopupSystem.registerPopup('autorisation', Autorisation);
		PopupSystem.registerPopup('signUp', SignUp);
		PopupSystem.registerPopup('resultSolveProblem', ResultSolveProblem);
		PopupSystem.registerPopup('logIn', LogIn);


		PopupSystem.invokePopup('autorisation');
	},
}

</script>

<style>
.popup-host
{
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 5px 4px 9px rgba(41, 41, 41, 0.03);
	background: rgba(81, 81, 81, 0.45);
	width: 100%;
	height: 100%;
	z-index: 1;
}
</style>