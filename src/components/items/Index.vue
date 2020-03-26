<template>
<div>
		<div class="open">
			<div class="layer"></div>
			<div class="layer"></div>
		</div>
		<section>
			<div class="bannerText font">
				<h2>zoek jij naar een stageplaats?</h2><br>
				<p>Wacht dan niet langer en maak een account aan om te solliciteren aan vacatures, en wie weet vindt jij je droom bpv plaats om je waar je stage kan lopen. Stage finder helpt jou daarbij, Meld je nu aan!</p>
				<a href="#">Lees meer</a>
			</div>
			<img src="bulb.jpg" class="bulb">
			<ul class="sci">
				<li><a href="#"><i class="fa fa-facebook"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter"></i></a></li>
				<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
				<li><a href="#"><i class="fa fa-instagram"></i></a></li>
			</ul>
			<div class="element1"></div>
			<div class="element2"></div>
		</section>
        <div class="container"></div>
    <footer id="sticky-footer" class="py-4 bg-dark text-white-50 font">
        <div class="container text-center">
        <small>Copyright &copy; Stagefinder</small>
        </div>
    </footer>
</div>
</template>

<style scope> 
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap');
body {
	margin: 0;
	padding: 0;
	min-height: 100vh;
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

section {
	position: absolute;
	width: 100%;
	height: 100%;
	background: #fff;
	display: grid;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.bannerText {
	position: absolute;
	top: 50%;
	left: 10%;
	transform: translateY(-50%);
	max-width: 700px;
}

.bannerText h2, .bannerText h3 {
	position: relative;
	margin: 0;
	padding: 0;
	display: inline-block;
	transform-origin: left;
	text-transform: uppercase;
	transform: scaleX(0);
	animation: revealTextReverse 1s ease-in-out forwards;
}

.bannerText h2 {
	font-size: 6em;
	animation-delay: 2s;
}

.bannerText h3 {
	font-size: 3em;
	animation-delay: 3s;
}

.bannerText h2:before, .bannerText h3:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	background:  rgb(255, 163, 25);
	width: 100%;
	height: 100%;
	transform-origin: right;
	animation: revealText 1s ease-in-out forwards;
	animation-delay: 3s;
}

.bannerText h3:before {
	animation-delay: 4s;
}

@keyframes revealText {
	0%
	{
		transform: scaleX(1);
	}
	100%
	{
		transform: scaleX(0);
	}
}

@keyframes revealTextReverse {
	0%
	{
		transform: scaleX(0);
	}
	100%
	{
		transform: scaleX(1);
	}
}

.bannerText p {
	opacity: 0;
	font-weight: 400;
	font-size: 1.2em;
	animation: fadeIn 1s linear forwards;
	animation-delay: 5s;
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

.bannerText a {
	opacity: 0;
	display: inline-block;
	margin: 20px 0 0;
	padding: 10px 20px;
	background: #000;
	color: #fff;
	font-weight: 700;
	text-decoration: none;
	font-size: 1.2em;
	letter-spacing: 1px;
	animation: fadeInBottom 0.5s linear forwards;
	animation-delay: 5.5s;
}

@keyframes fadeInBottom {
	0%
	{
		transform: translateY(50px);
		opacity: 0;
	}
	100%
	{
		transform: translateY(0);
		opacity: 1;
	}
}

.bulb {
	opacity: 0;
	position: absolute;
	right: 10%;
	top: 50%;
	transform: translateY(-50%);
	animation: fadeIn 1s linear forwards;
	animation-delay: 6s;
	z-index: 100;
}

.sci {
	position: absolute;
	bottom: 15px;
	right: 30px;
	display: flex;
	flex-direction: column;
}

.sci li {
	opacity: 0;
	list-style: none;
	padding: 10px 0;
	text-align: center;
	animation: fadeInBottom 0.5s linear forwards;
}

@keyframes fadeInRight {
	0%
	{
		transform: translateX(150px);
		opacity: 0;
	}
	100%
	{
		transform: translateX(0);
		opacity: 1;
	}
}

.element1 {
	opacity: 0;
	position: absolute;
	bottom: -150px;
	right: 40%;
	width: 250px;
	height: 250px;
	border: 40px solid  rgb(255, 163, 25);
	animation: rotate 40s linear infinite, fadeIn 1s linear forwards;
	animation-delay: 7s;
}

.element2 {
	opacity: 0;
	position: absolute;
	left: -10px;
	top: 40%;
	width: 50px;
	height: 50px;
	border: 2px solid rgb(255, 163, 25);
	animation: rotate 30s linear infinite, fadeIn 1s linear forwards;
	animation-delay: 7s;
}

@keyframes rotate {
	0%
	{
		transform: rotate(45deg);
	}
	100%
	{
		transform: rotate(405deg);
	}
}

#sticky-footer {
  flex-shrink: none;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}
</style>