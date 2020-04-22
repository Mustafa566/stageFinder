<template>
    <div v-if="isLoggedIn" class="container">
      <div v-if="!isHidden" class="alert alert-success fade show" role="alert">
        <strong>Email sended</strong>
        <button type="button" class="close" @click="isHidden = !isHidden">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-3 ">
            <div class="list-group ">
              <a href="#" class="list-group-item list-group-item-action active" @click="firstTab =! firstTab">Personal information</a>
              <a href="#" class="list-group-item list-group-item-action" @click="firstTab =! firstTab">Business information</a>
              <a href="#" class="list-group-item list-group-item-action" @click="thirdTab =! secondTab">My internship posts</a>
              <a href="#" class="list-group-item list-group-item-action" @click="fourthTab =! secondTab">Settings</a>
            </div> 
          </div>
          <div class="col-md-9" v-if="!firstTab">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="text-center">Personal information</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="container" v-for="profileData of profile" :key="profileData['.key']">
                      <div v-if="seen && profileData.user == currentUser" class="row">
                        <div class="col">
                          <div>
                            <div class="card-body">
                              <div class="row"><h6 class="font-weight-bold">ID:</h6><h6 class="ml-1">{{profileData.user}}</h6></div>
                              <div class="row"><h6 class="font-weight-bold">First name:</h6><h6 class="ml-1">{{profileData.firstName}}</h6></div>
                              <div class="row"><h6 class="font-weight-bold">Last name:</h6><h6 class="ml-1">{{profileData.lastName}}</h6></div>
                              <div class="row"><h6 class="font-weight-bold">Phone number:</h6><h6 class="ml-1">{{profileData.phoneNumber}}</h6></div>
                              <div class="row"><h6 class="font-weight-bold">Adress:</h6><h6 class="ml-1">{{profileData.adress}}</h6></div>
                              <div class="row"><h6 class="font-weight-bold">Citizenship:</h6><h6 class="ml-1">{{profileData.citizenship}}</h6></div>
                              <div class="row"><h6 class="font-weight-bold">Personal email:</h6><h6 class="ml-1">{{profileData.personalEmail}}</h6></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-9" v-if="firstTab">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="text-center">Business information</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="container" v-for="profileData of profile" :key="profileData['.key']">
                      <div v-if="seen && profileData.user == currentUser" class="row">
                        <div class="col">
                          <div>
                            <div class="card-body">
                              <p>Company name: {{profileData.companyName}}</p>
                              <p>Chamber Of Commerce Number: {{profileData.chamberOfCommerceNumber}}</p>
                              <p>Street: {{profileData.street}}</p>
                              <p>House number: {{profileData.houseNumber}}</p>
                              <p>ZIP code: {{profileData.zipCode}}</p>
                              <p>Location: {{profileData.location}}</p>
                              <p>Company email: {{profileData.companyEmail}}</p>
                                <div class="row">
                                  <input type="submit" class="btn btn-primary" @click="resetPassword; isHidden = !isHidden" value="Reset your password">
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      isLoggedIn: false,
      firstTab: false,
      secondTab: true
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
  }
};
</script>