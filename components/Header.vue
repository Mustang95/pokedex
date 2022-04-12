<template>
	<header class="header-pokedex">
		<div class="big-circle"></div>
		<div class="tiny-circles">
			<div style="display: flex">
				<div class="tiny-circles-red"></div>
				<div class="tiny-circles-yellow"></div>
				<div class="tiny-circles-green"></div>
			</div>
			<div class="border-header"></div>
		</div>
	</header>
</template>
<script>
export default {}
</script>
<style>
.header-pokedex {
	display: flex;

	height: 10vh;
	background-color: #fb1b1b;
	border: 1px solid;
	border-top: 0;
	border-left: 0;
	border-right: 0;

	border-image: linear-gradient(to right, #000 46%, transparent 40%) 100% 1;
}
.border-header {
	width: 100%;
	height: 50%;
	border-top: 1px solid black;
	border-left: 10px solid black;
	border-radius: 50% 0 0 0;

	margin-top: 5vh;
}
.big-circle {
	margin: 11px 18px 11px 32px;

	width: 60px;
	height: 45px;

	border-radius: 50%;
	border: 2px solid white;
	/* border-image-source: linear-gradient(to bottom right, black, white); */
	background-color: #196a9f;
	background-image: radial-gradient(white 5%, #196a9f 65%);
}
.tiny-circles {
	width: 100%;
	height: 100%;
	display: flex;
	padding: 10px;
}
</style>
