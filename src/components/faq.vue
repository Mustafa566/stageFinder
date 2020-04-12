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

<style scope> 
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

.box {
   margin: 0px auto;
   background: #fff;
   border-radius: 7px;
   box-shadow: 1px 2px 4px rgba(0,0,0,.3);
}

.heading {
   font-size: 30px;
   border-radius: 7px 7px 0px 0px;
   padding: 10px;
   color: black;
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
   box-shadow: 2px 2px 2px rgba(0,0,0,.3);
}

details summary{
   outline: none;
}

.faqText {
   line-height: 2;
}

.cardtitl {
   background: linear-gradient(122deg,#67bf67 0,#349045 100%);
}

.headingText {
   color: #fff;
   font-size: 14px;
   font-weight: 400;
   padding: 20px 15px 15px 15px;
   text-transform: uppercase;
}

.serviceIcon {
   background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 6px 10px rgba(0,0,0,.24);
    height: 55px;
    position: absolute;
    right: 1.5em;
    top: 1.7em;
    transition: box-shadow 280ms cubic-bezier(.4,0,.2,1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0,0,.2,1),-webkit-box-shadow 280ms cubic-bezier(.4,0,.2,1),-webkit-transform 270ms 0ms cubic-bezier(0,0,.2,1);
    width: 55px;
}

.phone {
   margin: 15px 0 0 13px;
}

.textService {
   color: #656565;
   font-size: 16px;
   font-weight: 400;
   padding-bottom: 20px;
}

.shadowCall {
   box-shadow: 2px 2px 15px rgba(0,0,0,.3);
}

.phoneNr {
   color: #f5940b;
}
</style>