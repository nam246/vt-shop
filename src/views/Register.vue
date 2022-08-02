<template>
  <div class="register">
    <form @submit.prevent="register">
      <h1>Register</h1>
      <input type="text" placeholder="First Name" v-model="user.firstName">
      <input type="text" placeholder="Last Name" v-model="user.lastName">
      <input type="text" placeholder="Phone Number" v-model="user.phoneNumber">
      <input type="email" placeholder="Email" v-model="user.email">
      <input type="password" placeholder="Password" v-model="user.password">
      <input type="submit" value="Register">
      <p>Go to <router-link :to="{ name: 'Home' }">Home</router-link>.</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { collection, addDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from '../firebase/firebaseInit'

const router = useRouter()

const user = ref({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: ''
})

const register = async () => {
  if( user.value.firstName !== '' &&
      user.value.lastName !== '' &&
      user.value.phoneNumber !== '' &&
      user.value.email !== '' &&
      user.value.password !== ''
    ) {
      // this.error = false;
      // this.errorMsg = '';
      createUserWithEmailAndPassword(auth, user.value.email, user.value.password);

      addDoc(collection(db, "users"), {
        firstName: user.value.firstName,
        lastName: user.value.lastName,
        phoneNumber: user.value.phoneNumber,
        email: user.value.email
      });

      router.push({ name: 'Home' });
      return
    }
      // this.error == true;
      // this.errorMsg = 'Please fill out all the field';
}

</script>

<style lang="scss" scoped>
.register {
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