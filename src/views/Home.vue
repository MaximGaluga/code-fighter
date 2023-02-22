<template>
	<div class="home-page-wrapper">
		<h1>{{ name }} Welcome To the CodeFighter</h1>
		<div class="tasks-wrapper" >
			<div v-for="task of tasks" :key="task.id" @click="activateTask(task)"
				:class="['card-tasks', { 'show' : currentTaskId == task.id}]">

				<div class="name-task">{{ task.name }}</div>
				<div class="description-task">{{ task.description }}</div> 
			</div>
		</div>
		<div style="height: 1000px;" v-show="!tasks"></div>
		<div class="content-for-solving" v-show="tasks">
			<div style="display: flex; justify-content: center;">
				<div style="border-bottom: 2px solid gray; width: 50%; margin-bottom: 20px;"></div>
			</div>
			<div class="button-post-code-wrapper">
				<div class="button-post-code" @click="post">Check solution</div>
			</div>
			<div class="editor">
				<vueCodemirror v-model="code" :value="code "/>
			</div>
		</div>
		
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import PopupSystem from '../scripts/PopupSystem'
export default {
	name: 'Home',
	computed: {
		...mapGetters(['getUserInfo', 'getTasks', 'getToken']),
		...mapGetters(['getActivePopupProps']),

		name() {
			if(this.getUserInfo.name) {
				return (this.getUserInfo.name) +','
			}
			return;
		},
		tasks() {
			return this.getTasks;
		},
		post() {
			const dto = this.code;
			this.$http.post(`/api/v1/problems/${ this.currentTaskId }`, {code: dto}, { headers: {'Authorization' : this.getToken, 'Content-Type' : 'application/json'} })
				.then(response => {
					PopupSystem.invokePopup('resultSolveProblem', response.data)
				})
				.catch(error => {
					console.warn(error);
				})
		}
	},
	data() {
		return {
			code: null,
			currentTaskId: Number,
		}
	},
	methods: {
		activateTask(task) {
			this.currentTaskId = task.id;
			this.code = task.template;
		},

	},

}
</script>

<style>
.editor
{
	margin: 40px;
	padding: 10px;
	text-align: left;
	height: 1000px;
	background-color: #282c34;
	border-radius: 10px;
	overflow-y: scroll;
}

.editor::-webkit-scrollbar {
  width: 5px;
}

.editor::-webkit-scrollbar-track {
  background: #596886c5;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb 
{
	background: #0e152343;
	border-radius: 2px;
}

.home-page-wrapper h1 
{
	margin-top: 50px;
	margin-bottom: 50px;
}

.tasks-wrapper
{
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 50px;
	margin-left: 140px;
	margin-bottom: 40px;
}

.card-tasks
{
	display: flex;
	flex-direction: column;
	gap: 15px;
	padding: 20px 20px 47px;
	max-width: 570px;
	background: #F6F6F6;
	border-radius: 12px;
	cursor: pointer;
}

.card-tasks.show
{
	background: #d1dced;
}

.card-tasks:hover
{
	background: #d1dced;
	transition: 0.2s;
}

.name-task
{
	color: #363434;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
}

.description-task
{
	text-align: left;
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	color: #5E5E5E;
}

.description-task:focus
{
	text-decoration: none;
}

.button-post-code-wrapper
{
	display: flex;
	justify-content: center;
}

.button-post-code
{
	padding: 20px 10px;
	border-radius: 8px;
	color: #5E5E5E;
	cursor: pointer;
	border: 2px solid #88b4f3;
}

.button-post-code:hover
{
	color: aliceblue;
	background: #88b4f3;
}

@media screen and (max-width: 800px) 
{
	.tasks-wrapper
	{
		display: flex;
		flex-wrap: wrap;
		margin-left: 0;
		margin: 10px 10px 40px 10px;
	}
}
</style>
