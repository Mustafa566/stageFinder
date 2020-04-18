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

# Internship.vue
  - Fill data in.
  https://www.stagemarkt.nl/Zoeken/Home/Resultaten?t=applicatie+ontwikkelaar&s=&z=&l=Nederland&b=False&c=&lw=&n=&rg=&i=&pg=1&srt=&e=false&ToonOpKaart=False&ViewType=Lijst&SeedValue=18&LeerbedrijfId=0&p=

------

# This code says if the current email == is admin@gmail.com show this. app.vue created()
  if(firebase.auth().currentUser.email == 'admin@gmail.com') {
    this.isLoggedIn = true;
    this.currentUser = firebase.auth().currentUser.email;
  }