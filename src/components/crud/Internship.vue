<template>
  <div>
    <h1 class="text-center mb-5 font-weight-bold">Internship list</h1>
    <div class="container" v-for="item of items" :key="item['.key']">
      <div class="col-sm-12 mt-5">
        <div class="card rounded-circle">
          <div class="card-body default-bgcolor">
            <h4 class="card-title text-center mb-5 font-weight-bold">{{ item.name }}</h4>
            <div class="row mb-4">
              <div class="col-sm text-center mb-4">
                <h6 class="font-weight-bold">Location</h6>
                <p class="card-text">{{ item.location }}</p>
              </div>
              <div class="col-sm text-center mb-4">
                <h6 class="font-weight-bold">Availability</h6>
                <p class="card-text">{{ item.availability }}</p>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-1 ml-3 mr-2" v-if="isLoggedIn"><router-link :to="{ name: 'InternshipDetails', params: {id: item['.key']} }" class="btn bg-info editbtn">Details</router-link></div>
              <div class="col-xs-1 ml-3 mr-2" v-if="isLoggedIn"><router-link :to="{ name: 'Edit', params: {id: item['.key']} }" class="btn btn-warning editbtn">Edit</router-link></div>
              <div class="col-xs-1" v-if="isLoggedIn"><button @click="deleteItem(item['.key'])" class="btn btn-danger dltbtn">Delete</button></div>
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
  components: {
      name: 'Internship'
  },
  data() {
    return {
      title: 'Internship',
      items: [],
      isLoggedIn: false,
      currentUser: false,
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