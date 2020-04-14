<template>
    <div class="container">
        <div class="container max" ref="scroll">
            <div class="container con">
                <div class="row ml-0 mt-3">
                    <p>{{this.know.welkom}}</p>
                </div>
               <p id="chatLog" class="chatLog font-weight-bold"></p><br>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <input id="userBox" class="inputChat" type="text" @keyup.enter="talk()" v-model="msg" required>
            </div>
            <div type="submit" value="Send" class="btn btn-primary mt-2 ml-2" @click="talk()">Send<img class="sendIcon" src="@/assets/icons/send.png"></div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line
import json from './info.json';
export default {
    data() {
        return {
            title: 'Chat bot',
            file: this.json,
            know: {
                'welkom' : '📍Welcome I will help you to answer your questions. If you want more info type "help".📍',
                'help' : 'These are the questions that can be answerd: <br>' + 
                         '1️⃣ how do you login <br>' +
                         '2️⃣ how do you register <br>' +
                         '3️⃣ how to add a internship <br>' +
                         '4️⃣ edit a internship <br>' +
                         '5️⃣ who are you',
                'how do you login' : 'If you are on the "Homepage" you see on the top a "Login" button click on it, ' + 
                                     'sign in with your email and password and you logged in.',
                'how do you register' : '1. Click on "login" on the navbar.' +
                                        '2. On the right side you see a "SIGN UP" button click on the button and you can register.',
                'how to add a internship' : '1. You need a account and you need to be logged in.' + '<br>' +
                                            '2. When you logged in you see above your email on the right side you see "Add internship" ' +
                                            'click on it.' + '<br>' +
                                            '3. Then you see some empty field you need to fill with your company information ' +
                                            '4. You can see how it is on the "Preview design" and if everthing is good click on "Add internship".',
                'edit a internship' : '1. Go to your "internship page". Their you see a edit button if you click on it you can edit ' +
                                      'your internship information.',
                'who are you' : 'I am your DAD! Look behind 😀'
            },
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
                if (user in this.know) {
                    document.getElementById('chatLog').innerHTML += this.know[user] + "<br>" + "<br>";
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