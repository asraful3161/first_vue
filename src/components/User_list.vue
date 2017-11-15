<template>
  <div class="container">
    <div class="row">


      <div class="d-flex p-2 bg-dark">
        <b-form inline @submit="onSubmit">

          <label class="sr-only" for="name">Name</label>
          <b-input class="mb-2 mr-sm-2 mb-sm-0" id="name" placeholder="Insert Name" required v-model="newUser.name"/>

          <label class="sr-only" for="email">Email</label>
          <b-input class="mb-2 mr-sm-2 mb-sm-0" id="email" placeholder="Inser email" required  v-model="newUser.email"/>


          <label class="sr-only" for="password">Password</label>
          <b-input class="mb-2 mr-sm-2 mb-sm-0" id="password" placeholder="Password" required  v-model="newUser.password"/>



          <b-button variant="primary" type="submit">Submit</b-button>
        </b-form>
      </div>



    </div>
    <div class="row">
      <b-table dark :items="users" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>

import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyAPE6Hnra58C_wCBNowoMUpp-emflQYIRI",
  authDomain: "order-collection-7de8b.firebaseapp.com",
  databaseURL: "https://order-collection-7de8b.firebaseio.com",
  projectId: "order-collection-7de8b",
  storageBucket: "order-collection-7de8b.appspot.com",
  messagingSenderId: "327573785279"
}

let app=Firebase.initializeApp(config);

let db=app.database()

let usersRef=db.ref('users')

export default {
  name: 'User_list',
  data(){
    return {
      fields: ['name', 'email', 'password'],
      newUser:{
        name:'',
        email:'',
        password:''
      }
    }
  },
  firebase:{
    users: usersRef
  },
  methods:{
    onSubmit(evt) {
      evt.preventDefault();
      usersRef.push(this.newUser);
      this.newUser={
        name:'',
        email:'',
        password:''
      }
    }
  }
}
</script>
