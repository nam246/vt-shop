<template>
  <div class="bg-main">
        <div class="container">
            <div class="row product-row">
                <div class="col-5 col-md-12">
                    <div class="product-img" id="product-img">
                        <img :src="product.images[0]" alt="">
                    </div>
                    <div class="box">
                        <div class="product-img-list">
                            <div class="product-img-item">
                                <img :src="product.images[0]" alt="">
                            </div>
                            <div class="product-img-item">
                                <img :src="product.images[1]" alt="">
                            </div>
                            <!-- <div class="product-img-item">
                                <img src="./images/JBL_Quantum_400_Product Image_Hero 02.png" alt="">
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="col-7 col-md-12">
                    <div class="product-info">
                        <h1>
                            {{ product.title }}
                        </h1>
                        <div class="product-info-detail">
                            <span class="product-info-detail-title">Brand: </span>
                            <a href="#">{{ product.brand }}</a>
                        </div>
                        <p class="product-description">
                            {{ product.description }}
                        </p>
                        <div class="product-info-price">{{ product.price }}$</div>
                        <div class="product-quantity-wrapper">
                            <span class="material-icons" @click="remove">remove</span>
                            <span class="product-quantity">{{ quantity }}</span>
                            <span class="material-icons" @click="add">add</span>
                        </div>
                        <div>
                            <button class="btn-flat btn-hover" @click.prevent="addToCart">add to cart</button>                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-header">
                    description
                </div>
                <div class="product-detail-description">
                    <button class="btn-flat btn-hover btn-view-description" id="view-all-description" @click="viewAll">
                        view all
                    </button>
                    <div class="product-detail-description-content" :class="isActive == true ? 'active' : ''">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium obcaecati odit dolorem, doloremque accusamus esse neque ipsa dignissimos saepe quisquam tempore perferendis deserunt sapiente! Recusandae illum totam earum ratione.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt maxime rerum reprehenderit voluptas asperiores ipsam quas consequuntur maiores, at odit obcaecati vero sunt! Reiciendis aperiam perferendis consequuntur odio quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat eum veniam doloremque nihil repudiandae odio ratione culpa libero tempora. Expedita, quo molestias. Minus illo quis dignissimos aliquid sapiente error!
                        </p>
                        <img :src="product.images[0]" alt="">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium officia, quae fuga in exercitationem aliquam labore ex doloribus repellendus beatae facilis ipsam. Veritatis vero obcaecati iste atque aspernatur ducimus.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quam praesentium id sit amet magnam ad, dolorum, cumque iste optio itaque expedita eius similique, ab adipisci dicta. Quod, quibusdam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in corrupti ipsam sint error possimus commodi incidunt suscipit sit voluptatum quibusdam enim eligendi animi deserunt recusandae earum natus voluptas blanditiis?
                        </p>
                        <img :src="product.images[1]" alt="">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam quam fugit veniam ipsum recusandae incidunt, ex ratione, magnam labore ad tenetur officia! In, totam. Molestias sapiente deserunt animi porro?
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- end product-detail content -->
</template>

<script setup>
import { ref } from 'vue'
import useStore from '../store/products'
import { db } from '../firebase/firebaseInit'
import { collection, getDocs, query, where } from "firebase/firestore";

const prop = defineProps(['id'])
const store = useStore()
const product = ref({})
const q = query(collection(db, "products"), where("title", "==", prop.id));

//view all content
const isActive = ref(false)
const viewAll = () => {
    isActive.value = !isActive.value
}

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  product.value = doc.data()
})

const quantity = ref(0)
const add = () => quantity.value++
const remove = () => quantity.value-- ? quantity.value > 0 : quantity.value = 0

//add to cart
const cart = store.cart
const addToCart = () => {
    if (quantity.value > 0) {
        cart.push({
            product: product,
            quantity: quantity
        })
    }
}

</script>

<style scoped>
.breadcumb {
    font-weight: 600;
    padding-left: 20px;
}

.breadcumb a {
    text-transform: capitalize;
}

.breadcumb a:hover {
    color: var(--red);
}

.material-icons {
    margin: 0 15px;
    font-size: 16px;
}

.product-img {
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-img > img {
    max-width: 70%;
}

.product-img-list {
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-img-item {
    width: 90px;
    cursor: pointer;
    margin: 0 10px;
    border: 1px solid var(--third-bg-color);
}

.product-img-item:hover {
    background-color: var(--second-bg-color);
}

.product-row {
    padding: 45px 0;
}

.product-info > * ~ * {
    margin-top: 25px;
}

.product-info-detail-title {
    font-weight: 600;
    color: gray;
}

.product-description {
    font-size: 18px;
    text-align: justify;
}

.product-info-price {
    font-weight: 600;
    font-size: 30px;
    color: var(--red);
}

.product-quantity-wrapper {
    display: flex;
    align-items: center;
}

.product-quantity {
    margin: 0 10px;
    font-size: 25px;
}

.product-quantity-btn {
    height: 30px;
    width: 30px;
    background-color: gray;
    display: grid;
    place-items: center;
    border-radius: 50%;
    cursor: pointer;
}

.product-quantity-btn i {
    font-size: 20px;
    color: var(--main-bg-color);
}

.box-header {
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 20px;
}

.product-detail-description {
    position: relative;
    margin-bottom: 90px;
}

.product-detail-description-content {
    text-align: justify;
    line-height: 26px;
    font-size: 16px;
    height: 600px;
    overflow-y: hidden;
    position: relative;
}

.product-detail-description-content.active {
    height: max-content;
}

.btn-view-description {
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
}

.user-rate {
    margin-bottom: 40px;
}

.user-info {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
}

.user-avt {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    overflow: hidden;
}

.user-name {
    margin-left: 20px;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
}

.name {
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 10px;
}

.user-rate-content {
    line-height: 25px;
}
</style>