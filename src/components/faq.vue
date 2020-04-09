<template>
<div class="container box">
   <h2 class="heading">FAQs</h2>
   <div class="faqs">
      <details>
         <summary class="text-bold">What is Lorem ipsum?</summary>
         <p class="text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>
      <details>
         <summary>What is Lorem ipsum?</summary>
         <p class="text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>
      <details>
         <summary>What is Lorem ipsum?</summary>
         <p class="text mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </details>
   </div>
</div>
</template>

<script>
export default {
	data() {
		return {
         title: 'Faq'
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
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

.box {
   margin: 0px auto;
   background: #fff;
   border-radius: 7px;
   box-shadow: 1px 2px 4px rgba(0,0,0,.3);
}

.heading {
   background: #7800CF;
   border-radius: 7px 7px 0px 0px;
   padding: 10px;
   color: #fff;
   text-align: center;
   font-family: "Rubik";
}

.faqs{
   padding: 0px 20px 20px;
}

::-webkit-details-marker{
   float: right;
   margin-top: 3px;
}

details{
   background: #f6f6f6;
   padding: 10px 20px;
   border-radius: 7px;
   margin-top: 20px;
   font-family: "Rubik";
   font-size: 14px;
   letter-spacing: 1px;
   cursor: pointer;
}

details summary{
   outline: none;
}
</style>