<template>
  <div class="header">
    <header>
        <!-- mobile menu -->
        <div class="mobile-menu bg-second">
            <router-link :to="{ name: 'Home' }" class="mb-logo">VTShop</router-link>
            <span class="mb-menu-toggle" id="mb-menu-toggle">
                <span class="material-icons">menu</span>
            </span>
        </div>
        <!-- end mobile menu -->
        <!-- main header -->
        <div class="header-wrapper" id="header-wrapper">
            <span class="mb-menu-toggle mb-menu-close" id="mb-menu-close">
                <i class='bx bx-x'></i>
            </span>
            <!-- top header -->
            <div class="bg-second">
                <div class="top-header container">
                    <ul class="devided">
                        <li>
                            <a href="#">+84984041242</a>
                        </li>
                        <li>
                            <a href="#">trungvuhoang2005@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end top header -->
            <!-- mid header -->
            <div class="bg-main">
                <div class="mid-header container">
                    <router-link :to="{ name: 'Home' }" class="logo">VTShop</router-link>
                    <div class="search">
                        <input type="text" placeholder="Search">
                        <span class="material-icons">search</span>
                    </div>
                    <ul class="user-menu">
                        <li><router-link to="#"><span class="material-icons">notifications</span></router-link></li>
                        <li>
                            <router-link :to="{ name: 'Login'}" v-show="!isLogged"><span class="material-icons">login</span></router-link>
                            <div v-show="isLogged" class="account-menu">
                                <span class="material-icons" @click="toggleAccountMenu">account_circle</span>
                                <ul class="account-menu-dropdown" v-if="isToogle">
                                    <li @click.prevent="toUserView"><span class="material-icons">account_circle</span>User</li>
                                    <li @click.prevent="signOut"><span class="material-icons">logout</span>Logout</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <router-link :to="{ name: 'Checkout'}">
                                <span class="material-icons">shopping_bag</span>
                                <span class="cart-counter">{{ store.cart.length }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- end mid header -->
            <!-- bottom header -->
            <div class="bg-second">
                <div class="bottom-header container">
                    <ul class="main-menu">
                        <li><router-link :to="{ name: 'Home' }">home</router-link></li>
                        <!-- mega menu -->
                        <li class="mega-dropdown">
                            <router-link :to="{ name: 'AllProducts' }">Shop<span class="material-icons">expand_more</span></router-link>
                            <div class="mega-content">
                                <div class="row">
                                    <div class="col-3 col-md-12">
                                        <div class="box">
                                            <h3>All Product</h3>
                                            <ul>
                                                <li><a href="#">Keyboard</a></li>
                                                <li><a href="#">Monitor</a></li>
                                                <li><a href="#">Mouse</a></li>
                                                <li><a href="#">Headphone</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- end mega menu -->
                        <li><router-link :to="{ name: 'Blogs' }">blog</router-link></li>
                        <li><router-link to="#">contact</router-link></li>
                    </ul>
                </div>
            </div>
            <!-- end bottom header -->
        </div>
        <!-- end main header -->
    </header>
    <!-- end header -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useStore from '../store/products'

const store = useStore()


const emit = defineEmits(['sign_out', 'to_user_view'])
defineProps(['isLogged'])

function signOut() {
    emit('sign_out')
}

function toUserView() {
    emit('to_user_view')
}

const isToogle = ref(false)

const toggleAccountMenu = () => {
    isToogle.value = !isToogle.value
}

</script>

<style lang="scss" scoped>

.mobile-menu {
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    display: none;

        .mb-menu-close {
            display: none;
        }
}


.top-header {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
        display: flex;

        &.devided > li {
            margin-right: 10px;
            padding-right: 10px;
            border-right: 1px solid;
            list-style-type: none;
        }

        &.devided > li:last-child {
            border-right: none;
        }
    }

    a {
        font-size: 13px;
    }
}

/* dropdown */
.dropdown {
    position: relative;

    .material-icons {
        font-size: 12px;
    }

    &:hover {
        .dropdown-content {
            display: flex;
            top: 100%;
            opacity: 1;
            visibility: visible;
        }
    }
}


.dropdown-content {
    /* display: flex; */
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: calc(100% + 10px);
    background-color: #fff;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0;
    transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 2;
    text-decoration: none;
    list-style-type: none;
}

.dropdown-content > li > a {
    padding: 10px;
}

.dropdown-content > li:hover {
    color: var(--red);
}
/* end dropdown */

.mid-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    background-color: var(--main-bg-color);

    .logo {
        font-size: 40px;
        font-weight: 700;
    }

    .mb-logo {
        font-size: 25px;
        font-weight: 700;
    }

    .search {
        width: 600px;
        height: 40px;
        position: relative;

        input {
            height: 100%;
            width: 100%;
            font-size: 16px;
            outline: 0;
            padding: 0 20px;
            border-radius: 10px;
            border: 0;
            background-color: var(--second-bg-color);
        }

        span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            cursor: pointer;
            font-size: 25px;
        }
    }

    .user-menu {
        display: flex;
        
        .material-icons {
            font-size: 30px;
        }

        & > li > a {
            font-size: 30px;
            margin-left: 15px;
        }

        .account-menu {
            position: relative;
            cursor: pointer;

            .material-icons {
                margin-left: 15px;
            }

            .account-menu-dropdown {
                position: absolute;
                border-radius: 5px;
                background-color: var(--second-bg-color);
                z-index: 1;
                width: 8rem;
                padding: 8px;
                right: 0;

                li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }

        .cart-counter {
            position: absolute;
            width: 30px;
            height: 30px;
            background-color: var(--second-bg-color);
            top: 2px;
            right: 8px;
            padding: 5px;
            border-radius: 50%;
            font-size: 18px;
            text-align: center;
        }
    }

}


.bottom-header {
    display: flex;
    align-items: center;
    justify-content: center;

    .main-menu {
        display: flex;
        height: var(--bottom-header-size);

        & > li > a {
            display: flex;
            align-items: center;
            margin: 0 20px;
            font-weight: 600;
            height: 100%;
            text-transform: uppercase;
        }

        & > li {
            border-bottom: 2px solid transparent;
            border-top: 2px solid transparent;
        }

        & > li:hover {
            border-bottom: 2px solid var(--red);
        }
        /* mega menu */
        .mega-dropdown {

            .mega-content {
                opacity: 0;
                visibility: hidden;
                position: absolute;
                // left: 0;
                background-color: var(--main-bg-color);
                width: 30%;
                top: calc(100% + 100px);
                z-index: 2;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0;
                transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);

                h3 {
                    margin: 20px 0;
                    padding-left: 20px;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                }

                ul > li > a {
                    font-weight: normal;
                    padding: 10px 0;
                    border-bottom: 2px dashed #f5f5f5;
                    transition: padding-left 0.2s ease-in-out;
                    margin: 0 20px;
                    text-transform: capitalize;

                    &:hover {
                        padding-left: 10px;
                    }
                }

                ul > li {
                    border-bottom: 2px solid transparent;

                    &:hover {
                        border-bottom: 2px solid var(--red);
                    }
                }


            }

            &:hover {
                .mega-content {
                    opacity: 1;
                    visibility: visible;
                    top: 100%;
                }
            }
        }
        /* end mega menu */
    }
}
</style>