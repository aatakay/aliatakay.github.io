<script>
import Subscribe from './Subscribe.vue'
</script>

<template>
	<nav>
		<section>
			<a class="logo" href="/">
				<span class="newsreader">ali</span><span class="merriweather">atakay</span>
			</a>
			<!-- <span class="merriweather">ali atakay</span> -->
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
	background-color: black;
	transition: all ease-in-out .25s;
}

.logo:hover span:first-child {
	margin-right: 0em;
}
/* get logo first child */
.logo > span:first-child {
	background-color: black;
	color: white;
	transition: all ease-in-out .25s;
	transition: all ease-in-out 0.25s;
	display: inline-block;
	transform: rotate(25deg);
	padding: 0.25em;
	margin-right: -1em;
	z-index: 1;
}
/* get logo second child */
.logo > span:last-child {
	background-color: white;
	color: black;
	transition: all ease-in-out .25s;
	display: inline-block;
	transform: rotate(-5deg);
	padding: 0.5em;
	z-index: 9;
}

.logo:hover {
	background-color: white;
}

.logo:hover span:first-child {
	background-color: white;
	color: black;
}

.logo:hover span:last-child {
	color: white;
	background-color: black;
}

nav {
	/* position: fixed; */
	display: flex;
	flex-direction: column;
	/* height: 100vh; */
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
		width: 100%;
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