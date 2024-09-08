<script lang="ts" setup>
const props = defineProps(['language'])

const dict = computed(() => {
	return {
		en: {
			home: 'Home',
			about: 'About',
			contact: 'Contact'
		},
		fr: {
			home: 'Accueil',
			about: 'À propos',
			contact: 'Contact'
		}
	}
})
</script>

<template>
	<nav>
		<ul>
			<li
				v-for="(value, key) in dict[props.language as unknown as 'en' | 'fr']"
			></li>
		</ul>
	</nav>
</template>