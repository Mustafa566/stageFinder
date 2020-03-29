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

<style scoped>
.inputText {
	padding: 0.5em;
    font-size: 1.5rem;
}
</style>

<script>
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
        newItem: {
            name: '',
            location: '',
            education: '',
            niveau: '',
            availability: '',
            email: '',
            phoneNumber: '',
            website: '',
            info: ''
        },
    }
  },
  methods: {
        AddIntership() {
            console.log(JSON.stringify(this.newItem))
            this.$firebaseRefs.items.push({
                name: this.newItem.name,
                location: this.newItem.location,
                education: this.newItem.education,
                niveau: this.newItem.niveau,
                availability: this.newItem.availability,
                email: this.newItem.email,
                phoneNumber: this.newItem.phoneNumber,
                website: this.newItem.website,
                info: this.newItem.info
            })
            this.newItem.name = '';
            this.newItem.location = '';
            this.newItem.education = '';
            this.newItem.niveau = '';
            this.newItem.availability = '';
            this.newItem.email = '';
            this.newItem.phoneNumber = '';
            this.newItem.website = '';
            this.newItem.info = '';
            this.$router.push('/internship')
        }
    }
}
</script>