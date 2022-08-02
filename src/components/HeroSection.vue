<template>
    <div class="hero">
        <div class="slider">
            <div class="container">
                <!-- slide item -->
                <div class="slide" 
                    :class="index == currentSlide ? 'active' : ''"
                    v-for="(product, index) in products" :key="index"
                >
                    <div class="info">
                        <div class="info-content">
                            <h3 class="top-down">
                                {{ product.title }}
                            </h3>
                            <h2 class="top-down trans-delay-0-2">
                                {{ product.slogan }}
                            </h2>
                            <p class="top-down trans-delay-0-4">
                                {{ product.description }}
                            </p>
                            <div class="top-down trans-delay-0-6">
                                <button class="btn-flat btn-hover" @click="toProductDetail(product.title)">
                                    <span>shop now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="img top-down">
                        <img :src="product.images[0]">
                    </div>
                </div>
                <!-- end slide item -->
            </div>
            <!-- slider controller -->
            <button class="slide-controll slide-next" @click="nextSlide">
                <span class="material-icons">navigate_next</span>
            </button>
            <button class="slide-controll slide-prev" @click="prevSlide">
                <span class="material-icons">navigate_before</span>
            </button>
            <!-- end slider controller -->
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import useStore from '../store/products'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const products = store.getHeroProduct


const router = useRouter()
const route = useRoute()
const toProductDetail = (id) => {
    router.push(`/product/${id}`)
}

//slider
const currentSlide = ref(0)

const nextSlide= () => currentSlide.value = currentSlide.value + 1 === products.length ? 0 : currentSlide.value + 1
const prevSlide = () => currentSlide.value = currentSlide.value - 1 < 0 ? products.length - 1 : currentSlide.value - 1


</script>

<style lang="scss" scoped>
.box {
    padding: 20px;
}

.hero {
    height: calc(
        100vh -
            (
                var(--top-header-size) + var(--mid-header-size) +
                    var(--bottom-header-size)
            )
    );
    padding: 0 20px;

    .slider {
        height: 100%;
        position: relative;
    
        .container {
            height: 100%;
            position: relative;

            .slide {
                height: 0;
                position: absolute;
                display: flex;
                inset: 0;
                overflow: hidden;
                visibility: hidden;

                &.active {
                    visibility: visible;
                    height: 100%;
                }

                .info {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: 100%;

                    .info-content {
                        h2 {
                            margin: 10px 0 35px;
                            font-size: 70px;
                        }

                        button {
                            margin-top: 30px;
                        }
                    }

                }

                .img {
                    width: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

            }
        }

        .slide-controll {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            outline: 0;
            border: 0;
            border-radius: 50%;
            font-size: 25px;
            display: flex;
            align-items: center;
            padding: 10px;
            transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);

            &:hover {
                background-color: var(--btn-bg);
                color: var(--btn-color);
            }
        }

        .slide-next {
            right: -80px;
        }

        .slide-prev {
            left: -80px;
        }

        &:hover {
            .slide-next {
                right: 50px;
            }

            .slide-prev {
                left: 50px;
            }
        }
    }
}

/* slide animation */
.top-down {
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide.active .top-down {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

.right-left {
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide.active .right-left {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
}

.left-right {
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide.active .left-right {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
}
/* end slide animation */

.trans-delay-0-2 {
    transition-delay: 0.2s;
}
.trans-delay-0-4 {
    transition-delay: 0.4s;
}

.trans-delay-0-6 {
    transition-delay: 0.6s;
}

.trans-delay-0-8 {
    transition-delay: 0.8s;
}

.promotion {
    padding: 15px;
}

.promotion [class*="col-"] {
    padding: 15px;
}

.promotion-box {
    display: flex;
    background-color: var(--third-bg-color);
    position: relative;
}

.promotion-box .text {
    flex-grow: 1;
    padding: 20px;
}

.promotion-box .text h3 {
    font-size: 25px;
}

.promotion-box .text button {
    margin-top: 30px;
}

.promotion-box img {
    width: 150px;
    transition: transform 0.3s ease-in-out;
}

.promotion-box:hover img {
    transform: scale(1.1);
}

.section {
    padding: 60px 0;
}

.section-header,
.section-footer {
    text-align: center;
    margin: 80px 0 70px;
    text-transform: uppercase;
}

.section-header h2 {
    font-size: 40px;
}

.product-card {
    background-color: var(--main-bg-color);
    transition: all 0.3s ease-in-out;
}

.product-card:hover {
    background-color: var(--second-bg-color);
}

.product-card-img {
    height: 300px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-card-img img {
    max-height: 100%;
    transition: all 0.3s ease-in-out;
}

.product-card-img img:nth-child(2) {
    display: none;
}

.product-card:hover .product-card-img img:nth-child(1) {
    display: none;
}

.product-card:hover .product-card-img img:nth-child(2) {
    display: block;
}

.product-card-info {
    padding: 20px;
    text-align: center;
    position: relative;
}

.product-card-name {
    font-size: 20px;
    margin-bottom: 10px;
}

.product-card-price {
    font-size: 15px;
}

.product-card-price .curr-price {
    margin-left: 5px;
    font-size: 20px;
    font-weight: 600;
    color: var(--red);
}

.product-btn {
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;
}

.product-card:hover .product-btn {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.product-btn > * ~ * {
    margin-left: 5px;
}

.btn-shop-now,
.btn-cart-add {
    font-size: 15px;
    padding: 5px 10px;
    line-height: 17px;
}

.sp-item-name {
    font-size: 55px;
    font-weight: 600;
    margin-bottom: 30px;
}

.sp-item-description {
    margin-bottom: 60px;
    text-align: justify;
}
</style>