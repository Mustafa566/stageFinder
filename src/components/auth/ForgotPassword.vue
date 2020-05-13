<template>
    <div>
        <div class="btn btn-primary ml-5 mb-2">
            <router-link :to="{ name: 'Index' }" class="defaultColor goBack">Go back</router-link>
        </div>
        <div class="container">
            <div v-if="isHidden" class="alert alert-success fade show" role="alert">
                <strong class="alertText">Email sended to {{ this.email }}</strong>
                <button type="button" class="close" @click="isHidden = !isHidden">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div v-if="seen" class="alert alert-danger fade show" role="alert">
                <strong class="alertText">This email is not recognized.</strong>
                <button type="button" class="close" @click="seen = !seen">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    <div class="container bg">
        <div class="row">
            <div class="col centerVertical">
                <form @submit.prevent="resetPassword">
                    <p class="fgPass">Enter your email below for asking for a new password of your account.</p>
                    <input type="email" v-model="email" placeholder="Type your email" class="inputText form-control w-50 mb-2">
                    <button @click="resetPassword" class="btn btn-primary">Send email</button>
                </form>
            </div>
            <div class="col">
                <img src="@/assets/icons/mail.png" class="mailImg">
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            email: '',
            isHidden: false,
            seen: false
        }
    },
    methods: {
        resetPassword() {
            // eslint-disable-next-line
            const auth = firebase.auth();
            auth.sendPasswordResetEmail(this.email).then(() => {
                this.isHidden = true
                console.log('Email send');
                // Email sent.
            }).catch((error) => {
                // An error happened.
                this.seen = true
                console.log(error);
            });
        }
    }
}
</script>