<script>
onMounted(() => {
	const script = document.createElement('script');
	script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
	script.type = 'text/javascript';
	document.body.appendChild(script);
})
</script>

<template>
	<section>
		<div>
			<h3 class="merriweather">s'abonner par email</h3>
			<form action="https://aliatakay.us11.list-manage.com/subscribe/post?u=0954f1826d585ac45d4b057b7&amp;id=5a4d7e0890&amp;f_id=006494e0f0" method="post" target="_blank">
				<div style="position: absolute; left: -5000px;" aria-hidden="true">
					/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
					<input type="text" name="b_0954f1826d585ac45d4b057b7_5a4d7e0890" tabindex="-1" value="">
				</div>
				<input id="email-input" type="email" name="EMAIL" required="" value="" placeholder="Email" />
				<input id="submit-input" type="submit" name="subscribe" value="Subscribe">
				<div id="mce-responses" class="clear foot">
					<div class="response" id="mce-error-response" style="display: none;"></div>
					<div class="response" id="mce-success-response" style="display: none;"></div>
				</div>
			</form>
		</div>
	</section>
</template>

<style>
@import url('//cdn-images.mailchimp.com/embedcode/classic-061523.css');

form {
	display: flex;
	flex-direction: column;
	margin: 0;
}

#email-input {
	margin: 0.5em 0;
	padding: 0.5em;
	border-radius: 0.25em;
	border: 1px solid #333;
	width: 100%;
	font-family: 'Courier New', Courier, monospace !important;
}

#submit-input {
	margin: 0.5em 0;
	padding: 0.5em;
	border-radius: 0.25em;
	border: 1px solid #333;
	width: 100% !important;
	display: block;
	/* font-family: 'Courier New', Courier, monospace !important; */
	background-color: white;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: .25cap;
	background-color: white;
	color: #333;
}

#submit-input:hover {
	background-color: #333;
	color: white;
}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>