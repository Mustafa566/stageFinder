# Faq page
  - En het verstuurd naar de database.


  - Internship discrimination
  - https://www.s-bb.nl/formulier-stagediscriminatie

# sorteren op date intership nieuwste bovenaan
  Date.now() function add index

# Responsive die nog gedaan moeten worden.
  - Homepage
  - faq
  - Login kleine stukje
  - profile

# Profile.vue
  - Check if the currentUser the same is an take only their own information.

# Admin.vue
  - Show all users.


------
# This code says if the current email == is admin@gmail.com show this. app.vue created()

if(firebase.auth().currentUser.email == 'admin@gmail.com') {
  this.isLoggedIn = true;
  this.currentUser = firebase.auth().currentUser.email;
}