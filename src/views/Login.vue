<template>
  <div class="login" >
    <form @submit.prevent="signIn">
      <h1>Login</h1>
      <input type="email" placeholder="Email address" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <input type="submit" value="Login">
      <p>No account? Please <router-link :to="{ name: 'Register' }">Register</router-link> first.</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebaseInit'

const email = ref('')
const password = ref('')
const router = useRouter()

const signIn = async () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(userCredential => {
      const user = userCredential.user
      // console.log(user);
      router.push('/')
    })
    .catch(error => {
      console.log(error.message);
    })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: var(--second-bg-color);

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 24px;
    width: 33.3%;
    background-color: var(--main-bg-color);
    border-radius: 5px;

    input {
      outline: none;
      padding: 0.5rem;
    }

    a {
      text-decoration: underline;
    }
  }
}
</style>