<template>
<div class="container box">
   <h2 class="heading">Frequently Asked Questions</h2>
   <div class="container">
      <div class="row mt-4">
         <div class="col-md-9">
            <p class="faqText">
               Finding a learning place is not always easy. You also sometimes encounter problems during your internship or apprenticeship
               What can you do? Stage finder is ready to help you. See if your question is among the most frequently asked questions.
               If not, you can ask your question personally through the chat bot or send an email.
               Or fill in a help form if you really can't find an internship.
            </p>
         </div>
         <div class="col-md-3 shadowCall">
            <div class="cardtitl">
               <div class="headingText">Stage Finder Service</div>
               <div class="serviceIcon">
                  <img src="@/assets/icons/call.png" class="phone">
               </div>
            </div>
            <div class="card-body">
               <div class="text-secondary">Phone</div>
               <div class="textService">
                  <a href="tel:06 12 34 56 78" class="phoneNr">06 12 34 56 78</a>
               </div>
               <div class="text-secondary">Achievability</div>
               <div>Mo-Fr from 8:00 to 17:00.</div>
            </div>
         </div>
      </div>
   </div>
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
      <details>
         <summary class="text-bold">What is Lorem ipsum?</summary>
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