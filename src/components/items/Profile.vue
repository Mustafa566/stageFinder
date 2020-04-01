<template>
    <div v-if="isLoggedIn" class="container">
        <h1 class="text-center mt-2">Profile</h1>
          <div v-if="!isHidden" class="alert alert-success" role="alert">
            <strong>Email sended</strong>
          </div>
        <div class="card-body">
          <div class="container" v-for="profileData of profile" :key="profileData['.key']">
            <div v-if="seen" class="row">
              <div class="col">
                <div class="card card-border" style="width: 30rem;">
                  <div class="card-body">
                    <h4 class="card-title text-center mb-4">Personal information</h4>
                      <p class="card-text">ID: {{profileData.CurrentUser}}</p>
                      <p class="card-text">First name: {{profileData.firstName}}</p>
                      <p class="card-text">Last name: {{profileData.lastName}}</p>
                      <p class="card-text">Phone number: {{profileData.phoneNumber}}</p>
                      <p class="card-text">Adress: {{profileData.adress}}</p>
                      <p class="card-text">Citizenship: {{profileData.citizenship}}</p>
                      <p class="card-text">Personal email: {{profileData.personalEmail}}</p>
                  </div>
                </div>
              </div>
              <div class="col"></div>
              <div class="col">
                <div class="card card-border" style="width: 30rem;">
                  <div class="card-body">
                    <h4 class="card-title text-center mb-3">Business information</h4>
                      <p>Company name: {{profileData.companyName}}</p>
                      <p>Chamber Of Commerce Number: {{profileData.chamberOfCommerceNumber}}</p>
                      <p>Street: {{profileData.street}}</p>
                      <p>House number: {{profileData.houseNumber}}</p>
                      <p>ZIP code: {{profileData.zipCode}}</p>
                      <p>Location: {{profileData.location}}</p>
                      <p>Company email: {{profileData.companyEmail}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body mt-5 float-right">
              <div class="row">
                <input type="submit" class="btn btn-primary" @click="resetPassword; isHidden = !isHidden" value="Reset your password">
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import { db } from '../../config/db';

export default {
  data() {
    return {
      title: 'Profile',
      email: '',
      password: '',
      profileData: [],
      isHidden: true,
      seen: true,
      isLoggedIn: false
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
    profile: db.ref('profile')
  },
  methods: {
    resetPassword() {
      const auth = firebase.auth();
      auth.sendPasswordResetEmail(auth.currentUser.email).then(() => {
        console.log('Email send');
        // Email sent.
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
    }
  },
  created() {
    if(firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
    // eslint-disable-next-line
    var user = firebase.auth().currentUser;
    if (this.user == this.profileData.CurrentUser) {
      this.seen = true;
    } else {
      this.seen = false;
    }
  }
};
</script>