import { defineStore } from "pinia";
import { db, storage } from '../firebase/firebaseInit'
import { collection, query, where, getDocs } from "firebase/firestore"

const useStore = defineStore({
    id: 'products',
    state: () => {
        return {
            product: {
                title: "",
                description: "",
                price: null,
                discountPercentage: null,
                stock: null,
                brand: "",
                category: "",
                images: []
            },
            products: [],
            cart: [],
            orders: []
        }
    },
    getters: {
        getSpecialProduct(state) {
            return state.products.filter(p => p.price == '700').slice(0, 4)
        },
        getHeroProduct: (state) => {
            return state.products.filter(p => p.price > 300).slice(0, 4)
        },
        getBestSellingProduct: (state) => {
            return state.products.filter(p => p.discountPercentage > 10).slice(0, 4)
        },
        filterByCategory(state, category) {
            return state.products.filter(product => product.category === category)
        },
    },
    actions: {
        async getAllProducts(products) {
            const q = query(collection(db, "products"))
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                return products.push(doc.data())
                // console.log(state.products)
            })
        },
    }
})


export default useStore
