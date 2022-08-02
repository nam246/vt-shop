<template>
  <div class="profile">
    <div class="profile-info">
      <h1>Infomation</h1>
      <form class="profile-form">
        <label for="name">Name</label>
        <input type="text" :value="currentUser.firstName + ' ' + currentUser.lastName">
        <label for="email">Email</label>
        <input type="text" :value="currentUser.email">
        <label for="phone-number">Phone Number</label>
        <input type="text" :value="currentUser.phoneNumber">
        <button @click.prevent="updateAvatar">Save Changes</button>
      </form>
    </div>
    <!-- <div class="profile-cart">
      <h1>Your cart</h1>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useStore from '../store/products'
import useUserStore from '../store/user'
import { useRoute, useRouter } from 'vue-router'
import { onAuthStateChanged } from "firebase/auth"
import { collection, query, where, getDocs } from "firebase/firestore"
import { auth, db } from '../firebase/firebaseInit'

const route = useRoute()
const router = useRouter()
const prop = defineProps(['id'])
const store = useStore()
const cart = store.cart
const userStore = useUserStore()
const currentUser = userStore.currentUser

const file = ref('')
const fileChange = (e) => {
  file.value = e.target.files[0]
  console.log(file);
}

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const q = query(collection(db, "users"), where("email", "==", user.email));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      currentUser.firstName = doc.data().firstName
      currentUser.lastName = doc.data().lastName
      currentUser.email = doc.data().email
      currentUser.phoneNumber = doc.data().phoneNumber
    })
  } else {
    router.push('/')
  }
})

const userCart = () => {

}

</script>

<style lang="scss" scoped>
.profile {
  background-color: var(--third-bg-color);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .profile-info {
    display: flex;
    flex-direction: column;
    padding: 25px;

    .profile-form {
      display: flex;
      flex-direction: column;

      .profile-avatar {
        border: 1px solid #000;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        padding: 2px;
        margin: 24px auto;
      }

      input {
        padding: 12px;
        margin-bottom: 5px;
        border-radius: 5px;
        width: 15rem;
        outline: 2px var(--grey) solid;
        border: none;
      }

      input[type="file"] {
        display: none;
      }
    }
  }
}
</style>