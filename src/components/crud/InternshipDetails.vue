<template>
    <div>
        <div class="btn btn-primary ml-5 mb-2">
            <router-link :to="{ name: 'Internship' }" class="defaultColor goBack">Go back</router-link>
        </div>
        <div class="container position" v-for="item of items" :key="item['.key']">
            <div class="col-sm-12" v-if="item['.key'] == route">
                <div class="card rounded-circle">
                <div class="card-body defaultGrey">
                    <h4 class="card-title font-weight-bold">{{ item.name }}</h4>
                    <div class="row ml-0">
                        <div class="col-sm">
                            <div class="row">
                                <p class="font-weight-bold">Location:</p>
                                <p class="card-text ml-1">{{ item.location }}</p>
                            </div>
                        </div>    
                    </div>

                    <div class="col-sm">
                        <div class="row">
                            <p class="font-weight-bold">Availability:</p>
                            <p class="card-text ml-1">{{ item.availability }}</p>
                        </div>
                    </div>

                    <div class="col-sm-1 col-md">
                        <div class="row">
                            <p class="font-weight-bold">Education:</p>
                            <p class="card-text ml-1">{{ item.education }}</p>
                        </div>
                    </div>

                    <div class="col-sm-1 col-md">
                        <div class="row">
                            <p class="font-weight-bold">Niveau:</p>
                            <p class="card-text ml-1">{{ item.niveau }}</p>
                        </div>
                    </div>

                    <div class="col-sm-1 col-md">
                        <div class="row">
                            <p class="font-weight-bold">Website: </p>
                            <a :href="item.website" target="_blank" class="ml-1">{{item.website}}</a>
                        </div>
                    </div>

                    <div class="col-sm-1 col-md">
                        <div class="row">
                            <p class="font-weight-bold">Phone number:</p>
                            <p class="card-text ml-1">{{ item.phoneNumber }}</p>
                        </div>
                    </div>

                    <div class="col-sm-1 col-md">
                        <div class="row">
                            <p class="font-weight-bold">Category:</p>
                            <p class="card-text ml-1">{{ item.categories }}</p>
                        </div>
                    </div>

                    <div class="col-sm-1 col-md">
                        <div class="row">
                            <p class="font-weight-bold">Email:</p>
                            <p class="card-text ml-1">{{ item.email }}</p>
                        </div>
                    </div>

                    <div class="col-sm-1 col-md">
                        <div class="row">
                            <p class="font-weight-bold">Information:</p>
                            <p class="card-text">{{ item.info }}</p>
                        </div>
                    </div>

                    <div class="col-sm-1 col-md mt-2">
                        <div class="row">
                            <p class="font-weight-bold">Posted:</p>
                            <p class="card-text">{{ item.user }}</p>
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
            items: [],
            route: this.$route.params.id
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
        var item = this.itemsObj[this.$route.params.id]
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