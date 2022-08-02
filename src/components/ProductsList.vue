<template>
  <!-- product list -->
    <div class="section">
        <div class="container">
            <div class="section-header">
                <h2>{{ title }}</h2>
            </div>
            <div class="row" id="latest-products">
                <ProductCard v-for="(product, index) in products" :key="index" :product="product"/>
            </div>
            <div class="section-footer">
                <router-link :to="{ name: 'AllProducts' }" class="btn-flat btn-hover">view all</router-link>
            </div>
        </div>
    </div>
    <!-- end product list -->
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import useStore from '../store/products'

const props = defineProps(['title', 'products'])


</script>

<style lang="scss" scoped>

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
</style>