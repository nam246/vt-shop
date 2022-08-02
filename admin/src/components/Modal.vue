<template>
    <div class="modal">
        <div class="modal-header">
            <h3>Add product</h3>
            <button @click.prevent="close">Close</button>
        </div>
        <hr>
        <div class="modal-body">
            <div class="modal-content">
                <div class="form-group">
                    <label for="name">Product name</label>
                    <input type="text" id="name" v-model="product.title">
                </div>
                <div class="form-group">
                    <label for="tags">Product tags</label>
                    <input type="text" id="tags" v-model="product.category">
                </div>
                <div class="form-group">
                    <label for="price">Product price</label>
                    <input type="number" id="price" v-model="product.price">
                </div>
                <div class="form-group">
                    <label for="discount">Discount percentage</label>
                    <input type="number" id="discount" v-model="product.discountPercentage">
                </div>
                <div class="form-group">
                    <label for="stock">In Stock</label>
                    <input type="number" id="stock" v-model="product.stock">
                </div>
                <div class="form-group">
                    <label for="brand">Product brand</label>
                    <input type="text" id="brand" v-model="product.brand">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea id="description" cols="30" rows="10" v-model="product.description"></textarea>
                </div>
                <div class="form-group">
                    <label for="images">Product images</label>
                    <input type="file" id="images" multiple="multiple" accept=".jpg,.png,.jpeg,.webp" @change="setImageFiles">
                    <div class="img-review">
                        <img :src="img" alt="" v-for="(img, index) in files" :key="index">
                    </div>
                </div>
                <div class="form-group">
                    <button class="btn-flat btn-hover" @click.prevent="submit">{{ btn_value }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['product', 'btn_value', 'files'])

const emits = defineEmits(['close_modal', 'submit', 'set_image_files',])

const close = () => {
    emits('close_modal')
}

const setImageFiles = (e) => {
    emits('set_image_files', e)
}

const submit = () => {
    emits('submit')
}

</script>

<style lang="scss" scoped>
.modal {
    width: 100%;
    background-color: var(--third-bg-color);
    margin: 15px 0 10px 0;
    padding: 12px;
    border-radius: 5px;
    .modal-header {
        display: flex;
        justify-content: space-between;
    }

    .modal-body {

        .modal-content {
            display: flex;
            flex-direction: column;
            .form-group {
                padding: 12px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                input {
                    padding: 8px;
                    width: 50%;
                }

                button {
                    margin: 0 auto;
                }
            }
        }
    }
}

</style>