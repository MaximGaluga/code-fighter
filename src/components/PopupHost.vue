<template>
	<div class="popup-host" @wheel.prevent v-show="getActivePopup">
		<component :is="getActivePopup"></component>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import PopupSystem from '../scripts/PopupSystem'
import Autorisation from '../popups/Autorisation.vue'
import SignUp from '../popups/SignUp.vue'

export default {
	name: 'PopupHost',
	computed: {
		...mapGetters(['getActivePopup']),
	},
	mounted() {
		PopupSystem.init(this);

		PopupSystem.registerPopup('autorisation', Autorisation);
		PopupSystem.registerPopup('signUp', SignUp);

		// PopupSystem.invokePopup('autorisation');
	}
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