<template>
	<h1 class="h1-title">Personal Rating:</h1>
	<div class="table-wrapper">
		<div class="head-table">
			<div class="text-head">Name</div>
			<div class="text-head">Descr</div>
			<div class="text-head">Checker</div>
			<div class="text-head">Code</div>
			<div class="text-head cancel">Time</div>
		</div>
		<div class="table-data" v-for="a in 3">
			<div class="text-data">lore</div>
			<div class="text-data">asdasd</div>
			<div class="text-data">asdasd</div>
			<div class="text-data">asdasd</div>
			<div class="text-data">asdasd</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'PersonalRating',
	computed: {
		...mapGetters(['getToken'])
	},
	data() {

	},
	created() {
		this.$http.get('/api/v1/problems/{id}/top')
	}
}
</script>

<style>
.h1-title
{
	margin-bottom: 60px;
}

.table-wrapper
{
	display: flex;
	flex-direction: column;
}

.head-table
{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.text-head
{
	font-family: Montserrat,Tahoma,Arial,sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	color: #383838;
	border-right: 1px solid #383838;
	border-bottom: 1px solid #383838;
	padding-bottom: 20px;
}

.cancel
{
	border-right: 1px solid transparent;
}

.table-data
{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

.text-data
{
	font-family: Montserrat,Tahoma,Arial,sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	color: #383838;
	border-right: 1px solid #383838;
	border-bottom: 1px solid #383838;
	padding-top: 10px;
	padding-bottom: 10px;
}
</style>