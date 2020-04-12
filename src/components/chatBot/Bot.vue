<template>
    <div class="container">
        <div class="container max">
            <div class="container">
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
            <input type="submit" class="btn btn-primary mt-2 ml-2" @click="talk()">
        </div>
    </div>
</template>

<script>
import json from './Botinfo.json';
export default {
    data() {
        return {
            test: this.json,
            know: {
                'welkom' : 'Welcome I will help you to answer your questions. If you want more info type "help".',
                'help' : 'Working...',
                'how do you login' : 'If you are on the "Homepage" you see on the top a "Login" button click on it, ' + 
                                     'sign in with your email and password and you logged in.',
                'how do you register' : '1. Click on "login" on the navbar.' +
                                        '2. On the right side you see a "SIGN UP" button click on the button and you can register.',
                'add internship' : '1. You need a account and you need to be logged in.' + '<br>' +
                                   '2. When you logged in you see above your email on the right side you see "Add internship" ' +
                                   'click on it.' + '<br>' +
                                   '3. Then you see some empty field you need to fill with your company information ' +
                                   '4. You can see how it is on the "Preview design" and if everthing is good click on "Add internship".',
                'edit a internship' : '1. Go to your "internship page". Their you see a edit button if you click on it you can edit ' +
                                      'your internship information.'
            },
            msg: ''
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
                    document.getElementById('chatLog').innerHTML += 'I don\'t understand...<br>' + '<br>';
                }
            } else {
                alert('Type text in');
            }
            window.scrollTo(0, 500);
            this.msg = '';
            console.log(this.msg);
        }
    }
}
</script>