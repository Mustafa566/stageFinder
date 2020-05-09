<template>
    <div class="container">
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
              <a href="#" class="list-group-item list-group-item-action listProfile" @click="listTab = '1'">Personal information</a>
              <a href="#" class="list-group-item list-group-item-action listProfile" @click="listTab = '2'">Business information</a>
              <a href="#" class="list-group-item list-group-item-action listProfile" @click="listTab = '3'">My internship posts</a>
              <a href="#" class="list-group-item list-group-item-action listProfile" @click="listTab = '4'">Settings</a>
            </div> 
          </div>

          <div class="col-md-9" v-if="listTab == '1'">
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
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <th scope="row">ID</th>
                                    <td>{{profileData.user}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">First name:</th>
                                    <td>{{profileData.firstName}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Last name:</th>
                                    <td>{{profileData.lastName}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Phone number:</th>
                                    <td>{{profileData.phoneNumber}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Adress:</th>
                                    <td>{{profileData.adress}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Citizenship:</th>
                                    <td>{{profileData.citizenship}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Personal email:</th>
                                    <td>{{profileData.personalEmail}}</td>
                                  </tr>
                                </tbody>
                              </table>
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

          <div class="col-md-9" v-if="listTab == '2'">
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
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <th scope="row">Company name</th>
                                    <td>{{profileData.companyName}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Chamber Of Commerce Number:</th>
                                    <td>{{profileData.chamberOfCommerceNumber}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Street:</th>
                                    <td>{{profileData.street}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">House number:</th>
                                    <td>{{profileData.houseNumber}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">ZIP code:</th>
                                    <td>{{profileData.zipCode}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Location:</th>
                                    <td>{{profileData.location}}</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Company email:</th>
                                    <td>{{profileData.companyEmail}}</td>
                                  </tr>
                                </tbody>
                              </table>
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

          <div class="col-md-9" v-if="listTab == '3'">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="text-center">My internship posts</h4>
                  </div>
                </div>
                <div class="col-sm-12 col-md-12">
                  <div class="mt-4" v-for="item of items" :key="item['.key']">
                    <div v-if="isLoggedIn && item.user == currentUser">
                      <div class="card-body defaultGrey">
                        <h5 class="card-title font-weight-bold">{{ item.name }}</h5>
                        <div class="row mb-2">
                          <div class="col-sm">
                            <div class="row ml-0"><h6 class="font-weight-bold">Job:</h6><h6 class="ml-1">{{ item.job }}</h6></div>
                            <div class="row ml-0"><h6 class="font-weight-bold">Category:</h6><h6 class="ml-1">{{ item.categories }}</h6></div>
                            <div class="row ml-0"><h6 class="font-weight-bold">Location:</h6><h6 class="ml-1">{{ item.location }}</h6></div>
                            <div class="row ml-0"><h6 class="font-weight-bold">Niveau:</h6><h6 class="ml-1">{{ item.niveau }}</h6></div>
                            <div class="row ml-0"><h6 class="font-weight-bold">Availability:</h6><h6 class="ml-1">{{ item.availability }}</h6></div>
                            <h6>{{ item.info }}</h6>
                            <div class="row ml-0"><h6 class="font-weight-bold">Posted:</h6><h6 class="ml-1">{{ item.user }}</h6></div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-xs-1 ml-3">
                            <router-link :to="{ name: 'InternshipDetails', params: {id: item['.key']} }" class="btn bg-info editbtn">
                              Details
                            </router-link>
                          </div>

                          <div class="col-xs-1 ml-3 mr-3">
                            <router-link :to="{ name: 'Edit', params: {id: item['.key']} }" class="btn btn-warning editbtn">
                              Edit
                            </router-link>
                          </div>
                          
                          <div class="col-xs-1">
                            <button @click="deleteItem(item['.key'])" class="btn btn-danger dltbtn">Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-9" v-if="listTab == '4'">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <h4 class="text-center">Settings</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="col">
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
      item: [],
      isHidden: true,
      seen: true,
      isLoggedIn: false,
      listTab: '1'
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
    profile: db.ref('profile'),
    items: db.ref('items')
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
  },
  mounted() {
    if(this.currentUser == null) {
      this.$router.push('/Login');
    } else {
      console.log('works');
    }
  }
};
</script>