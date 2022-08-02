<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, watchEffect, onMounted } from 'vue'
import { auth } from './firebase/firebaseInit'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import useStore from './store/products'


const route = useRoute()
const router = useRouter()
const showNav = ref(null)
const isLogged = ref(false)

const checkRoute = () => {
    if(route.name === 'Login' || route.name === 'Register') {
        showNav.value = false
        return
    }
    showNav.value = true
}

const logout = () => {
    signOut(auth).then(() => {
        alert('logged out successfully')
    })
}

let userId = ''
const toUserView = () => {
    router.push(`/user/${userId}`)
}

const store = useStore()
const products = store.products
onMounted(() => {
    store.getAllProducts(products)
})

onMounted(() => {
    onAuthStateChanged(auth, user => {
        if(user) {
            isLogged.value = true
            userId = user.uid
            // console.log(auth.currentUser.email)
        }
        else {
            isLogged.value = false
        }
    })
})

watchEffect(checkRoute)

</script>

<template>
  <div class="app">
    <Header v-if="showNav" :isLogged="isLogged" @sign_out="logout" @to_user_view="toUserView"/>
    <Suspense>
        <router-view />
    </Suspense>
    <Footer v-if="showNav"/>
  </div>
</template>

<style lang="scss">
@import './assets/css/grid.scss';
:root {
    --main-bg-color: #fff;
    --second-bg-color: #f5f5f5;
    --third-bg-color: #e3e3e3;
    --grey: #4b4b4b;
    --black: #000;
    --red: #c0392b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
    --top-header-size: 30px;
    --mid-header-size: 80px;
    --bottom-header-size: 45px;
    --btn-bg: #000;
    --btn-border-color: #000;
    --btn-color: #fff;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    position: relative;
    background-color: var(--main-bg-color);
    overflow-x: hidden;
}

button {
    cursor: pointer;
}

.btn-flat {
    display: inline-block;
    border: 2px solid var(--btn-border-color);
    background-color: var(--btn-bg);
    color: var(--btn-color);
    padding: 15px 35px;
    font-size: 15px;
    outline: 0;
    font-weight: 600;
    text-transform: uppercase;
}

.btn-hover {
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var(--btn-color);
        color: var(--btn-bg);
    }
}

a {
    display: inline-block;
    text-decoration: none;
    color: unset;
}

li {
    list-style-type: none;
}

img {
    max-width: 100%;
}

.container {
    max-width: 1366px;
    margin: auto;
    padding: 0 20px;
    position: relative;
}

.bg-second {
    background-color: var(--second-bg-color);
}

.bg-main {
    background-color: var(--main-bg-color);
}

.text-red {
    color: var(--red);
}

// responsive

</style>
