<template>
<div>
	<div class="open">
		<div class="layer"></div>
		<div class="layer"></div>
	</div>
		<div class="conatainer">
			<div class="row">
				<div class="col mt-5">
					<h1 class="text-center size">Are you searching for an internship ?</h1>
					<h5 class="text-center mt-5 h5">
						Do not wait any longer and create an account to apply for jobs, 
						and maybe you'll find your dream internship 
						place where you can work. Stage Finder helps you there by, apply now!
					</h5>
				</div>
				<div class="col">
					<img class="isometric" src="@/assets/images/isometricHome.png">
				</div>
			</div>
			<div class="row mt-5 isobg">
				<h2 class="text-center mt-5 mb-5">OUR TEAM</h2>
				<div class="col">
					<div class="card float-right" style="width: 18rem;">
						<img src="@/assets/images/mustafa.png" class="card-img-top teamImg">
						<div class="card-body">
							<h5 class="card-title text-center">Mustafa Bolat</h5>
							<p class="card-text text-center mt-4">Full stack developer</p>
							<div class="row mt-4">
								<a class="mx-auto d-block" href="https://www.instagram.com/musti_566/">
									<img src="@/assets/icons/instagram.png">
								</a>
								<a class="mx-auto d-block" href="https://www.linkedin.com/in/mustafa-bolat-21417b125/">
									<img src="@/assets/icons/linkedin.png">
								</a>
								<a class="mx-auto d-block" href="mailto:mustimmb566@gmail.com">
									<img src="@/assets/icons/email.png">
								</a>
							</div>
						</div>
					</div>
				</div>	
				<div class="col">
					<div class="card float-left" style="width: 18rem;">
						<img src="" class="card-img-top teamImg">
						<div class="card-body">
							<h5 class="card-title text-center">Stefan Mokhamsing</h5>
							<p class="card-text text-center mt-4">Frontend developer</p>
							<div class="row mt-4">
								<a class="mx-auto d-block" href="">
									<img src="@/assets/icons/instagram.png">
								</a>
								<a class="mx-auto d-block" href="https://www.linkedin.com/in/stefan-mokhamsing-b9808a1a1/?originalSubdomain=nl">
									<img src="@/assets/icons/linkedin.png">
								</a>
								<a class="mx-auto d-block" href="mailto:Stef_911@outlook.com">
									<img src="@/assets/icons/email.png">
								</a>
							</div>
						</div>
					</div>
				</div>			
			</div>
		</div>
	<footer class="footer mt-5 py-3 sticky-footer">
		<div class="container text-center">
			<span class="text-muted">Copyright &copy; Stagefinder</span>
		</div>
	</footer>
</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Homepage'
		}
	},
	head: {
		title: function () {
			return {
				inner: this.title
			}
		}
	}
}
</script>

<style scope> 
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap');

@keyframes open {
	0%
	{
		transform: scaleY(1);
	}
	100%
	{
		transform: scaleY(0);
	}
}

@keyframes fadeIn {
	0%
	{
		opacity: 0;
	}
	100%
	{
		opacity: 1;
	}
}

@keyframes slidein {
	from {
		margin-left: 200%;
		width: 100%;
	}

	to {
		margin-left: 0%;
		width: 100%;
	}
}

.isometric {
	width: 800px;
	height: 500px;
	animation-delay: 1s;
	animation-duration: 1s;
    animation-name: slidein;
}

body {
	margin: 0;
	padding: 0;
	min-height: 100vh;
	overflow-x: hidden;
}

.font {
	font-family: 'PT Sans Narrow', sans-serif;
}

.open {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	pointer-events: none;
	z-index: 10000;
}

.open .layer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transform-origin: top;
	animation: open 1s ease-in-out forwards;
}

.open .layer:nth-child(1) {
	background: rgb(255, 163, 25);
	z-index: 2;
}

.open .layer:nth-child(2) {
	background:  rgb(255, 163, 25);
	animation-delay: 1s;
	z-index: 1;
}

.h5 {
	opacity: 0;
	font-weight: 400;
	font-size: 1.2em;
	animation: fadeIn 1s linear forwards;
	animation-delay: 2s;
}

.size {
	font-size: 35px;
}

.teamImg {
	width: 200px;
	margin: auto;
	margin-top: 10px;
}

/* .isobg {
	background-image: url('~@/assets/images/brainstorming_.png');
	background-repeat: no-repeat;
	background-position: 15% 80%;
} */

.sticky-footer {
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>