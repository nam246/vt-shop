import { defineStore } from "pinia";
// import { router } from "vue-router";
import { auth, db } from "../firebase/firebaseInit";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const useUserStore = defineStore({
    id: 'auth',
    state: () => {
        return {
            currentUser: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            }
        }
    },
})

export default useUserStore