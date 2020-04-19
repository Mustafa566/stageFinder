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
				<h2 class="text-center mt-5 mb-5 team">OUR TEAM</h2>
				<div class="col">
					<div class="card float-right team team1" style="width: 18rem;">
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
					<div class="card float-left team team2" style="width: 18rem;">
						<img src="@/assets/images/stefan.png" class="card-img-top teamImg2">
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
			<span class="text-muted">Copyright &copy; Stage Finder</span>
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