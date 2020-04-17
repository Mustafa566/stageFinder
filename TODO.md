# Responsive die nog gedaan moeten worden.
  - Homepage
  - faq
  - Login kleine stukje
  - profile

# Profile.vue
  - Check if the currentUser the same is an take only their own information.

# Admin.vue
  - Show all users.


# InternshipDetails.vue
  - Print only the id of the data

------

# This code says if the current email == is admin@gmail.com show this. app.vue created()
  if(firebase.auth().currentUser.email == 'admin@gmail.com') {
    this.isLoggedIn = true;
    this.currentUser = firebase.auth().currentUser.email;
  }