<template>
	<iframe
		src="https://us11.list-manage.com/contact-form?u=0954f1826d585ac45d4b057b7&form_id=1f58ffa0927bf85b15232a6da8172060"
		width="100%"
		height="1200px"
		frameborder="0"
		marginheight="0"
		marginwidth="0">
		<div class="loader" />
	</iframe>
</template>

<style>
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
	height: 50px;
  aspect-ratio: 1;
  display: grid;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  --c:#0000 calc(100%/3),#046D8B 0 calc(2*100%/3),#0000 0;
  --c1:linear-gradient(90deg,var(--c));
  --c2:linear-gradient( 0deg,var(--c));
  background: var(--c1),var(--c2),var(--c1),var(--c2);
  background-size: 300% 4px,4px 300%;
  background-repeat: no-repeat;
  animation: l11 1s infinite linear;
}
.loader:after {
  margin: 10px;
  transform: scaleX(-1);
  animation-delay: -.25s;
}
@keyframes l11 {
  0%   {background-position: 50%  0,100% 100%,0    100%,0 0}
  25%  {background-position: 0    0,100% 50% ,0    100%,0 0}
  50%  {background-position: 0    0,100% 0   ,50%  100%,0 0}
  75%  {background-position: 0    0,100% 0   ,100% 100%,0 50%}
 75.01%{background-position: 100% 0,100% 0   ,100% 100%,0 50%}
  100% {background-position: 50%  0,100% 0   ,100% 100%,0 100%}
}
</style>