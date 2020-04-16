<template>
    <div v-if="isAdmin">
        <div class="container">
            <h1>Admin</h1>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
    data() {
        return {
            isAdmin: false
        }
    },
    created() {
        if(firebase.auth().currentUser.email == 'admin@gmail.com') {
            this.isAdmin = true;
            this.currentUser = firebase.auth().currentUser.email;
        }
    }
}
</script>