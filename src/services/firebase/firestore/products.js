import { db } from "../firebaseConfig.jsx"
import { getDocs, collection, where, query } from "firebase/firestore"

export const getProducts = (categoryId) => {

    const productsCollection = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        return getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields}
                })
                return productsAdapted
            })
            .catch(error => {
                return error
            })
}