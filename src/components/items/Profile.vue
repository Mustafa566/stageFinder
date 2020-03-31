<template>
    <div class="container">
        <h1 class="text-center mt-2">Profile</h1>
          <div v-if="!isHidden" class="alert alert-success" role="alert">
            <strong>Email sended</strong>
          </div>
            <div class="card-body mt-5 float-right">
              <div class="row">
                <input type="submit" class="btn btn-primary" @click="resetPassword; isHidden = !isHidden" value="Reset your password">
              </div>
            </div>
        <div class="card-body">
          <div class="container" v-for="profileData of profile" :key="profileData['.key']">
            <h6>First name: {{profileData.firstName}}</h6>
            <h6>Last name: {{profileData.lastName}}</h6>
            <h6>Phone number: {{profileData.phoneNumber}}</h6>
            <h6>Adress: {{profileData.adress}}</h6>
            <h6>Gender: {{profileData.gender}}</h6>
            <h6>Citizenship: {{profileData.citizenship}}</h6>
            <h6>Personal email: {{profileData.personalEmail}}</h6>
            <h6>Company name: {{profileData.companyName}}</h6>
            <h6>Chamber Of Commerce Number: {{profileData.chamberOfCommerceNumber}}</h6>
            <h6>Street: {{profileData.street}}</h6>
            <h6>House number: {{profileData.houseNumber}}</h6>
            <h6>ZIP code: {{profileData.zipCode}}</h6>
            <h6>Location: {{profileData.location}}</h6>
            <h6>Company email: {{profileData.companyEmail}}</h6>
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
      email: "",
      password: "",
      profileData: [],
      isHidden: true
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
  }
};
</script>