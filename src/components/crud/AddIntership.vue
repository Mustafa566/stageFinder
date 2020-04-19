<template>
    <div v-if="isLoggedIn" class="container bgColor">
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

                <!-- <div class="row mt-4">
                    <div class="col-sm-1 col-md form-group">
                        <input type="date" v-model='myDate'>
                    </div>
                </div> -->

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

                <div class="form-group mt-4 dateNow"></div>

                <div class="form-group">
                    <input type="submit" class="btn btn-primary mt-3" value="Add internship"/>
                </div>
            </form>
            
            <h2 class="text-center mb-3">Preview design</h2>
            <div class="card rounded-circle">
                <div class="card-body default-bgcolor">
                    <h4 class="card-title text-center mb-5 font-weight-bold">{{ newItem.name }}</h4>
                    <div class="row mb-4">
                        <div class="col-sm text-center mb-4">
                            <h6 class="font-weight-bold">Location</h6>
                            <p class="card-text">{{ newItem.location }}</p>
                        </div>
                        <div class="col-sm text-center mb-4">
                            <h6 class="font-weight-bold">Availability</h6>
                            <p class="card-text">{{ newItem.availability }}</p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <button @click="toggle" class="btn btn-dark">{{toggleIcon}}</button>
                        </div>
                    <div class="infoList mt-4" v-show="showSection">
                    <div class="container mt-5">
                        <div class="row mb-4">
                            <div class="col-sm-1 col-md">
                                <h6 class="font-weight-bold text-center">Education</h6>
                            </div>
                            <div class="col-sm-1 col-md">
                            {{ newItem.education }}
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-1 col-md text-center">
                                <h6 class="font-weight-bold">Niveau</h6>
                            </div>
                            <div class="col-sm-1 col-md">
                            {{ newItem.niveau }}
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-1 col-md text-center">
                                <h6 class="font-weight-bold">Website</h6>
                            </div>
                            <div class="col-sm-1 col-md">
                            {{ newItem.website }}
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-1 col-md text-center">
                                <h6 class="font-weight-bold">Phone number</h6>
                            </div>
                            <div class="col-sm-1 col-md">
                                {{ newItem.phoneNumber }}
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-1 col-md text-center">
                                <h6 class="font-weight-bold">Email</h6>
                            </div>
                            <div class="col-sm-1 col-md">
                            {{ newItem.email }}
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-sm-1 col-md text-center">
                                <h6 class="font-weight-bold">Information</h6>
                            </div>
                            <div class="w-100"></div>
                            <div class="col-sm-1 col-md">
                            {{ newItem.info }}
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
        toggleIcon: 'More info',
        showSection: false,
        myDate: new Date().toISOString().slice(0,10),
        newItem: {
            // myDate: '',
            name: '',
            location: '',
            education: '',
            niveau: '',
            availability: '',
            email: '',
            phoneNumber: '',
            job: '',
            website: '',
            info: ''
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
            console.log(JSON.stringify(this.newItem))
            this.$firebaseRefs.items.push({
                // myDate: this.newItem.myDate,
                name: this.newItem.name,
                location: this.newItem.location,
                education: this.newItem.education,
                niveau: this.newItem.niveau,
                availability: this.newItem.availability,
                email: this.newItem.email,
                phoneNumber: this.newItem.phoneNumber,
                job: this.newItem.job,
                website: this.newItem.website,
                info: this.newItem.info
            })
            this.newItem.date = '';
            this.newItem.name = '';
            this.newItem.location = '';
            this.newItem.education = '';
            this.newItem.niveau = '';
            this.newItem.availability = '';
            this.newItem.email = '';
            this.newItem.phoneNumber = '';
            this.newItem.job = '';
            this.newItem.website = '';
            this.newItem.info = '';
            this.$router.push('/internship')
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
    }
}
</script>