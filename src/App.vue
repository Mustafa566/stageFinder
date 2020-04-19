<template>
  <div id="app">
    <nav class="navbar navbar-expand-xl navbar-light navbar">
      <h1 class="default-color"><router-link :to="{ name: 'Index' }" class="default-color">Stage Finder</router-link></h1>
      <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" @click="isHidden = !isHidden"></span>
      </button>
      <div class="navbar-collapse" v-if="!isHidden">
        <ul class="navbar-nav mr-auto"></ul>
        <li v-if="isLoggedIn" class="nav"><span class="currentUser"><img class="userOnline" src="@/assets/icons/userOnline.png">{{currentUser}}</span></li>
        <ul class="navbar-nav mr-3">
            <li v-if="isLoggedIn" class="nav-item"><router-link :to="{ name: 'Add' }" class="nav-link"><img v-if="isLoggedIn" class="icons mb-2" src="@/assets/icons/add.png"> Add Internship</router-link></li>
            <li class="nav-item"><router-link :to="{ name: 'Internship' }" class="nav-link"><img class="icons mb-2" src="@/assets/icons/internship.png"> Internships</router-link></li>
            <li v-if="isLoggedIn" class="nav-item"><router-link :to="{ name: 'Profile' }" class="nav-link"><img v-if="isLoggedIn" class="icons mb-2" src="@/assets/icons/profile.png"> Profile</router-link></li>
            <li v-if="!isLoggedIn" class="nav-item"><router-link :to="{ name: 'Login' }" class="nav-link"><img v-if="!isLoggedIn" class="icons mb-2" src="@/assets/icons/login.png"> Login</router-link></li>
            <li v-if="isAdmin" class="nav-item"><router-link :to="{ name: 'Admin' }" class="nav-link"><img v-if="isAdmin" class="icons mb-2" src="@/assets/icons/reports.png"> Admin panel</router-link></li>
            <li class="nav-item"><router-link :to="{ name: 'Faq' }" class="nav-link"><img class="icons mb-2" src="@/assets/icons/question.png"> FAQ</router-link></li>
            <li v-if="isLoggedIn" class="nav-item"><button @click="logout" class="nav-link"><img v-if="isLoggedIn" class="icons mb-2" src="@/assets/icons/logout.png"> Logout</button></li>
        </ul>
      </div>
    </nav>

    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "app",
  data() {
    return {
      isLoggedIn: false,
      isAdmin: false,
      currentUser: false,
      isHidden: false
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$router.push('/Login')
        location.reload();
      })
    }
  },
  created() {
    if(firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
    if(firebase.auth().currentUser.email == 'admin@gmail.com' || firebase.auth().currentUser.email == 'test@gmail.com') {
      this.isAdmin = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  }
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap');

/* Variables */
$gradient: linear-gradient(135deg,#d98618 0%,#c20016 100%);
$orange-color: #d98618;
$orange-second-color: #f5940b;
$grey-color: #dcdcdc;


/* Responsive */
/* Iphone 6/7/8 */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) { 
  /* Index page */
  #app {
    overflow-x: hidden;
  }

  .isometric {
    width: 380px !important;
    height: 280px !important;
  }

  .team1 {
    right: 40px;
    bottom: 20px;
  }

  .team2 {
    left: 47px;
    top: 20px;
  }

  .navbar-light .navbar-nav .nav-link, .currentUser {
    font-size: 12px;
  }

  .icons {
    width: 20px !important;
    height: 20px !important;
  }

  /* Login page */
  .form {
    width: 400px !important;
    padding: 100px 30px 0 !important;
  }

  .sub-cont {
    overflow: visible !important;
    top: 700px !important;
  }

  .cont {
    height: 1200px !important;
  }

  /* Admin panel page */
  table {
    font-size: 10px;
  }

  .deleteBtn {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 10px;
  }

   /* Chat bot */
  .max {
    height: 470px !important;
    margin-left: -15px;
    width: 109%;
  }

  .container .con, .inputChat {
    font-size: 12px !important;
  }

  /* Faq page */
  .label {
    font-size: 11px;
    width: max-content !important;
  }

  label {
    margin: -15px -66px !important;
  }

  .openDiv .layerDiv {
    height: 364% !important;
  }
}

/* Iphone 6/7/8 + */
@media only screen and (min-device-width : 414px) and (max-device-width : 736px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 3)  { 
  /* Index page */
  #app {
    overflow-x: hidden;
  }

  .isometric {
    width: 420px !important;
    height: 280px !important;
  }

  .team1 {
    right: 40px;
    bottom: 20px;
  }

  .team2 {
    left: 47px;
    top: 20px;
  }

  .icons {
    width: 20px !important;
    height: 20px !important;
    margin-top: 5px !important;
    margin-left: 0px !important;
  }

  /* Chat bot */
  .max {
    height: 520px !important;
    margin-left: -15px;
    width: 109%;
  }

  .container .con, .inputChat {
    font-size: 12px !important;
  }

  /* Faq page */
  .openDiv .layerDiv {
    height: 361% !important;
  }
}

/* Iphone X */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  /* Index page */
  #app {
    overflow-x: hidden;
  }

  .isometric {
    width: 380px !important;
    height: 280px !important;
  }

  .team1 {
    right: 40px;
    bottom: 20px;
  }

  .team2 {
    left: 47px;
    top: 20px;
  }

  .icons {
    width: 20px !important;
    height: 20px !important;
    margin-top: 5px !important;
    margin-left: 0px !important;
  }

  /* Admin panel page */
  table {
    font-size: 10px;
  }

  .deleteBtn {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 10px;
  }

  /* Chat bot */
  .max {
    height: 600px !important;
    margin-left: -15px;
    width: 109%;
  }

  .container .con, .inputChat {
    font-size: 12px !important;
  }

  /* Faq page */
  .label {
    font-size: 11px;
    width: max-content !important;
  }

  label {
    margin: -15px -66px !important;
  }

  .openDiv .layerDiv {
    height: 300% !important;
  }
}

/* Ipad */
@media only screen and (min-device-width: 768px) and (max-device-width: 1023px) and (-webkit-min-device-pixel-ratio: 2) {
  /* Index page */
  #app {
    overflow-x: hidden;
  }

  .navbar {
    width: 104%;
  }

  .navbar-light .navbar-toggler {
    margin-right: 30px;
  }

  /* Login page */
  .img__text p, .img__btn span {
    line-height: 1.9;
  }

  .sub-cont {
    left: 515px !important;
    margin-right: 50px;
  }

  .cont.s--signup .sub-cont {
    transform: translate3d(-540px, 0, 0) !important;
  }

  /* Internship page */
  .col-md-3 {
    max-width: 38%;
  }

  .h5, h5 {
    font-size: 1.5rem;
  }

  .h6, h6 {
    font-size: 1.25rem;
  }

  .checkboxMargin {
    font-size: 18px;
  }

  input[type=checkbox], input[type=radio] {
    width: 20px;
    height: 16px;
  }

  /* Chat bot */
  .max {
    height: 800px !important;
  }

  .container .con, .inputChat {
    font-size: 18px !important;
  }

  /* Faq */
  .transparent {
    font-size: 20px;
  }

  .sendBtn {
    font-size: 20px !important;
    width: 200px !important;
  }

  .zip {
    flex: 0 0 33.666667% !important;
    max-width: 33.666667% !important;
    margin-bottom: 24px !important;
  }

  .houseNmb {
    flex: 0 0 46%;
    max-width: 46%;
  }

  .eduInstitution {
    width: 310px;
  }

  label {
    margin: 20px auto 0;
  }

  .label {
    font-size: 15px;
  }

  .shadowCall {
    flex: 0 0 40%;
    max-width: 45%;
  }

  .faqTxt {
    max-width: 60%;
  }

  .openDiv .layerDiv {
    height: 191% !important;
  }
}

/* Ipad pro */
@media only screen and (min-device-width: 1024px) and (max-device-width: 1366px)and (-webkit-min-device-pixel-ratio: 2) {
  /* Index page */
  #app, .gap, .main {
    overflow-x: hidden !important;
  }

  .isometric {
    width: 500px !important;
    height: 300px !important;
  }
  
  .isobg {
    margin-top: 20% !important;
    margin-bottom: 12% !important;
  }

  .navbar-light .navbar-nav .nav-link {
    font-size: 20px;
  }

  .navbar-collapse {
    margin-right: 20px; 
  }

  /* Login page */
  .h2 {
    font-size: 40px;
  }

  label span {
    font-size: 19px !important;
  }

  .input {
    font-size: 22px !important;
  }

  .submit {
    font-size: 20px;
  }

  .img__text h2 {
    font-size: 26px;
  }

  .img__text p, .img__btn span {
    font-size: 17px !important;
    line-height: 1.9;
  }

  /* Internship page */
  .h5, h5 {
    font-size: 1.5rem;
  }

  .h6, h6 {
    font-size: 1.25rem;
  }

  .checkboxMargin {
    font-size: 18px;
  }

  input[type=checkbox], input[type=radio] {
    width: 20px;
    height: 16px;
  }

  /* Add intership */
  .inputText {
    font-size: x-large;
  }

  .btn {
    font-size: 1.3rem;
  }

  /* Admin panel page */
  .deleteBtn {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  /* Chat bot */
  .max {
    height: 1100px !important;
  }

  .container .con, .inputChat {
    font-size: 20px !important;
  }

  /* Faq */
  .transparent {
    font-size: 20px;
  }

  .sendBtn {
    font-size: 20px !important;
    width: 200px !important;
  }

  .zip {
    flex: 0 0 33.666667% !important;
    max-width: 33.666667% !important;
    margin-bottom: 24px !important;
  }
}

/* Laptops */
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) { 
  th, td {
    font-size: 13px;
  }

  .nav-item, .nav {
    font-size: 15px;
  }
}

/* Body */
body::-webkit-scrollbar-thumb {
	background-image: $gradient;
}

body::-webkit-scrollbar {
  width: 12px;
	background-color: black;
}

.navbar-light .navbar-toggler {
  color: transparent;
  border-color: transparent;
}

.navbar-light .navbar-toggler:focus, .navbar-light .navbar-toggler:active {
  color: transparent;
  border-color: transparent;
}

/* standards */
.btn-primary {
  background-image: $gradient;
  border-color: $orange-color;
}

.navbar {
  background-image: $gradient;
}

.btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:link, .btn-primary:visited {
  background-image: $gradient;
  border-color: $orange-color;
}

.defaultColor {
  color: white;
}

.defaultColor2 {
  color: $orange-second-color;
}

.default-bgcolor {
  background-color: $orange-second-color;
  border-color: $orange-second-color;
}

.cursorPointer {
  cursor: pointer;
}

.defaultHover {
  color: $orange-second-color;
}

.defaultHover:hover {
  color: $orange-second-color;
}

.form-control:focus, .inputText:focus {
  outline: none;
}

/* Internship */
.defaultGrey {
  background-color: $grey-color;
  border-color: $grey-color;
  border-radius: 20px;
}

.checkboxMargin {
  margin-left: 0px;
}

.rightLine {
  border-right: groove;
}

/* Navbar */
.navbar-light .navbar-brand {
  color: white;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
}

.icons {
  width: 26px;
  height: 26px;
  margin-top: 5px;
  margin-left: 15px;
}

.userOnline {
  width: 20px;
  height: 20px;
  margin-right: 5px;
  padding: 3px;
}

.gap {
  padding-top: 50px;
}

/* Currentuser */
.currentUser {
  margin-right: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: black;
  border-radius: 15px;
  padding-left: 10px;
  padding-right: 10px;
}

.default-color {
  color: white;
  text-decoration: none;
}

.default-color:hover {
  color: white;
  text-decoration: none;
}

.navbar-light .navbar-nav .nav-link {
  font-weight: 500;
}

.input {
  width: 30%;
}


/* Edit button */
.editbtn, .dltbtn, .editbtn:hover, .dltbtn:hover {
  border: 2px solid black;
}


.inputText {
	padding: 0.5em;
}

/* Background color */
.bgColor {
  background-color: #f1f1f1;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
}

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.infoList {
  border: 2px solid black;
  border-radius: 5px;
}

.card-border {
  border-radius: 15px;
}

/* Chat bot */
.inputChat {
  display: block;
  width: 100%;
  margin-top: 5px;
  margin-left: 10px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.4);
}

.max {
  height: 700px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-bottom: 2px solid $grey-color;
  background-color: $grey-color;
}

.max::-webkit-scrollbar {
  width: 12px;
	background-color: black;
}

.max::-webkit-scrollbar-thumb {
	background-image: $gradient;
}

.sendIcon {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}


/* Faq page */
.openDiv .layerDiv {
	position: absolute;
	top: 0;
	left: 0;
  bottom: 0;
	width: 100%;
  height: 183%;
	transform-origin: top;
  animation-delay: 0s;
	animation-duration: 1s;
  animation-name: slidein;
}

.layerDiv:nth-child(1) {
	background: black;
	z-index: 2;
  opacity: 0.9;
}

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

.iconFaq {
  width: 80px;
  height: 80px;
  cursor: pointer;
}

.X {
  color: $orange-second-color;
  cursor: pointer;
}


.X:hover {
  color: white;
  cursor: pointer;
}

.transparent, .transparent:active, .transparent:focus {
  background-color: transparent;
}

.width {
  width: 70%;
  margin: 0 auto;
}

.sendBtn {
  font-size: 16px;
  width: 180px;
  margin-top: 20px;
}

.label {
  width: unset;
  color: $orange-second-color;
  float: left;
}

/* Index page */
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

@keyframes slideout {
	from {
		margin-left: 0%;
		width: 100%;
	}

	to {
		margin-left: 200%;
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

.size {
	font-size: 35px;
	animation: fadeIn 1s linear backwards;
	animation-delay: 2s;
}

.h5 {
	opacity: 0;
	font-weight: 400;
	font-size: 1.2em;
	animation: fadeIn 1s linear forwards;
	animation-delay: 2.5s;
}

.team {
	animation: fadeIn 1s linear backwards;
	animation-delay: 3s;
}

.teamImg {
	width: 200px;
	margin: auto;
	margin-top: 10px;
}

.teamImg2 {
	width: 207px;
	margin: auto;
	margin-top: 10px;
}

.sticky-footer {
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
}

/* Admin panel */
.adminPanel {
  max-width: 98%;
  margin: 0 auto;
}

.deleteBtn {
  border: 2px solid black;
  padding: 2px 2px;
}
</style>
