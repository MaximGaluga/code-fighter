<template>
	<h1 class="h1-title">Global Rating:</h1>
	<div class="table-wrapper">
		<div class="head-table">
			<div class="text-head">Name</div>
			<div class="text-head">Template</div>
			<div class="text-head">Description</div>
			<div class="text-head cancel">Time</div>
		</div>
		<div class="table-data" v-for="data in tableData" :key="data.id">
			<div class="text-data">{{ data.author }}</div>
			<div class="text-data">{{ data.problem.name }}</div>
			<div class="text-data align-text">{{ data.problem.description }}</div>
			<div class="text-data">{{ data.time }}</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'GlobalRating',
	computed: {
		...mapGetters(['getToken']),
	},
	data() {
		return {
			tableData: [],
		}
	},
	created() {
		this.$http.get('/api/v1/problems/top', {
				headers: 
				{
					'Authorization' : this.getToken,
				}
		})
			.then(response => {
				this.tableData = response.data;
				console.log(this.tableData);
			})
			.catch(error => {
				console.warn(error);
			})
	}
}
</script>

<style>
.h1-title
{
	margin-top: 100px;
	margin-bottom: 200px;
}

.table-wrapper
{
	display: flex;
	flex-direction: column;
	margin-bottom: 150px;
}

.head-table
{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
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

.align-text
{
	text-align: left;
}

.table-data
{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
}

.text-data
{
	font-family: Montserrat,Tahoma,Arial,sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	display: flex;
    justify-content: center;
	align-items: center;
	color: #383838;
	border-right: 1px solid #383838;
	border-bottom: 1px solid #383838;
	padding-top: 10px;
	padding-bottom: 10px;
}

@media screen and (max-width: 800px) 
{
	.text-head
	{
		font-size: 10px;
	}
	.text-data
	{
		font-size: 10px;
	}
}
</style>