<script>
import Subscribe from './Subscribe.vue'
</script>

<template>
	<nav>
		<section>
			<!-- <span class="logo">
				<span class="newsreader">ali</span><span class="merriweather">atakay</span>
			</span> -->
			<span class="merriweather">ali atakay</span>
			<ContentNavigation v-slot="{ navigation }">
				<ul>
					<li
						v-for="link of navigation"
						:key="link._path"
					>
						<NuxtLink :to="link._path" v-text="link.title"/>
					</li>
				</ul>
			</ContentNavigation>
		</section>
	</nav>
</template>

<style>
nav {
	padding-right: 3em;
}

.logo {
	/* get first child */
	font-size: 2rem;
	background-color: firebrick;
}

.logo:hover span:first-child {
	margin-right: 0em;
}
/* get logo first child */
.logo > span:first-child {
	transition: all ease-in-out 0.25s;
	color: #FFA500;
	display: inline-block;
	transform: rotate(25deg);
	background-color: bisque;
	padding: 0.25em;
	margin-right: -1em;
	z-index: 1;
}
/* get logo second child */
.logo > span:last-child {
	display: inline-block;
	transform: rotate(-5deg);
	background-color: teal;
	padding: 0.5em;
	color: aliceblue;
	z-index: 9;
}

nav {
	/* position: fixed; */
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-between;
}

/* get nav second last child */
nav:last-child {
	background-color: white;
}

nav > section {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em;
	justify-content: space-between;
}

nav > section > span {
	font-weight: bold;
	font-size: 2rem;
	text-align: center;
}

ul {
	list-style: none;
	display: flex;
	flex-direction: column;
	border-left: 1em solid black;
	margin-left: 2em;
}

ul > li {
	margin-top: 1em;
}

ul > li > a {
	text-decoration: none;
	color: black;
	font-size: 1.5em;
}

@media (max-width: 1200px) {
	nav {
		height: unset;
		padding-right: unset;
		/* position: relative; */
	}
	
	nav > section {
		justify-content: center;
	}

	ul {
		flex-direction: row;
		justify-content: space-between;
		border-left: unset;
		margin-left: unset;
	}

	ul > li::before {
		content: '/ '
	}

	ul > li::after {
		content: ' /'
	}

	/* nav > section:last-child {
		background: rgba(255, 255, 255, 0.75);
		backdrop-filter: blur(5px);
		flex-direction: row;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 25%;
		margin-left: calc(50% - 12.5%);
		border-radius: 15px;
	} */
}

@media (max-width: 900px) {
	ul {
		flex-direction: column;
		text-align: center;
		margin-left: 0;
		padding-left: 0;
	}
}
</style>