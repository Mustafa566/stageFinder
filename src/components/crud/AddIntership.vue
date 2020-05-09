<template>
    <div class="container bgColor">
        <h3 class="text-center mt-4">Add internship</h3>
        <div class="card-body">
            <form v-on:submit.prevent="AddIntership">
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

                <div class="form-group mt-4 dateNow"></div>

                <div class="form-group">
                    <input type="submit" class="btn btn-primary mt-3" value="Add internship"/>
                </div>
            </form>
            
            <h2 class="text-center mb-3">Preview design</h2>
            <div class="card rounded-circle">
                <div class="card-body defaultGrey">
                    <h5 class="card-title font-weight-bold">{{ newItem.name }}</h5>
                    <div class="row mb-2">
                        <div class="col-sm ">
                        <div class="row ml-0"><h6 class="font-weight-bold">Job:</h6><h6 class="ml-1">{{ newItem.job }}</h6></div>
                        <div class="row ml-0"><h6 class="font-weight-bold">Category:</h6><h6 class="ml-1">{{ newItem.categories }}</h6></div>
                        <div class="row ml-0"><h6 class="font-weight-bold">Location:</h6><h6 class="ml-1">{{ newItem.location }}</h6></div>
                        <div class="row ml-0"><h6 class="font-weight-bold">Niveau:</h6><h6 class="ml-1">{{ newItem.niveau }}</h6></div>
                        <div class="row ml-0"><h6 class="font-weight-bold">Availability:</h6><h6 class="ml-1">{{ newItem.availability }}</h6></div>
                        <h6>{{ newItem.info }}</h6>
                        <div class="row ml-0"><h6 class="font-weight-bold">Posted:</h6><h6 class="ml-1">{{ newItem.user }}</h6></div>
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
  components: {
      name: 'AddIntership'
  },
  firebase: {
    items: db.ref('items')
  },
  data () {
    return {
        title: 'Add internship',
        isLoggedIn: false,
        toggleIcon: 'Details',
        showSection: false,
        myDate: new Date().toISOString().slice(0,10),
        newItem: {
            name: '',
            location: '',
            education: '',
            niveau: '',
            availability: '',
            email: '',
            categories: '',
            phoneNumber: '',
            job: '',
            website: '',
            info: '',
            user: ''
        },
    }
  },
  head: {
		title: function () {
			return {
				inner: this.title
			}
		}
	},
  methods: {
        AddIntership() {
            if(this.newItem.user == this.currentUser) {
                console.log(JSON.stringify(this.newItem))
                this.$firebaseRefs.items.push({
                    // myDate: this.newItem.myDate,
                    name: this.newItem.name,
                    location: this.newItem.location,
                    education: this.newItem.education,
                    niveau: this.newItem.niveau,
                    availability: this.newItem.availability,
                    email: this.newItem.email,
                    categories: this.newItem.categories,
                    phoneNumber: this.newItem.phoneNumber,
                    job: this.newItem.job,
                    website: this.newItem.website,
                    info: this.newItem.info,
                    user: this.newItem.user
                })
                this.newItem.date = '';
                this.newItem.name = '';
                this.newItem.location = '';
                this.newItem.education = '';
                this.newItem.niveau = '';
                this.newItem.availability = '';
                this.newItem.email = '';
                this.newItem.categories = '';
                this.newItem.phoneNumber = '';
                this.newItem.job = '';
                this.newItem.website = '';
                this.newItem.info = '';
                this.newItem.user = '';
                this.$router.push('/internship')
            } else {
                alert('Use the same email with this account when you logged in.');
            }
        },
        toggle() {
            this.showSection = !this.showSection
        }
    },
    created() {
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }   
        if (this.isLoggedIn == false) {
            this.$router.push('/Login')
        }
    },
    mounted() {
        if(this.currentUser == null) {
            this.$router.push('/Login');
        } else {
            console.log('works');
        }
    }
}
</script>