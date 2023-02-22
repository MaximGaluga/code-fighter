<template>
	<div class="autorisation-wrapper">
		<div class="card">Choose your action</div>
		<div class="buttons-wrapper">
			<div class="log-in" @click="logIn">Log in</div>
			<div class="sign-up" @click="signUp">Sign up</div>
		</div>
	</div>
</template>

<script>
import PopupSystem from '../scripts/PopupSystem';
export default {
	name: 'test',
	methods: {
		logIn() {

		},
		signUp() {
			PopupSystem.invokePopup('signUp');
		},
	},
}
</script>

<style>
.autorisation-wrapper
{
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #FFFFFF;
	box-shadow: 5px 4px 9px rgba(41, 41, 41, 0.03);
	border-radius: 10px;
	padding: 40px;
	gap: 30px;
}

.buttons-wrapper
{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 30px;
}



.sign-up
{
	cursor: pointer;

}

.log-in
{
	cursor: pointer;
}
</style>