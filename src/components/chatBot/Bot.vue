<template>
    <div class="container">
        <div class="container max">
            <div class="container">
                <div class="row ml-0 mt-3">
                    <p>{{this.know.welkom}}</p>
                </div>
                <p id="chatLog" class="chatLog"></p><br>
            </div>
        </div>
        <div class="row mt-4">
            <input id="userBox" class="inputChat" type="text" @keyup.enter="talk()" v-model="msg" required>
            <input type="submit" class="btn btn-primary mt-2" @click="talk()">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            know: {
                "welkom" : "Welcome I will help you to answer your questions. If you want more info type 'help'. ",
                "login" : "log",
                "register" : ":)",
                "add internship" : "test answer"
            },
            msg: ''
        }
    },
    methods: {
        talk() {
            var user = this.msg
            document.getElementById("chatLog").innerHTML += user + "<br>";
            if (user != '') {
                if (user in this.know) {
                    document.getElementById("chatLog").innerHTML += this.know[user] + "<br>";
                } else {
                    document.getElementById("chatLog").innerHTML += "I don't understand...<br>";
                }
            } else {
                alert('Type text in');
            }
            this.msg = '';
            console.log(this.msg);
        } 
    }
}
</script>