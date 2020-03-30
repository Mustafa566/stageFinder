<template>
    <div class="container">
        <div v-if="!isHidden" class="alert alert-success" role="alert">
            <strong>Personal and Business information saved.</strong>
        </div>
        <div class="row">
            <div class="col">
                <h2 class="mb-5">Personal information</h2>
            </div>
            <div class="col">
                <input v-if="isLoggedIn" class="nav float-right font-weight-bold" v-model="currentUser">
            </div>
        </div>
        <form v-on:submit.prevent="AddProfile">
            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="First name" v-model="profileData.firstName" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Last name" v-model="profileData.lastName" required/>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Phone number" v-model="profileData.phoneNumber" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Adress" v-model="profileData.adress" required/>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Citizenship" v-model="profileData.citizenship" required/>
                </div>
                <select class="custom-select col-md col-sm-1">
                    <option selected disabled>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div class="col-sm-1 col-md form-group">
                    <input type="email" class="inputText form-control" placeholder="Personal E-mail" v-model="profileData.personalEmail" required/>
                </div>
            </div>

            <h2 class="mt-5 mb-5">Business information</h2>
            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Company name" v-model="profileData.companyName" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="number" class="inputText form-control" placeholder="Chamber of Commerce number" v-model="profileData.chamberOfCommerceNumber" required/>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Street" v-model="profileData.street" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="House number" v-model="profileData.houseNumber" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="ZIP code" v-model="profileData.zipCode" required/>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Location" v-model="profileData.location" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="email" class="inputText form-control" placeholder="Company email" v-model="profileData.companyEmail" required/>
                </div>
            </div>

            <div class="form-group">
                <input type="submit" class="btn btn-primary mt-3" value="Save"/>
            </div>
        </form>
        
    </div>
</template>

<script>
import { db } from '../../config/db';
import firebase from "firebase"

export default {
    components: {
        name: 'ProfileInfo'
    },
    firebase: {
        profile: db.ref('profile')
    },
    data () {
        return {
            isLoggedIn: false,
            currentUser: false,
            isHidden: true,
            profileData: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                adress: '',
                citizenship: '',
                gender: '',
                personalEmail: '',
                companyName: '',
                chamberOfCommerceNumber: '',
                street: '',
                houseNumber: '',
                zipCode: '',
                location: '',
                companyEmail: ''
            },
        }
    },
    methods: {
        AddProfile() {
            console.log(JSON.stringify(this.profileData) + '<br/>' +this.currentUser)
            this.$firebaseRefs.profile.push({
                firstName: this.profileData.firstName,
                lastName: this.profileData.lastName,
                phoneNumber: this.profileData.phoneNumber,
                adress: this.profileData.adress,
                gender: this.profileData.gender,
                personalEmail: this.profileData.personalEmail,
                companyName: this.profileData.companyName,
                chamberOfCommerceNumber: this.profileData.chamberOfCommerceNumber,
                street: this.profileData.street,
                houseNumber: this.profileData.houseNumber,
                zipCode: this.profileData.zipCode,
                location: this.profileData.location,
                companyEmail: this.profileData.companyEmail,
                currentUser: this.currentUser
            })
            this.profileData.firstName = '';
            this.profileData.lastName = '';
            this.profileData.phoneNumber = '';
            this.profileData.adress = '';
            this.profileData.gender = '';
            this.profileData.personalEmail = '';
            this.profileData.companyName = '';
            this.profileData.chamberOfCommerceNumber = '';
            this.profileData.street = '';
            this.profileData.houseNumber = '';
            this.profileData.zipCode = '';
            this.profileData.location = '';
            this.profileData.companyEmail = '';
            this.currentUser = '';
            window.scrollTo(0,0, 0,0);
            console.log('Added to database');
            /* Waiting for 2 seconds here */
            this.$router.push('/internship')
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