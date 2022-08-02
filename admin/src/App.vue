<template>
  <div class="admin">
    <div class="page-wrapper default-theme" :class="isOpen == true ? 'toggled' : ''">
      <button id="show-sidebar" @click="toggleMenu" class="btn btn-sm btn-dark">
          <span class="material-icons">menu</span>
      </button>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
            <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <a href="#">VT Shop | Admin</a>
            <div id="close-sidebar" @click="toggleMenu">
                <span class="material-icons">close</span>
            </div>
          </div>
            <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header">
            <div class="user-info">
                <span class="user-name">
                    <strong>Admin</strong>
                </span>
                <span class="user-role"> {{ currentUser }} </span>
            </div>
          </div>
          <div class=" sidebar-item sidebar-menu">
            <div class="header-menu"><span>Menu</span></div>
            <div class="items">
              <div class="item">
                <router-link :to="{ name: 'Dashboard' }">
                  <span class="material-icons">analytics</span>
                  <span>Dashboard</span>
                </router-link>
              </div>
              <div class="item">
                <router-link :to="{ name: 'AddProducts' }">
                  <span class="material-icons">inventory_2</span>
                  <span>Add Products</span>
                </router-link>
              </div>
              <div class="item">
                <router-link :to="{ name: 'Orders' }">
                  <span class="material-icons">local_shipping</span>
                  <span>Orders</span>
                </router-link>
              </div>
              <div class="item">
                <router-link :to="{ name: 'Profile' }">
                  <span class="material-icons">manage_accounts</span>
                  <span>Profile</span>
                </router-link>
              </div>
              <div class="item">
                <a href="#" @click="logout">
                  <span class="material-icons">power_settings_new</span>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </div>
            <!-- sidebar-menu  -->
        </div>
      </nav>
        <!-- sidebar-content  -->
      <main class="page-content">
        <Suspense>
          <router-view />
        </Suspense>
      </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script setup>
import { auth } from './firebase/firebaseInit'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const logout = async () => {
  await  signOut(auth).then(() => {
    alert('logged out successfully')
    // router.push('/admin')
  })
}

const router = useRouter()
const currentUser = ref('')

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    currentUser.value = user.email;
    // ...
  } 
  // else {
  //   // User is signed out
  //   // ...
  //   router.push('/admin')
  // }
});

const isOpen = ref(true)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}


</script>

<style lang="scss">
@import './assets/css/admin.scss';
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

.items {
  display: flex;
  flex-direction: column;
  align-items: left;

  .item {
    padding: 12px;
    
    span {
      margin-right: 12px;
    }
  }
}
</style>
