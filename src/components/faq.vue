<template>
<div>
   <div v-if="!isHidden" class="openDiv">
		<div class="layerDiv">
         <h1 class="X ml-5 mt-5" @click="isHidden = !isHidden">X</h1>
         <div class="container">
            <form>
               <div class="form-group">
                  <label for="exampleInputEmail1" class="defaultColor2">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                  <small id="emailHelp" class="form-text text-muted defaultColor2">We'll never share your email with anyone else.</small>
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword1" class="defaultColor2">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1">
               </div>
               <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input defaultColor2 default-bgcolor" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
               </div>
               <button type="submit" class="btn btn-primary defaultColor2">Submit</button>
            </form>
         </div>
      </div>
	</div>
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
                  <a href="tel:06 12 34 56 78" class="defaultHover">06 12 34 56 78</a>
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
   <div class="row">
      <div class="col-md-9 col-sm mt-5">
         <h5 class="font-weight-bold">Chat bot</h5>
         <p>
            Do you want immediate help with the search or do you have another question?
            We have a chat bot that can help you with your question.
            When you go to the chat bot type <b>help</b>, because it can only answer the question what below says.
            To open the chat directly, click on the chat icon below.
         </p>
         <router-link to="Bot"><img class="iconFaq" src="@/assets/icons/bot.png"></router-link>

         <h5 class="mt-5 font-weight-bold">Internship not found, we will help you</h5>
         <p>
            Have you not found a learning place using the chat or school? Then fill in the form.
            This will put you in touch with Stage Finder.
            We help you find an internship or a learning job.
            Click on the form icon below to fill the form.
         </p>
         <img class="iconFaq" src="@/assets/icons/form.png" @click="isHidden = !isHidden; scrollTop()">

         <h5 class="mt-5 font-weight-bold">Ask a Question</h5>
         <p>
            Do you have another question? You can also fill in <a href="" class="defaultHover">this e-mail form.</a>
            Your question will then be answered by the service desk or forwarded to the right 
            person who can answer your question. If you want direct contact, call us.
         </p>

         <h5 class="mt-5 font-weight-bold">Internship discrimination</h5>
         <p>
            Do you think you will be discriminated against while applying for a job?
            For example because of your origin, religion, gender or age?
            <a href="" class="defaultHover">Report your internship discrimination.</a> Stage Finder will process your report.
         </p>
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
         title: 'Faq',
         isHidden: true
		}
	},
	head: {
		title: function () {
			return {
				inner: this.title
			}
		}
   },
   methods: {
      scrollTop() {
         window.scrollTo(0, 0);
      }
   }
}
</script>