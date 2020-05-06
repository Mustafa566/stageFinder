<template>
    <div class="container bgColor">
        <h3 class="text-center mt-4">Edit internship</h3>
        <div class="card-body">
            <form v-on:submit.prevent="updateItem">
                <div class="row mt-4">
                    <div class="col-sm-1 col-md form-group">
                        <input type="text" class="inputText form-control" placeholder="Internship name" v-model="newItem.name" required/>
                    </div>
                    <div class="col-sm-1 col-md form-group">
                        <input type="text" class="inputText form-control" placeholder="Internship location" v-model="newItem.location" required/>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-sm-1 col-md form-group">
                        <input type="text" class="inputText form-control" placeholder="Education" v-model="newItem.education"/>
                    </div>
                    <div class="col-sm-1 col-md form-group">
                        <input type="text" class="inputText form-control" placeholder="Niveau" v-model="newItem.niveau" required/>
                    </div>
                    <div class="col-sm-1 col-md form-group">
                        <input type="number" class="inputText form-control" placeholder="Availability" v-model="newItem.availability" required/>
                    </div>
                </div>

                <div class="row mt-4">
                    <div class="col-sm-1 col-md form-group">
                        <input type="email" class="inputText form-control" placeholder="Email" v-model="newItem.email"/>
                    </div>
                    <div class="col-sm-1 col-md form-group">
                        <select class="custom-select" placeholder="categories" v-model="newItem.categories">
                            <option disabled value="">Choose...</option>
                            <option>Agriculture, Food and Natural Resources</option>
                            <option>Arts, Audio/Video Technology and Communications</option>
                            <option>Education and Training</option>
                            <option>Public Administration</option>
                            <option>Hospitality and Tourism</option>
                            <option>Information Technology</option>
                            <option>Science, Technology, Engineering and Mathematics</option>
                            <option>Architecture and Construction</option>
                            <option>Business Management and Administration</option>
                            <option>Finance</option>
                            <option>Human Services</option>
                            <option>Marketing, Sales and Service</option>
                            <option>Transportation, Distribution and Logistics</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div class="col-sm-1 col-md form-group">
                        <input type="number" class="inputText form-control" placeholder="Phone number" v-model="newItem.phoneNumber"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-1 col-md form-group">
                        <input type="text" class="inputText form-control" placeholder="Job name" v-model="newItem.job" required/>
                    </div>
                    <div class="col-sm-1 col-md form-group">
                        <input type="text" class="inputText form-control" placeholder="Website" v-model="newItem.website"/>
                    </div>
                </div>

                <div class="form-group mt-4">
                    <textarea class="form-control inputText form-control" placeholder="Information" rows="5" v-model="newItem.info"></textarea>
                </div>

                <div class="form-group mt-4">
                    <input type="email" class="inputText form-control" placeholder="Email of your account (same email on the navbar)" v-model="newItem.user" required/>
                </div>

                <div class="form-group">
                    <input type="submit" class="btn btn-primary mt-3" value="Save"/>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import { db } from '../../config/db';

export default {
  components: {
      name: 'EditItem'
  },
  firebase: {
    items: db.ref('items'),
    itemsObj: {
      source: db.ref('items'),
      asObject: true
    }
  },
  data () {
    return {
        title: 'Edit',
        newItem: {},
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
  created() {
     let item = this.itemsObj[this.$route.params.id]
     this.newItem = {
       name: item.name,
       location: item.location,
       education: item.education,
       niveau: item.niveau,
       availability: item.availability,
       email: item.email,
       categories: item.categories,
       phoneNumber: item.phoneNumber,
       job: item.job,
       website: item.website,
       info: item.info,
       user: item.user
     }
    if(firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
    }
    if (this.isLoggedIn == false) {
        this.$router.push('/Login')
    }
  },
  methods: {
    updateItem() {
      if(this.newItem.user == this.currentUser) {
        this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
        this.$router.push('/internship')
      } else {
            alert('Use the same email with this account when you logged in.');
      }
    }
  }
}
</script>