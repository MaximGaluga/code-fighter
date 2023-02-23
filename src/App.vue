<template>
	<div id="app">
		<div class="content-wrapper">
			<Header />

			<router-view />

			<Footer />
		</div>
		<PopupHost />
	</div>
</template>

<script>
import PopupHost from './components/PopupHost.vue';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'App',
	components: {
		Header,
		Footer,
		PopupHost,
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*
{
	padding: 0;
	margin: 0;
	font-family: Montserrat,Tahoma,Arial,sans-serif;
}

html
{
	height: 100%;
	width: 100%;
}

body
{
	min-height: 100%;
	display: flex;
	flex-direction: column;
}

#app
{
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
}

.content-wrapper
{
	flex-grow: 1;
	display: flex;
	flex-direction: column;
}
</style>
