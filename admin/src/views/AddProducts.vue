<template>
  <div class="products">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>Products Page</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ducimus.
            </p>
          </div>
          <div class="col-md-6">
            <!-- <img src="/img/svg/products.svg" alt="" class="img-fluid"> -->
          </div>
        </div>
        <div class="product-test">
          <h3>Products list</h3>
          <button @click="openModal" class="btn">Add Product</button>
          <table class="table">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Discount</th>
              <th>In stock/ Quantity</th>
              <th>Images</th>
              <th>Crud</th>
            </tr>
            <tr v-for="(product, index) in products" :key="index">
              <td>{{ product.title }}</td>
              <td>{{ product.price }}</td>
              <td>{{ product.brand }}</td>
              <td>{{ product.discountPercentage }}</td>
              <td>{{ product.stock }}</td>
              <td class="image">
                <img :src="img" alt="" v-for="(img, i) in product.images" :key="i">
              </td>
              <td>
                <div class="btn" @click.prevent="editProduct(product)">Edit</div>
                <div class="btn" @click.prevent="deleteProduct(product)">Delete</div>
              </td>
            </tr>
          </table>
        </div>
        <Modal
          v-if="isModalOpen" 
          @close_modal="openModal" 
          :product="product"
          :btn_value="'Add Product'"
          :files="files"
          @set_image_files="setImageFiles"
          @submit="addNewProduct"
        />
        <Modal
          v-if="isEdit" 
          @close_modal="editOpen"
          :product="product"
          :btn_value="'Save Changes'"
          @set_image_files="setImageFiles"
          @submit="updateProduct"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Modal from '../components/Modal.vue'
import useStore  from '../store/products'
import { ref as storageRef, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { collection, doc, addDoc, updateDoc, deleteDoc, getDocs, query, where } from "firebase/firestore"
import { storage, db } from '../firebase/firebaseInit'


//toggle modal
const isModalOpen = ref(false)
const openModal = () => {
  isModalOpen.value = !isModalOpen.value
  product.title = ""
  product.description = ""
  product.price = null
  product.discountPercentage = null
  product.stock = null
  product.brand = ""
  product.category = ""
  product.images = []
}
const isEdit = ref(false)
const editOpen = () => {
  isEdit.value = !isEdit.value
}

// store reference
const store = useStore()
const product = store.product
const products = store.products
onMounted(() => {
  store.getAllProducts(products)
})

//get file value
const files = []
const setImageFiles = (e) => {
  for(let index = 0; index < 3; index++) {
    files[0] = e.target.files[0]
    files[1] = e.target.files[1]
  }
  // console.log(files);
}

//reset form
const resetForm = () => {
  product.title = ""
  product.description = ""
  product.price = null
  product.discountPercentage = null
  product.stock = null
  product.brand = ""
  product.category = ""
  product.images = []
}

//add new product
const addNewProduct = async () => {
  if(
    product.title != '' &&
    product.description != '' &&
    product.price != null &&
    product.stock != null &&
    product.brand != '' &&
    product.category != '' &&
    files.length == 2
    ) {
      //add new data to firestore
      const docRef = await addDoc(collection(db, "products"), {
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
        images: product.images
      })
      const productId = await docRef.id
      await updateDoc(doc(db, 'products', productId), {
        docId: productId
      })
      // console.log(productId)
      //upload multiple image to storage
      files.forEach(file => {
        const fileRef = storageRef(storage, 'images/productsImg/'+ file.name)
        const uploadFile = uploadBytesResumable(fileRef, file)
        uploadFile.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadFile.snapshot.ref)
            .then(async (downloadURL) => {
              product.images.push(downloadURL)
              //update array of imagesUrl to product
              const productDoc = doc(db, 'products', productId)
              await updateDoc(productDoc, {
                images: product.images
              })
            })
          }
        )
      })
  }
  else {
    alert('PLEASE FILL OUT ALL THE FIELDS')
  }
  resetForm()
}

//edit product
const editProduct = async (key) => {
  isEdit.value = true
  product.title = key.title
  product.category = key.category
  product.price = key.price
  product.brand = key.brand
  product.discountPercentage = key.discountPercentage
  product.stock = key.stock
  product.description = key.description
  product.images = key.images
}

const updateProduct = async () => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where("title", "==", product.title));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(document.id, " => ", document.data().title);
      const productRef = doc(db, "products", document.id);

      // Set the "capital" field of the city 'DC'
      updateDoc(productRef, {
        title: product.title,
        description: product.description,
        price: product.price,
        discountPercentage: product.discountPercentage,
        stock: product.stock,
        brand: product.brand,
        category: product.category,
      });

      files.forEach(file => {
        const fileRef = storageRef(storage, 'images/productsImg/'+ file.name)
        const uploadFile = uploadBytesResumable(fileRef, file)
        uploadFile.on('state_changed', 
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadFile.snapshot.ref)
            .then(async (downloadURL) => {
              product.images.push(downloadURL)
              //update array of imagesUrl to product
              const productDoc = doc(db, 'products', document.id)
              await updateDoc(productDoc, {
                images: product.images
              })
            })
          }
        )
      })
    })
  } catch (error) {
    console.log(error.message);
  }

  resetForm()
  alert('successfully edited!')
}

//delete product
const deleteProduct = async (key) => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where("title", "==", key.title));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (document) => {
      await deleteDoc(doc(db, "products", document.id));
    })
  } catch (error) {
    alert(error.message)
  }
}

</script>

<style lang="scss" scoped>
.product-test {
  h3 {
    display: inline-block;
    margin-bottom: 12px;
  }

  button {
    position: absolute;
    right: 0;
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
}
</style>