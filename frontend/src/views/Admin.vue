<template>
  <div class="home">
      This is admin view
      <button class="googleSignIn" @click="signOut()">Log out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from '../helpers/firebaseconfig.js'

export default {
    
  name: 'Admin',
  components: {
    
  }, methods : {
    signOut () {
      return firebase.auth().signOut()
    }
  }
}
</script>
