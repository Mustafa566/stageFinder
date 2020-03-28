<template>
    <div class="container">
        <h2 class="mb-5">Personal information</h2>
        <form v-on:submit.prevent="AddProfile">
            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="First name" v-bind="profileData.firstName" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Last name" v-bind="profileData.lastName" required/>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Phone number" v-bind="profileData.phoneNumber" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Adress" v-bind="profileData.adress" required/>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Citizenship" v-bind="profileData.citizenship" required/>
                </div>
                <select class="custom-select col-sm-1 col-md">
                    <option selected v-bind="profileData.gender">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div class="col-sm-1 col-md form-group">
                    <input type="email" class="inputText form-control" placeholder="Personal E-mail" v-bind="profileData.personalEmail" required/>
                </div>
            </div>

            <h2 class="mt-5 mb-5">Business information</h2>
            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Company name" v-bind="profileData.companyName" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="number" class="inputText form-control" placeholder="Chamber of Commerce number" v-bind="profileData.chamberOfCommerceNumber" required/>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Street" v-bind="profileData.street" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="House number" v-bind="profileData.houseNumber" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="ZIP code" v-bind="profileData.zipCode" required/>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-sm-1 col-md form-group">
                    <input type="text" class="inputText form-control" placeholder="Location" v-bind="profileData.location" required/>
                </div>
                <div class="col-sm-1 col-md form-group">
                    <input type="email" class="inputText form-control" placeholder="Company email" v-bind="profileData.companyEmail" required/>
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

export default {
    components: {
        name: 'ProfileInfo'
    },
    firebase: {
        profile: db.ref('profile')
    },
    data () {
        return {
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
                companyEmail: this.profileData.companyEmail
            })
            // this.profileData.firstName = '';
            // this.profileData.lastName = '';
            // this.profileData.phoneNumber = '';
            // this.profileData.adress = '';
            // this.profileData.gender = '';
            // this.profileData.personalEmail = '';
            // this.profileData.companyName = '';
            // this.profileData.chamberOfCommerceNumber = '';
            // this.profileData.street = '';
            // this.profileData.houseNumber = '';
            // this.profileData.zipCode = '';
            // this.profileData.location = '';
            // this.profileData.companyEmail = '';
            // this.$router.push('/internship')
            console.log('Added to database');
        }
    }
}
</script>