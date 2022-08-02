<template>
    <div class="col-3 col-md-6 col-sm-12">
        <div class="product-card">
            <div class="product-card-img">
                <img :src="img" alt="" v-for="(img, index) in product.images" :key="index">
            </div>
            <div class="product-card-info">
                <div class="product-btn">
                    <button @click="toProductDetail" class="btn-flat btn-hover btn-shop-now">shop now</button>
                    <button class="btn-flat btn-hover btn-cart-add">
                        <span class="material-icons">add_shopping_cart</span>
                    </button>
                    <button class="btn-flat btn-hover btn-cart-add">
                        <span class="material-icons">favorite</span>
                    </button>
                </div>
                <div class="product-card-name">
                    {{ product.title }}
                </div>
                <div class="product-card-price">
                    <span v-if="product.discountPercentage">%{{ product.discountPercentage }}</span>
                    <span><del>{{ product.price + (product.discountPercentage*product.price)/100 }}</del></span>
                    <span class="curr-price">${{ product.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const prop = defineProps(['product'])
const route = useRoute()
const router = useRouter()

const toProductDetail = () => {
    router.push(`/product/${prop.product.title}`)
}
</script>

<style lang="scss" scoped>

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

.material-icons {
    font-size: 14px;
}
</style>