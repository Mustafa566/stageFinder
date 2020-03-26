<template>
    <div class="container">
        <h1 class="text-center mt-2">Profile</h1>
          <div v-if="!isHidden" class="alert alert-success" role="alert">
            <strong>Email sended</strong>
          </div>
            <div class="card-body mt-5">
              <div class="row">
                <!-- <input type="email" class="form-control input mr-2" v-model="email">  
                <input type="submit" class="btn btn-primary mr-2" @click="resetEmail" value="Reset your email"> -->
                <input type="submit" class="btn btn-primary" @click="resetPassword; isHidden = !isHidden" value="Reset your password">
              </div>
            </div>
        <div class="card-body">
          <p>test</p>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
/* eslint-disable */
export default {
  data() {
    return {
      email: "",
      password: "",
      isHidden: true
    };
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
    },
    // resetEmail() {
    //   const auth = firebase.auth();
    //   auth.updateCurrentUser(user).then(() => {
    //     console.log('Email changed');
    //     // Email sent.
    //   }).catch((error) => {
    //     // An error happened.
    //     console.log(error);
    //   });
    // }
  }
};
</script>