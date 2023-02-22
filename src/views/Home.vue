<template>
	<div class="home-page-wrapper">
		<h1>{{ name }} Welcome To the CodeFighter</h1>
		<div class="editor">
			<vueCodemirror v-model="code"/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'Home',
	computed: {
		...mapGetters(['getUserInfo']),
		name() {
			if(this.getUserInfo.name) {
				return (this.getUserInfo.name) +','
			}
			return;
		},
	},
	data() {
		return {
			code: '',
		}
	},
	methods: {
		
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
</style>
