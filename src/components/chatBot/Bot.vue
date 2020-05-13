<template>
    <div>
        <div class="btn btn-primary ml-5 mb-2">
            <router-link :to="{ name: 'Index' }" class="defaultColor goBack">Go back</router-link>
        </div>
        <div class="container">
            <div class="container max" ref="scroll">
                <div class="container con">
                    <div class="row ml-0 mt-3 font-weight-bold">
                        <p>{{this.file.welkom}}</p>
                    </div>
                <p id="chatLog"></p><br>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <input id="userBox" class="inputChat" placeholder="Type here..." type="text" @keyup.enter="talk()" v-model="msg" required>
                </div>
                <div type="submit" value="Send" class="btn btn-primary mt-2 ml-2" @click="talk()">Send<img class="sendIcon" src="@/assets/icons/send.png"></div>
            </div>
        </div>
    </div>
</template>

<script>
import json from './info.json';
export default {
    data() {
        return {
            title: 'Chat bot',
            file: json,
            msg: ''
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
        talk() {
            var user = this.msg;
            document.getElementById('chatLog').innerHTML += user + '<br>';
            if (user != '') {
                if (user in this.file) {
                    document.getElementById('chatLog').innerHTML += this.file[user] + "<br>" + "<br>";
                } else {
                    document.getElementById('chatLog').innerHTML += 'I can\'t answer your question, type "help" I can only help you with that or you can go to the Faq page...<br>' + '<br>';
                }
            } else {
                alert('Type text in');
            }
            console.log(this.msg);
            this.msg = '';
            const chatLogDiv = this.$refs.scroll;
            chatLogDiv.scrollTop = chatLogDiv.scrollHeight
        }
    }
}
</script>