<script>
import Subscribe from './Subscribe.vue'
</script>

<template>
	<aside>
		<!-- Socials -->
		<div id="socials-container">
			<Subscribe />
			<h3>ou suivre sur les sociaux</h3>
			<div id="socials-icons-container">
				<a href="https://www.instagram.com/citronbleu_kolaj/" target="_blank">
					<img style="height: 1em" src="/icons/instagram.png" alt="Instagram" />
				</a>
				
				<a href="https://fr.linkedin.com/in/ali-atakay" target="_blank">
					<img style="height: 1em" src="/icons/linkedin.png" alt="LinkedIn"/>
				</a>
			</div>
		</div>
		<!-- Copyright Text -->
		<div id="copyright-container"><strong>© Ali Atakay</strong><br>Mentions légales</div>
	</aside>
</template>

<style scoped>
aside {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 1em;
	height: 90%;
	max-height: 95vh;
}

#copyright-container {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.75em;
  color: #333;
	font-weight: unset;
}

#socials-container {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}

#socials-icons-container {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 1em;
}

#socials-container > a {
	margin: 0 0.25em;
}

#socials-container > a > img {
	font-size: 0.5em;
}
</style>