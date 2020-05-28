<template>
    <div class="main">
        <div class="cont">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form class="form sign-in" @keyup.enter="login()" @submit.prevent="submit">
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
                <router-link :to="{ name: 'ForgotPassword' }" class="fgtPass nav-link">Forgot my password ?</router-link>
                <button type="button" @click="login" class="submit button">Sign In</button>
                <hr>
                <div v-if="!isHidden" class="loader loader--style3" title="2">
                  <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="60px" height="60px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                  <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,
                  14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                    <animateTransform attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="0 25 25"
                      to="360 25 25"
                      dur="0.6s"
                      repeatCount="indefinite"/>
                    </path>
                  </svg>
                </div>
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
                <form class="form sign-up" @submit.prevent="submit" @keyup.enter="register()">
                    <h2 class="h2 text-center">Register</h2>
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
                        name="password"
                        required
                        v-model="password"/>
                    </label>
                    <button type="button" @click="register" class="submit button">Sign Up</button>
                    <hr>
                    <div v-if="!isHidden" class="loader loader--style3" title="2">
                      <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="60px" height="60px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                      <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,
                      14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                        <animateTransform attributeType="xml"
                          attributeName="transform"
                          type="rotate"
                          from="0 25 25"
                          to="360 25 25"
                          dur="0.6s"
                          repeatCount="indefinite"/>
                        </path>
                      </svg>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      isHidden: true,
      title: 'Login',
      email: '',
      password: ''
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
    register(e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(/* eslint-disable */user => {
           setTimeout(() => {
            this.$router.push('/ProfileInfo');
            location.reload();
          }, 3000);
          this.isHidden = false;
        },
        err => {  
          alert(err.message);
        })
      e.preventDefault();
    },
    login(e) {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(/* eslint-disable */user => {
          setTimeout(() => {
            this.$router.push('/index');
            location.reload();
          }, 3000);
        this.isHidden = false;
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
  margin-top: 10px;
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

.loader{
  margin: 0px auto;
  height: 100px;
  text-align: center;
  padding: 1em;
}

svg path, svg rect{
  fill: #FF6700;
}

.fgtPass, .fgtPass:hover {
  text-align: center;
  color: #FF6700;
  margin-top: 20px;
}
</style>