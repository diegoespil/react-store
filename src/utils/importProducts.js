import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/dbConnection";

import { products } from "./MockData";

export const importProducts = () => {
    const productsCollection = collection(db, "products")

    products.forEach(product => {
        addDoc(productsCollection, product)
            .then(doc => {
                console.log("Document id: ", doc.id)
            })
            .catch(error => {
                console.log(error)
            })
    })

}