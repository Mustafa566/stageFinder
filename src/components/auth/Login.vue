<template>
    <div class="main">
        <div class="cont">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form class="form sign-in" @submit.prevent="submit">
                <h2 class="h2 text-center">Welcome back,</h2>
                <label>
                    <span>Email</span>
                    <input 
                    class="input"
                    type="email" 
                    name="email"
                    value
                    required
                    autofocus
                    v-model="email"/>
                </label>
                <label>
                    <span>Password</span>
                    <input 
                    class="input"
                    type="password" 
                    name="password"
                    required
                    v-model="password"/>
                </label>
                <button type="button" @click="login" class="submit button">Sign In</button>
                <hr>
            </form>
            <div class="sub-cont">
                <div v-if="error" class="alert alert-danger">{{error}}</div>
                <div class="img">
                    <div class="img__text m--up">
                        <h2>New here?</h2>
                        <p>Sign up and discover great amount of new opportunities!</p>
                    </div>
                    <div class="img__text m--in">
                        <h2>One of us?</h2>
                        <p>If you already has an account, just sign in. We've missed you!</p>
                    </div>
                    <div @click="slide" class="img__btn">
                        <span class="m--up">Sign Up</span>
                        <span class="m--in">Sign In</span>
                    </div>
                </div>
                <form class="form sign-up" @submit.prevent="submit">
                    <h2 class="h2 text-center">Time to feel like home,</h2>
                    <label>
                        <span>Email</span>
                        <input 
                        id="email"
                        class="input"
                        type="email"
                        name="email"
                        value
                        required
                        autofocus
                        v-model="email" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input 
                        type="password" 
                        class="input"
                        @input="p_len" 
                        name="password"
                        required
                        v-model="password"/>
                    </label>
                    <span v-bind:class="{valid_password_length: valid_password_length , show_password_length: typed}" 
                        class="password_length">
                        {{password_length}}
                    </span>
                    <div class="lnu_container">
                        <p v-bind:class="{ uppercase_valid: contains_uppercase }">Uppercase</p>
                        <p v-bind:class="{ lovercase_valid: contains_lovercase }">Lowercase</p>
                        <p v-bind:class="{ number_valid: contains_number }">Number</p>
                    </div>
                    <div class="valid_password_container" v-bind:class="{show_valid_password_container : valid_password }">
                        <svg width="100%" height="100%" viewBox="0 0 140 100">
                          <path class="tick" v-bind:class="{checked: valid_password }" d="M0, 20 l25,40 l95,-70" />
                        </svg>
                    </div>
                    <button type="button" @click="register" class="submit button">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
/* eslint-disable */
export default {
  data() {
    return {
      title: 'Login',
      email: '',
      password: '',
      password_length: 0,
      typed: false,
      contains_lovercase: false,
      contains_number: false,
      contains_uppercase: false,
      valid_password_length: false,
      valid_password: false
    };
  },
  head: {
		title: function () {
			return {
				inner: this.title
			}
		}
	},
  methods: {
    p_len() {
      this.password_length = this.password.length;
      if (this.password_length > 7) {
        this.valid_password_length = true;
      } else {
        this.valid_password_length = false;
      }

      if (this.password_length > 0) {
        this.typed = true;
      } else {
        this.typed = false;
      }

      this.contains_lovercase = /[a-z]/.test(this.password);
      this.contains_number = /\d/.test(this.password);
      this.contains_uppercase = /[A-Z]/.test(this.password);

      // Check if the password is valid
      if (this.contains_lovercase == true && this.contains_number == true) {
        this.valid_password = false;
      if (this.contains_uppercase == true && this.valid_password_length == true)
        this.valid_password = true;
      } else {
        this.valid_password = false;
      }
    },
    register(e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('Account created for ' + this.email);
          this.$router.push('/ProfileInfo');
          location.reload();
        },
        err => {
          alert(err.message);
        })
      e.preventDefault();
    },
    login(e) {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('You are logged in as ' + this.email);
          this.$router.push('/index');
          location.reload();
        },
        err => {
          alert(err.message);
        })
      e.preventDefault();
    },
    slide() {
        document.querySelector('.img__btn').addEventListener('click', function() {
            document.querySelector('.cont').classList.toggle('s--signup');
        });
    }
  }
};
</script>

<style lang="scss">
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
  .cont {
    width: 375px !important;
    height: 1250px !important;
  }
  .form {
    width: 400px !important;
    padding: 100px 30px 0 !important;
  }
  .h2 {
    font-size: 30px;
  }
  .sub-cont {
    overflow: visible !important;
    top: 700px !important;
  }
  hr {
    margin-top: 12rem !important;
    margin-right: 20px !important;
    border-top: 1px solid rgba(0, 0, 0, 0.27) !important;
    display: block !important;
  }
}

@media (min-width: 767px) and (max-width: 1000px) {
  .cont {
    width: 768px !important;
  }
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

hr {
  display: none;
}

body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  background: #ededed;
}

.h2 {
    margin-bottom: 90px;
}

input, button {
  border: none;
  outline: none;
  background: none;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

$contW: 900px;
$imgW: 260px;
$formW: $contW - $imgW;
$switchAT: 1.2s;

$inputW: 260px;
$btnH: 36px;

$diffRatio: ($contW - $imgW) / $contW;

@mixin signUpActive {
  .cont.s--signup & {
    @content;
  }
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.cont {
  overflow: hidden;
  position: relative;
  width: $contW;
  height: 550px;
  margin: 0 auto 100px;
  background: #fff;
}

.form {
  position: relative;
  width: $formW;
  height: 100%;
  transition: transform $switchAT ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: $formW;
  top: 0;
  width: $contW;
  height: 100%;
  padding-left: $imgW;
  background: #fff;
  transition: transform $switchAT ease-in-out;

  @include signUpActive {
    transform: translate3d($formW * -1,0,0);
  }
}

.button {
  display: block;
  margin: 0 auto;
  width: $inputW;
  height: $btnH;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: $imgW;
  height: 100%;
  padding-top: 360px;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: $contW;
    height: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg');
    background-size: cover;
    transition: transform $switchAT ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }

  @include signUpActive {
    &:before {
      transform: translate3d($formW,0,0);
    }
  }

  &__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    transition: transform $switchAT ease-in-out;

    h2 {
      margin-bottom: 10px;
      font-weight: normal;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }

    &.m--up {

      @include signUpActive {
        transform: translateX($imgW*2);
      }
    }

    &.m--in {
      transform: translateX($imgW * -2);

      @include signUpActive {
        transform: translateX(0);
      }
    }
  }

  &__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: $btnH;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    
    &:after {
      content: '';
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 30px;
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform $switchAT;
      
      &.m--in {
        transform: translateY($btnH*-2);
        
        @include signUpActive {
          transform: translateY(0);
        }
      }
      
      &.m--up {
        @include signUpActive {
          transform: translateY($btnH*2);
        }
      }
    }
  }
}

h2 {
  width: 100%;
  font-size: 26px;
}

label {
  display: block;
  width: $inputW;
  margin: 25px auto 0;
  text-align: center;

  span {
    font-size: 12px;
    color: #cfcfcf;
    text-transform: uppercase;
  }
}

.input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  text-align: center;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background-image: linear-gradient(135deg,#d98618 0%,#c20016 100%);
  text-transform: uppercase;
}

.sign-in {
  transition-timing-function: ease-out;

  @include signUpActive {
    transition-timing-function: ease-in-out;
    transition-duration: $switchAT;
    transform: translate3d($formW,0,0);
  }
}

.sign-up {
  transform: translate3d($contW * -1,0,0);

  @include signUpActive {
    transform: translate3d(0,0,0);
  }
}


/* PASSWORD LENGHT */
.input_container {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
  padding-right: 20px;
}

.password_length {
  padding: 2px 10px;
  position: absolute;
  top: 55%;
  right: 29%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background: #FBD490;
  color: rgba(71, 87, 98, .8);
  border-radius: 4px;
  font-size: 13px;
  display: none;
  -webkit-transition: all .1s;
  transition: all .1s;
}

.valid_password_length {
  background: #00AD7C;
  color: rgba(255, 255, 255, .9);
}

.show_password_length {
  display: block;
}

.lnu_container {
  display: block;
  margin: 10px auto;
  width: 320px;
  height: auto;
  display: flex;
  justify-content: space-between;
}

.lnu_container p {
  width: 100px;
  height: auto;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  border-radius: 2px;
  color: rgba(71, 87, 98, .8);
  background: linear-gradient(to right, #00AD7C 50%, #eee 50%);
  background-size: 201% 100%;
  background-position: right;
  -webkit-transition: background .3s;
  transition: background .3s;
}

.lovercase_valid,
.number_valid,
.uppercase_valid {
  background-position: left !important;
  color: rgba(255, 255, 255, .9) !important;
}

.valid_password_container {
  display: block;
  margin: 10px auto;
  border-radius: 4px;
  position: relative;
  background: #00AD7C;
  width: 20px;
  height: 20px;
  visibility: hidden;
  opacity: 0;
}

.show_valid_password_container {
  visibility: visible;
  opacity: 1;
}

.tick {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: white;
  stroke-width: 25;
  stroke-linecap: round;
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
}

.checked {
  -webkit-animation: draw 0.5s ease forwards;
  animation: draw 0.5s ease forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
</style>