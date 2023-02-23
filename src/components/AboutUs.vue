<template>
	<h1>Студенты ФИТУ</h1>
	<div class="about-us-wrapper">
		<div class="maxim-info">
			<img src="../assets/maxim.jpg" class="photo">
			<span>
				<br><br><br><br><br><br>
				<b> Maxim Galuga.</b> Fronted-developer. 2 курс.<br><br>
				Учится на кафедре ИИТ. Занимался разработкой сайта на Vue js 3<br><br>
			</span> 
		</div>
		<div class="rostislav-info">
			<span>
				<br><br><br><br><br><br>
				<b> Lipsky  Rostislav.</b> Backend-developer. 2 курс.<br><br>
				Учится на кафедре ИИТ. Занимался разработкой backend-а для сайта на Kotlin<br><br>
			</span> 
			<img src="../assets/rostislav.png" class="photo">
		</div>
	</div>
</template>

<script>
export default {
	name: 'AboutUs',
}

</script>

<style>
.about-us-wrapper
{
	display: flex;
	flex-direction: column;
	margin: 50px 100px;
	gap: 20px;
}

.photo 
{
	
	max-width: 300px;
	max-height: 300px;
}

.maxim-info
{
	display: flex;
	flex-direction: row;
	gap: 50px;
}

.rostislav-info
{
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 50px;
}
</style>