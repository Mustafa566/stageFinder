<template>
    <div>
        <h1 class="text-center mb-5 font-weight-bold">Details</h1>
        <div class="container" v-for="item of items" :key="item['.key']">
        <div class="col-sm-12 mt-5">
            <div class="card rounded-circle">
            <div class="card-body defaultGrey">
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
                <div class="container">
                <div class="infoList mt-4">
                    <div class="container mt-5">
                    <div class="row mb-4">
                        <div class="col-sm-1 col-md">
                        <h6 class="font-weight-bold text-center">Education</h6>
                        </div>
                        <div class="col-sm-1 col-md">
                        {{ item.education }}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-1 col-md text-center">
                        <h6 class="font-weight-bold">Niveau</h6>
                        </div>
                        <div class="col-sm-1 col-md">
                        {{ item.niveau }}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-1 col-md text-center">
                        <h6 class="font-weight-bold">Website</h6>
                        </div>
                        <div class="col-sm-1 col-md">
                        {{ item.website }}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-1 col-md text-center">
                        <h6 class="font-weight-bold">Phone number</h6>
                        </div>
                        <div class="col-sm-1 col-md">
                        {{ item.phoneNumber }}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-1 col-md text-center">
                        <h6 class="font-weight-bold">Category</h6>
                        </div>
                        <div class="col-sm-1 col-md">
                        {{ item.categories }}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-1 col-md text-center">
                        <h6 class="font-weight-bold">Email</h6>
                        </div>
                        <div class="col-sm-1 col-md">
                        {{ item.email }}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-1 col-md text-center">
                        <h6 class="font-weight-bold">Information</h6>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-sm-1 col-md">
                        {{ item.info }}
                        </div>
                    </div>
                    <div class="row mb-4">
                        <div class="col-sm-1 col-md-2 text-center">
                            <h6 class="font-weight-bold">Posted:</h6>
                        </div>
                        <div class="col-sm-1 col-md-9">
                            <h6 class="font-weight-bold">{{ item.user }}</h6>
                        </div>
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
    data () {
        return {
            title: 'Internship details',
            newItem: {},
            isLoggedIn: false,
            items: []
        }
    },
    firebase: {
        items: db.ref('items'),
        itemsObj: {
            source: db.ref('items'),
            asObject: true
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
            phoneNumber: item.phoneNumber,
            categories: item.categories,
            website: item.website,
            info: item.info,
        }
        if(firebase.auth().currentUser) {
            this.isLoggedIn = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    },
}
</script>