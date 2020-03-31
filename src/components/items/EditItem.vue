<template>
    <div v-if="isLoggedIn" class="container bgColor">
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
                        <input type="text" class="inputText form-control" placeholder="Education" v-model="newItem.education" required/>
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
                        <input type="email" class="inputText form-control" placeholder="Email" v-model="newItem.email" required/>
                    </div>
                    <div class="col-sm-1 col-md form-group">
                        <input type="number" class="inputText form-control" placeholder="Phone number" v-model="newItem.phoneNumber"/>
                    </div>
                </div>

                <div class="form-group mt-4">
                    <input type="text" class="inputText form-control" placeholder="Website" v-model="newItem.website"/>
                </div>

                <div class="form-group mt-4">
                    <textarea class="form-control inputText form-control" placeholder="Information" rows="5" v-model="newItem.info"></textarea>
                </div>

                <div class="form-group">
                    <input type="submit" class="btn btn-primary mt-3" value="Add Item"/>
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
      newItem: {},
      isLoggedIn: false
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
       website: item.website,
       info: item.info,
     }
  },
  methods: {
    updateItem() {
      this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
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