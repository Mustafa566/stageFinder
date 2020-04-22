<template>
  <div class="main">
    <h1 class="text-center mb-5 font-weight-bold">Internship list</h1>
    <div>
      <div class="row">
        <div class="col-sm-12 col-md-3 ml-3 rightLine">
          <h4 class="text-center">Search internship</h4>
          <div class="form-check mt-5">
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Agriculture, Food and Natural Resources</p>
            </div>

            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Arts, Audio/Video Technology and Communications</p>
            </div>
            
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Education and Training</p>
            </div>
                        
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Public Administration</p>
            </div>
                        
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Hospitality and Tourism</p>
            </div>
                        
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Information Technology</p>
            </div>
                        
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Science, Technology, Engineering and Mathematics</p>
            </div>
                        
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Architecture and Construction</p>
            </div>
            
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Business Management and Administration</p>
            </div>

            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Finance</p>
            </div>
            
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Human Services</p>
            </div>
                        
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Marketing, Sales and Service</p>
            </div>
                        
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Transportation, Distribution and Logistics</p>
            </div>
                        
            <div>
                <input class="form-check-input checkboxMargin" type="checkbox">
                <p class="form-check-label checkboxMargin">Others</p>
            </div>
        </div>
        </div>
      <div class="col-sm-12 col-md-7">
        <div class="card rounded-circle mt-5" v-for="item of items" :key="item['.key']">
          <div>
            <div class="card-body defaultGrey">
              <h5 class="card-title font-weight-bold">{{ item.name }}</h5>
              <div class="row mb-2">
                <div class="col-sm ">
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
                <div class="col-xs-1 ml-3" v-if="isLoggedIn">
                  <router-link :to="{ name: 'InternshipDetails', params: {id: item['.key']} }" class="btn bg-info editbtn">
                    Details
                  </router-link>
                </div>

                <div class="col-xs-1 ml-3 mr-3" v-if="isLoggedIn && item.user == currentUser">
                  <router-link :to="{ name: 'Edit', params: {id: item['.key']} }" class="btn btn-warning editbtn">
                    Edit
                  </router-link>
                </div>
                
                <div class="col-xs-1" v-if="isLoggedIn && item.user == currentUser">
                  <button @click="deleteItem(item['.key'])" class="btn btn-danger dltbtn">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from '../../config/db';

export default {
  data() {
    return {
      title: 'Internship',
      isLoggedIn: false,
      currentUser: false
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
    items: db.ref('items')
  },
  methods: {
    deleteItem(key) {
      this.$firebaseRefs.items.child(key).remove();
    }
  },
  created() {
    if(firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  }
}
</script>