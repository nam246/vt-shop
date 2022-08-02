<template>
  <!-- products content -->
    <div class="bg-main">
        <div class="container">
            <div class="box">
                <div class="row">
                    <div class="col-3 filter-col" id="filter-col">
                        <div class="box filter-toggle-box">
                            <button class="btn-flat btn-hover" id="filter-close">close</button>
                        </div>
                        <div class="box">
                            <span class="filter-header">
                                Categories
                            </span>
                            <ul class="filter-list">
                                <li><a href="#">Keyboard</a></li>
                                <li><a href="#">Mouse</a></li>
                                <li><a href="#">Monitor</a></li>
                                <li><a href="#">Headphone</a></li>
                            </ul>
                        </div>
                        <div class="box">
                            <span class="filter-header">
                                Price
                            </span>
                            <div class="price-range">
                                <input type="text">
                                <span>-</span>
                                <input type="text">
                            </div>
                        </div>
                        <div class="box">
                            <ul class="filter-list">
                                <li>
                                    <div class="group-checkbox">
                                        <input type="checkbox" id="status1">
                                        <label for="status1">
                                            On sale
                                            <span class="material-icons">done</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="group-checkbox">
                                        <input type="checkbox" id="status2">
                                        <label for="status2">
                                            In stock
                                            <span class="material-icons">done</span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="group-checkbox">
                                        <input type="checkbox" id="status3">
                                        <label for="status3">
                                            Featured
                                            <span class="material-icons">done</span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-9 col-md-12">
                        <div class="box filter-toggle-box">
                            <button class="btn-flat btn-hover" id="filter-toggle">filter</button>
                        </div>
                        <div class="box">
                            <div class="row" id="products">
                                <ProductCard v-for="(product, index) in products" :key="index" :product="product"/>
                            </div>
                        </div>
                        <div class="box">
                            <ul class="pagination">
                                <li><a href="#"><span class="material-icons">chevron_left</span></a></li>
                                <li><a href="#" class="active">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#"><span class="material-icons">chevron_right</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end products content -->
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import useStore from '../store/products'
import { ref as storageRef } from 'firebase/storage'
import { storage } from '../firebase/firebaseInit'

const store = useStore()
const products = store.products


// console.log(products);

</script>

<style lang="scss" scoped>
.mb-menu-toggle {
    font-size: 25px;
}

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

.breadcumb span {
    margin: 0 15px;
}

.filter-header {
    display: block;
    margin: 20px 0;
    font-weight: 600;
    text-transform: capitalize;
}

.filter-list > li {
    margin-bottom: 20px;
}

.filter-toggle-box {
    display: none;
}

.price-range {
    display: flex;
    align-items: center;
    justify-content: center;
}

.price-range span {
    flex-grow: 1;
    text-align: center;
    margin: 0 10px;
}

.price-range input {
    width: 40%;
    outline: none;
    padding: 5px;
}

.group-checkbox {
    text-align: left;
}

.group-checkbox input {
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
}

.group-checkbox label {
    cursor: pointer;
    padding-left: 40px;
    position: relative;
}

.group-checkbox label::before {
    content: "";
    position: absolute;
    left: 0;
    top: -4px;
    width: 22px;
    height: 22px;
    background-color: var(--main-bg-color);
    border: 2px solid #7b7979;
}

.group-checkbox label > .material-icons {
    position: absolute;
    left: 2px;
    top: -2px;
    color: var(--black);
    transform: scale(0);
    font-size: 21px;
    transition: transform 0.1s ease-in-out;
}

.group-checkbox input:checked + label .material-icons {
    transform: scale(1);
}

.rating .material-icons {
    color: #ffc107;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.pagination > li > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    margin-left: 5px;
    font-size: 20px;
}

.pagination > li > a.active {
    background-color: var(--black);
    color: var(--main-bg-color);
}

.pagination > li > a:hover {
    border: 2px solid var(--black);
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

.product-quantity-btn .material-icons {
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