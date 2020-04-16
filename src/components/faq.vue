<template>
<div>
   <div v-if="!isHidden" class="openDiv">
		<div class="layerDiv">
         <h1 class="X ml-5 mt-5" @click="isHidden = !isHidden" >X</h1>
         <div class="container mt-5">
            <div class="form-group width">
               <h1 class="text-center defaultHover">Fill the form in and we will help you</h1>
               <form v-on:submit.prevent="toFirebase">
                  <div class="row mt-5">
                     <div class="col-sm-12 col-md-6">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="First name *" 
                        v-model="helpInternship.firstName" 
                        required>
                     </div>
                     <div class="col-sm-12 col-md-6">
                        <input 
                        type="number" 
                        class="form-control transparent text-warning" 
                        placeholder="Phone number" 
                        v-model="helpInternship.phoneNumber">
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-5">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="Last name *" 
                        v-model="helpInternship.lastName" 
                        required>
                     </div>
                     <div class="col-sm-12 col-md-7">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="Name of your education *" 
                        v-model="helpInternship.education" 
                        required>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-2">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="Zip code *" 
                        v-model="helpInternship.zipCode" 
                        required>
                     </div>
                     <div class="col-sm-12 col-md-3">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="House number *" 
                        v-model="helpInternship.houseNumber" 
                        required>
                     </div>
                     <div class="col-sm-12 col-md-7">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="Name of educational institution" 
                        v-model="helpInternship.educationInstitution">
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-6">
                        <input 
                        type="email" 
                        class="form-control transparent text-warning" 
                        placeholder="Email *" 
                        v-model="helpInternship.email" 
                        required>
                     </div>
                     <div class="col-sm-12 col-md-6">
                        <textarea 
                        class="form-control transparent text-warning" 
                        placeholder="Information" 
                        v-model="helpInternship.information" 
                        rows="6" 
                        maxlength="1000">
                        </textarea>
                     </div>
                     <input type="submit" class="btn btn-primary ml-3 sendBtn" value="Help me with finding">
                  </div>
               </form>
            </div>
         </div>
      </div>
	</div>
   <div v-if="!seen" class="openDiv">
		<div class="layerDiv">
         <h1 class="X ml-5 mt-5" @click="seen = !seen" >X</h1>
         <div class="container mt-5">
            <div class="form-group width">
               <h1 class="text-center defaultHover">Need help</h1>
               <form v-on:submit.prevent="sendQuestion">
                  <div class="row mt-5">
                     <div class="col-sm-12 col-md-6">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="First name *" 
                        v-model="questions.firstName" 
                        required>
                     </div>
                     <div class="col-sm-12 col-md-6">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="Last name *" 
                        v-model="questions.lastName" 
                        required>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-12">
                        <input 
                        type="email" 
                        class="form-control transparent text-warning" 
                        placeholder="Email *" 
                        v-model="questions.email" 
                        required>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-12">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="Subject *" 
                        v-model="questions.subject" 
                        required>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-12">
                        <textarea 
                        class="form-control transparent text-warning" 
                        placeholder="What is your question ? *" 
                        v-model="questions.information" 
                        rows="6" maxlength="1000" 
                        required>
                        </textarea>
                     </div>
                     <input type="submit" class="btn btn-primary ml-3 sendBtn" value="Send question">
                  </div>
               </form>
            </div>
         </div>
      </div>
	</div>
   <div v-if="!notSeen" class="openDiv">
		<div class="layerDiv">
         <h1 class="X ml-5 mt-5" @click="notSeen = !notSeen" >X</h1>
         <div class="container mt-5">
            <div class="form-group width">
               <h1 class="text-center defaultHover">Internship discrimination form</h1>
               <form v-on:submit.prevent="discrimination">
                  <div class="row mt-5">
                     <div class="col-sm-12 col-md-6">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="First name *" 
                        v-model="discriminated.firstName" 
                        required>
                     </div>
                     <div class="col-sm-12 col-md-6">
                        <input 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="Last name *" 
                        v-model="discriminated.lastName" 
                        required>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-12">
                        <input 
                        type="email" 
                        class="form-control transparent text-warning" 
                        placeholder="Email *" 
                        v-model="discriminated.email" 
                        required>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-12">
                        <input 
                        type="number" 
                        class="form-control transparent text-warning" 
                        placeholder="Phone number" 
                        v-model="discriminated.phoneNumber">
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-12">
                        <textarea 
                        type="text" 
                        class="form-control transparent text-warning" 
                        placeholder="Describe the internship discrimination *" 
                        v-model="discriminated.Describe" 
                        rows="6" maxlength="1000"
                        required>
                        </textarea>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-12 col-md-12">
                        <textarea 
                        class="form-control transparent text-warning" 
                        placeholder="comments ?" 
                        v-model="discriminated.comments" 
                        rows="6" maxlength="1000">
                        </textarea>
                     </div>
                  </div>
                  <div class="row mt-4">
                     <div class="col-sm-6 col-md-2">
                        <input 
                        type="checkbox" 
                        class="transparent text-warning mt-4 float-right" 
                        v-model="discriminated.myDetails" 
                        required>
                     </div>
                     <div class="col-sm-6 col-md-10">
                        <label class="label">Do not share my data with school and the training company</label>
                     </div>
                     <div class="col-sm-12 col-md-12">
                        <input type="submit" class="btn btn-primary ml-3 sendBtn" value="Send question">
                     </div>
                  </div>
               </form>
            </div>
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
                  Do you have another question? You can also fill in <b @click="seen = !seen; scrollTop()" class="defaultHover cursorPointer">this e-mail form.</b>
                  Your question will then be answered by the service desk or forwarded to the right 
                  person who can answer your question. If you want direct contact, call us.
               </p>

               <h5 class="mt-5 font-weight-bold">Internship discrimination</h5>
               <p>
                  Do you think you will be discriminated against while applying for a job?
                  For example because of your origin, religion, gender or age?
                  <b @click="notSeen = !notSeen; scrollTop()" class="defaultHover cursorPointer">Report your internship discrimination.</b> Stage Finder will process your report.
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
// eslint-disable-next-line
import firebase from "firebase";
import { db } from '../config/db';
export default {
	data() {
		return {
         title: 'Faq',
         isHidden: true,
         seen: true,
         notSeen: true,
         isActive: false,
         helpInternship: {
            firstName: '',
            phoneNumber: '',
            lastName: '',
            education: '',
            zipCode: '',
            houseNumber: '',
            educationInstitution: '',
            email: '',
            information: ''
        },
        questions: {
           firstName: '',
           lastName: '',
           email: '',
           subject: '',
           information: ''
        },
        discriminated: {
           firstName: '',
           lastName: '',
           email: '',
           phoneNumber: '',
           Describe: '',
           comments: '',
           myDetails: false
        }
		}
   },
	head: {
		title: function () {
			return {
				inner: this.title
			}
		}
   },
   firebase: {
      helpInternship: db.ref('helpCenter'),
      questions: db.ref('questions'),
      discriminationDb: db.ref('discrimination')
   },
   methods: {
      toFirebase() {
         console.log(JSON.stringify(this.helpInternship))
         this.$firebaseRefs.helpInternship.push({
               firstName: this.helpInternship.firstName,
               phoneNumber: this.helpInternship.phoneNumber,
               lastName: this.helpInternship.lastName,
               education: this.helpInternship.education,
               zipCode: this.helpInternship.zipCode,
               houseNumber: this.helpInternship.houseNumber,
               educationInstitution: this.helpInternship.educationInstitution,
               email: this.helpInternship.email,
               information: this.helpInternship.information,
         })
         location.reload();
      },
      sendQuestion() {
         console.log(JSON.stringify(this.questions))
         this.$firebaseRefs.questions.push({
               firstName: this.questions.firstName,
               lastName: this.questions.lastName,
               email: this.questions.email,
               subject: this.questions.subject,
               information: this.questions.information,
         })
         location.reload();
      },
      discrimination() {
         console.log(JSON.stringify(this.discriminated))
         this.$firebaseRefs.discriminationDb.push({
               firstName: this.discriminated.firstName,
               lastName: this.discriminated.lastName,
               email: this.discriminated.email,
               phoneNumber: this.discriminated.phoneNumber,
               Describe: this.discriminated.Describe,
               comments: this.discriminated.comments,
               myDetails: this.discriminated.myDetails
         })
         location.reload();
      },
      scrollTop() {
         window.scrollTo(0, 0);
      }
   }
}
</script>