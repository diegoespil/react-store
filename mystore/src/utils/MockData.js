export const products = [
    {
        "id": 1,
        "nombre": "Camisa",
        "descripcion": "Camisa de algodón",
        "marca": "XYZ",
        "talles": ["S", "M", "L", "XL"],
        "precio": 29.99,
        "image": "https://pampero.com.ar/wp-content/uploads/2022/03/211124004_E1-3253.jpg"
    },
    {
        "id": 2,
        "nombre": "Pantalon",
        "descripcion": "Pantalones vaqueros",
        "marca": "ABC",
        "talles": ["28", "30", "32", "34"],
        "precio": 39.99,
        "image": "https://pampero.com.ar/wp-content/uploads/2023/10/412101002_E1-5114.jpg"
    },
    {
        "id": 3,
        "nombre": "Zapatillas",
        "descripcion": "Zapatillas deportivas",
        "marca": "PQR",
        "talles": ["36", "37", "38", "39", "40"],
        "precio": 49.99,
        "image": "https://pampero.com.ar/wp-content/uploads/2024/03/BORC-ORMA-NEGRO-3-scaled.jpg"
    }

]

export const getProducts = () => {
    /* return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    }) */
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
}