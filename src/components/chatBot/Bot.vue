<template>
    <div class="container">
        <p>{{this.know.welkom}}</p>
        <p id="chatLog"></p><br>
        <p id="user"></p>
        <input id="userBox" class="input" type="text" v-model="msg" v-on:submit.prevent="talk()">
        <input type="submit" @click="talk()">
    </div>
</template>

<script>
export default {
    data() {
        return {
            know: {
                "welkom" : "Welkom",
                "how are you?" : "good",
                "ok" : ":)"
            },
            msg: ''
        }
    },
    methods: {
        talk() {
            var user = document.getElementById("userBox").value;
            document.getElementById("userBox").value = "";
            document.getElementById("chatLog").innerHTML += user+"<br>";
            if (user in this.know) {
                document.getElementById("chatLog").innerHTML += this.know[user]+"<br>";
            } else {
                document.getElementById("chatLog").innerHTML += "I don't understand...<br>";
            }
        } 
    }
}
</script>