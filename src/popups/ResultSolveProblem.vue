<template>
	<div class="code-results-wrapper">
		<div class="result-status">
			<div class="result-text">{{ modelValue.name }}</div>
			<div :class="['result-text-status', { 'green' : modelValue.status === 'SUCCESS', 'red' : modelValue.status === 'FAIL' }]">{{ modelValue.status }}</div>
			<div class="error" v-if="modelValue.status === 'FAIL'">{{ modelValue.stderr }}</div>
			<div class="time" v-if="modelValue.status !== 'FAIL'">{{ modelValue.time }}ms</div>
		</div>
		<div class="button-wrapper">
			<div class="button-ok" @click="closePopup">Ok</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
	name: 'ResultSolveProblem',
	computed: {
		...mapGetters(['getActivePopupProps']),
	},
	props: {
		modelValue: Object
	},
	methods: {
		...mapMutations(['deactivateActivePopup']),
		closePopup() {
			this.deactivateActivePopup();
		},
	},
}
</script>

<style>
.code-results-wrapper
{
	min-width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #FFFFFF;
	box-shadow: 5px 4px 9px rgba(41, 41, 41, 0.03);
	border-radius: 10px;
	padding: 40px;
	gap: 30px;
}

.result-status
{
	display: flex;
	flex-direction: column;
	gap: 5px;
}

.button-wrapper
{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.button-ok 
{
	color: #444343;
	padding: 15px 15px;
	border: 2px solid #88b4f3;
	border-radius: 8px;
	cursor: pointer;
}

.button-ok:hover
{
	color: aliceblue;
	background-color: #88b4f3;
}

.error
{
	color: red;
}

.green
{
	color: green;
	font-weight: bold;
}

.red
{
	color: red;
	font-weight: bold;
}

@media screen and (max-width: 800px) 
{
	.code-results-wrapper
	{
		max-width: 280px;
	}
	
}
</style>