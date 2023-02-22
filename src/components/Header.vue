<template>
	<header class="header-generic-wrapper">
		<div class="header-content">
			<router-link to="/" :class="['menu-button', { 'active' : routerName === 'Home'}]">Solving Problems</router-link>
			<router-link to="/personal-rating" :class="['menu-button', { active : routerName === 'PersonalRating'}]">Personal Progress</router-link>
			<router-link to="/global-rating" :class="['menu-button', { 'active' : routerName === ''}]">Rating</router-link>
			<router-link to="/about-us" :class="['menu-button', { 'active' : routerName === ''}]">About us</router-link>
		</div>
	</header>
</template>

<script>

export default {
	name: 'Header',
	computed: {
		routerName() {
			return this.$router.currentRoute.value.name;
		}
	}
}
</script>

<style>
.header-generic-wrapper
{
	display: flex;
	margin-bottom: 50px;
	position: sticky;
	top: 0;
	z-index: 1;
	background: #fffcfc;
}

.header-content
{
	display: flex;
	justify-content: center;	
	gap: 200px;
	flex-grow: 1;
	flex-wrap: wrap;
	padding: 30px;
	border-bottom: 1px solid rgba(81, 81, 81, 0.45);;
}

.menu-button
{
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	text-align: center;
	color: #656363;
	text-decoration: none;
}

.menu-button:hover
{
	text-decoration: underline;
	text-underline-offset: 5px;
}

.active
{
	text-decoration: underline;
	text-underline-offset: 5px;
}

@media screen and (max-width: 800px) 
{
	.header-content
	{
		gap: 15px;
	}
}

</style>
