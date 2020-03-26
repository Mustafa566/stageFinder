<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light navbar">
      <h1 class="default-color"><router-link :to="{ name: 'Index' }" class="default-color">Stage Finder</router-link></h1>
      <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" @click="isHidden = !isHidden"></span>
      </button>
      <div class="navbar-collapse" v-if="!isHidden">
        <ul class="navbar-nav mr-auto"></ul>
        <li v-if="isLoggedIn" class="nav"><span class="currentUser">{{currentUser}}</span></li>
        <ul class="navbar-nav">
          <img v-if="isLoggedIn" class="icons" src="@/assets/icons/add.png">
          <li v-if="isLoggedIn" class="nav-item"><router-link :to="{ name: 'Add' }" class="nav-link">Add Internship</router-link></li>

          <img v-if="isLoggedIn" class="icons" src="@/assets/icons/internship.png">
          <li v-if="isLoggedIn" class="nav-item"><router-link :to="{ name: 'Internship' }" class="nav-link">Internships</router-link></li>

          <img v-if="isLoggedIn" class="icons" src="@/assets/icons/profile.png">
          <li v-if="isLoggedIn" class="nav-item"><router-link :to="{ name: 'Profile' }" class="nav-link">Profile</router-link></li>

          <img v-if="isLoggedIn" class="icons" src="@/assets/icons/logout.png">
          <li v-if="isLoggedIn" class="nav-item"><button @click="logout" class="nav-link">Logout</button></li>

          <img v-if="!isLoggedIn" class="icons" src="@/assets/icons/internship.png">
          <li v-if="!isLoggedIn" class="nav-item"><router-link :to="{ name: 'Internship' }" class="nav-link">Internships</router-link></li>

          <img v-if="!isLoggedIn" class="icons" src="@/assets/icons/login.png">
          <li v-if="!isLoggedIn" class="nav-item"><router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link></li>

          <li v-if="!isLoggedIn" class="nav-item"><router-link :to="{ name: 'faq' }" class="nav-link">faq</router-link></li>
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

@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .icons {
    display: none;
  }
}

/* standards */
.btn-primary {
  background-color: #f5940b;
  border-color: #f5940b;
}

.navbar {
  background-image: linear-gradient(135deg,#d98618 0%,#c20016 100%);
}

.btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:link, .btn-primary:visited {
  background-color: #DF9347;
  border-color: #DF9347;
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

.icons {
  width: 28px;
  height: 28px;
  margin-top: 5px;
  margin-left: 15px;
}

/* */

.navbar-light .navbar-brand {
  color: white;
}

.navbar-light .navbar-nav .nav-link {
  color: white;
}

.gap {
  padding-top: 50px;
}

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

.editbtn, .dltbtn, .editbtn:hover, .dltbtn:hover {
  border: 2px solid black;
}

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