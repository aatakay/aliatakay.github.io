<script>
onMounted(() => {
	const script = document.createElement('script');
	script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
	script.type = 'text/javascript';
	document.body.appendChild(script);
})
</script>

<template>
	<!-- <div class="mailchimp-container" id="mc_embed_shell">
		<div id="mc_embed_signup">
			<form action="https://aliatakay.us11.list-manage.com/subscribe/post?u=0954f1826d585ac45d4b057b7&amp;id=5a4d7e0890&amp;f_id=006494e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
				<div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
					<div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
					<div class="mc-field-group"><label for="mce-EMAIL">Adresse e-mail <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
					<div id="mce-responses" class="clear foot">
						<div class="response" id="mce-error-response" style="display: none;"></div>
						<div class="response" id="mce-success-response" style="display: none;"></div>
					</div>
					<div style="position: absolute; left: -5000px;" aria-hidden="true">
						/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
						<input type="text" name="b_0954f1826d585ac45d4b057b7_5a4d7e0890" tabindex="-1" value="">
					</div>
					<div class="optionalParent">
						<div class="clear foot">
							<input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
							<p style="margin: 0px auto;">
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div> -->
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
}

#submit-input:hover {
	background-color: #333;
	color: white;
}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>