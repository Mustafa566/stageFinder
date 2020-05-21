<template>
    <div v-if="isAdmin">
        <div class="adminPanel">
            <h1 class="text-center">Admin panel</h1>
            <div class="table-responsive-sm mt-5">
                <h2 class="ml-1">Help people to find internship</h2>
                <table class="table table-striped table-bordered table-hover table-sm">
                    <thead class="thead-dark">
                        <tr scope="row">
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Name of your education</th>
                            <th scope="col">Zip code</th>
                            <th scope="col">House number</th>
                            <th scope="col">Name of educational institution</th>
                            <th scope="col">Email</th>
                            <th scope="col">Information</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="helpInternship of helpInternship" :key="helpInternship['.key']"  scope="row">
                            <td>{{helpInternship.firstName}}</td>
                            <td>{{helpInternship.lastName}}</td>
                            <td>{{helpInternship.phoneNumber}}</td>
                            <td>{{helpInternship.education}}</td>
                            <td>{{helpInternship.zipCode}}</td>
                            <td>{{helpInternship.houseNumber}}</td>
                            <td>{{helpInternship.educationInstitution}}</td>
                            <td>{{helpInternship.email}}</td>
                            <td class="w-25">{{helpInternship.information}}</td>
                            <button @click="deleteItem(helpInternship['.key'])" class="btn btn-danger deleteBtn">Delete</button>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="table-responsive-sm mt-5">
                <h2 class="ml-1">Questions from people</h2>
                <table class="table table-striped table-bordered table-hover table-sm">
                    <thead class="thead-dark">
                        <tr scope="row">
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Information</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="questions of questions" :key="questions['.key']" scope="row">
                            <td>{{questions.firstName}}</td>
                            <td>{{questions.lastName}}</td>
                            <td>{{questions.email}}</td>
                            <td>{{questions.subject}}</td>
                            <td>{{questions.information}}</td>
                            <button @click="deleteItem(questions['.key'])" class="btn btn-danger deleteBtn">Delete</button>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-responsive-sm mt-5 mb-5">
                <h2 class="ml-1">Discrimination reports</h2>
                <table class="table table-striped table-bordered table-hover table-sm">
                    <thead class="thead-dark">
                        <tr scope="row">
                            <th scope="col">First name</th>
                            <th scope="col">Last name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone number</th>
                            <th scope="col">Describe</th>
                            <th scope="col">comments</th>
                            <th scope="col">Share details</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="discriminated of discriminationDb" :key="discriminated['.key']" scope="row">
                            <td>{{discriminated.firstName}}</td>
                            <td>{{discriminated.lastName}}</td>
                            <td>{{discriminated.email}}</td>
                            <td>{{discriminated.phoneNumber}}</td>
                            <td>{{discriminated.Describe}}</td>
                            <td>{{discriminated.comments}}</td>
                            <td>{{discriminated.myDetails}}</td>
                            <button @click="deleteItem(discriminated['.key'])" class="btn btn-danger deleteBtn">Delete</button>
                        </tr>
                    </tbody>
                </table>
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
            isAdmin: false,
            helpInternship: [],
            questions: [],
            discriminated: [],
            isLoggedIn: false,
            currentUser: false,
            email: ''
        }
    },
    firebase: {
        helpInternship: db.ref('helpCenter'),
        questions: db.ref('questions'),
        discriminationDb: db.ref('discrimination')
    },
    methods: {
        deleteItem(key) {
            this.$firebaseRefs.helpInternship.child(key).remove();
            this.$firebaseRefs.questions.child(key).remove();
            this.$firebaseRefs.discriminationDb.child(key).remove();
        }
    },
    created() {
        if(firebase.auth().currentUser.email == 'admin@gmail.com') {
            this.isAdmin = true;
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
}
</script>