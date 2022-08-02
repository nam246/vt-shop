<template>
  <div class="products">
    <h1>Orders List</h1>
    <table class="table">
      <tr>
        <th>Date</th>
        <th>Customer</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Product/ Quantity</th>
        <th>Total Price</th>
        <th>Delivery Method</th>
        <th>Crud</th>
      </tr>
      <tr v-for="(order, index) in store.orders" :key="index">
        <td>{{ order.timestamp.toDate().toDateString() }}</td>
        <td>{{ order.customerInfo.firstName }} {{ order.customerInfo.lastName }}</td>
        <td>{{ order.customerInfo.email }}</td>
        <td>{{ order.customerInfo.phoneNumber }}</td>
        <td><div v-for="(p, index) in order.cart" :key="index">{{ p.product.title }}: <span>{{ p.quantity }}</span></div></td>
        <td><div v-for="(p, index) in order.cart" :key="index">{{ p.product.price*p.quantity }}</div></td>
        <td>Standard</td>
        <td>
          <div class="btn" @click.prevent="editProduct(product)">Edit</div>
          <div class="btn" @click.prevent="deleteProduct(product)">Delete</div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useStore from '../store/products'
import { db } from '../firebase/firebaseInit'
import { collection, getDocs } from "firebase/firestore"

const store = useStore()
const colRef = collection(db, "orders")
const sum = ref(0)

const snapshot = await getDocs(colRef);
snapshot.forEach((doc) => {
  store.orders.push(doc.data())
  console.log(store.orders);
})

</script>

<style scoped lang="scss">
.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}

.table {
    border-collapse: collapse;
    width: 100%;

    td, th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    tr {
      img {
        display: block;
        width: 50px;
      }

      .image {
        display: flex;
      }
    }

    tr:nth-child(even){background-color: #f2f2f2;}

    tr:hover {background-color: #ddd;}

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: var(--grey);
      color: white;
    }
  }
</style>