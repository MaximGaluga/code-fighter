<template>
	<footer class="footer-generic-wrapper">
		<div class="about">
			<span>Maxim Galuga</span>
			<div class="contacts">
				<div class="link">
					<a href="https://t.me/maximmagic" target="_blank">Telegram: @maximmagic</a>
				</div>
				<div class="link">
					<a href="https://www.instagram.com/maxim__magic/" target="_blank">Instagram: @maxim__magic</a>
				</div>
			</div>
		</div>
		<div class="about">
			<span>Lipsky Rostislav</span>
			<div class="contacts">
				<div class="link">
					<a href="https://t.me/clowdeep" target="_blank">Telegram: @clowdeep</a>
				</div>
				<div class="link">
					<a href="https://www.instagram.com/almaztexxtil/" target="_blank">Instagram: @almaztexxtil</a>
				</div>
			</div>

		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style>
footer
{
	display: grid;
	grid-template-columns: 1fr 1fr;
	background: #403c38;
	color: #FFFFFF;
	padding: 50px;
}

.about
{
	display: flex;
	flex-direction: column;
}

.contacts
{
	display: flex;
	flex-direction: column;
	margin-top: 20px;
	gap: 5px;
}

a
{
	text-decoration: none;
	color: #FFFFFF;
}

.link
{
	display: flex;
	justify-content: center;
}
</style>
