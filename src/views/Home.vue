<template>
  <div class="home">
    <HeroSection />
    <ProductsList :title="'lastest product'" :products="getHeroProduct"/>
    <SpecialProduct />
    <ProductsList :title="'best selling'" :products="bestSellingProducts"/>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import Promotion from '../components/Promotion.vue'
import ProductsList from '../components/ProductsList.vue'
import SpecialProduct from '../components/SpecialProduct.vue'
import Blogs from '../components/BlogsSection.vue'
import useStore from '../store/products'

const store = useStore()
const bestSellingProducts = store.getBestSellingProduct
const getHeroProduct = store.getHeroProduct

</script>