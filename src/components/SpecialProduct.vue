<template>
  <!-- special product -->
    <div class="bg-second">
        <div class="section container" v-for="(product, index) in specialProduct" :key="index">
            <div class="row">
                <div class="col-4 col-md-4">
                    <div class="sp-item-img">
                        <img :src="product.images[0]" alt="">
                    </div>
                </div>
                <div class="col-7 col-md-8">
                    <div class="sp-item-info">
                        <div class="sp-item-name">{{ product.title }}</div>
                        <p class="sp-item-description">{{ product.description }}</p>
                        <button @click="toProductDetail(product.title)" class="btn-flat btn-hover">shop now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end special product -->
</template>

<script setup>
import useStore from '../store/products'
import { useRoute, useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const specialProduct =  store.getSpecialProduct

const toProductDetail = (id) => {
    router.push(`/product/${id}`)
}

</script>

<style lang="scss" scoped>

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