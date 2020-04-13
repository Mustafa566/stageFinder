<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light navbar">
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
            <li class="nav-item"><router-link :to="{ name: 'faq' }" class="nav-link"><img class="icons mb-2" src="@/assets/icons/question.png"> FAQ</router-link></li>
            <li class="nav-item mt-2"><router-link :to="{ name: 'Bot' }" class="nav-link">Chat bot</router-link></li>
            <li v-if="isLoggedIn" class="nav-item"><button @click="logout" class="nav-link"><img v-if="isLoggedIn" class="icons mb-2" src="@/assets/icons/logout.png"> Logout</button></li>
        </ul>
      </div>
    </nav>

    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>


<style lang="css">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700&display=swap');

/* Iphone X */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .icons {
    display: none;
  }
}

/* Iphone 6/7/8 */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) { 
  .icons {
    display: none;
  }
}

/* standards */
.btn-primary {
  background-image: linear-gradient(135deg,#d98618 0%,#c20016 100%);
  border-color: #d98618;
}

.navbar {
  background-image: linear-gradient(135deg,#d98618 0%,#c20016 100%);
}

.btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:link, .btn-primary:visited {
  background-image: linear-gradient(135deg,#d98618 0%,#c20016 100%);
  border-color: #d98618;
}

.defaultColor {
  color: white;
}

.default-bgcolor {
  background-color: #f5940b;
  border-color: #f5940b;
}

.default-bgcolor:hover {
  background-color: #DF9347;
}

/* Navbar */
.navbar-light .navbar-brand {
  color: white;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
}

.icons {
  width: 28px;
  height: 28px;
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
  font-size: 1.5rem;
}

/* Background color */
.bgColor {
  background-color: #f1f1f1;
  border-radius: 20px;
  border: 1px solid #c4c4c4;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
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

.chatLog {
  line-height: 3;
}

.max {
  height: 450px;
  max-height: 450px;
  overflow-y: scroll;
  overflow-x: hidden;
  border-bottom: 2px solid #dcdcdc;
  background-color: #dcdcdc;
}

.max::-webkit-scrollbar {
  width: 12px;
	background-color: black;
}

.max::-webkit-scrollbar-thumb {
	background-image: linear-gradient(135deg,#d98618 0%,#c20016 100%);
}

.sendIcon {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}


/* Faq page */
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
		margin-right: 200%;
		width: 100%;
	}

	to {
		margin-right: 0%;
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
</style>

<script>
import firebase from "firebase";
export default {
  name: "app",
  data() {
    return {
      isLoggedIn: false,
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
  }
};
</script>