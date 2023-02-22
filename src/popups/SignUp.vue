<template>
	<div class="sign-up-wrapper">
		<input id="fullName" type="text" placeholder="Full Name..."/>
		<input id="login" type="text" placeholder="Login..."/>
		<input id="password" type="password" placeholder="Password..."/>
		<div class="button-confirm" @click="post">Confirm</div>
	</div>
</template>

<script>
import PopupSystem from '../scripts/PopupSystem';
import { mapMutations, mapGetters, mapState } from 'vuex';
export default {
	name: 'test',
	computed: {
		...mapState(['activePopupType']),
		...mapGetters(['getToken']),
	},
	methods: {
		...mapMutations(['setToken', 'setName']),
		logIn() {
			PopupSystem.invokePopup('logIn');
		},
		post() {
			const fullName = document.getElementById('fullName').value;
			const logIn = document.getElementById('login').value;
			const password = document.getElementById('password').value;

			const dto = {
				id: logIn,
				login: logIn,
				fullName: fullName,
			}
			this.$http.post('/api/v1/auth/register', dto, {params: {password: password}})
				.then(response => {
					this.setToken(response.data.token);
					this.setName(fullName);
					this.activePopupType.component = null;
				})
				.catch(error => {
					console.warn(error);
				});
		}
	},
}
</script>

<style>
.sign-up-wrapper
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

.button-confirm
{
	cursor: pointer;
}
</style>