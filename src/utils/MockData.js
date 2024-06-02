export const products = [
    {
        "title": "PANTALON CARGO GABARDINA BELICE BEIGE",
        "description": "",
        "price": 49.99,
        "category": "pantalones",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/03/pantalon-cargo-gabardina-belice-beige-lotus-marco-polo-1-300x400.jpg"
    },
    {
        "title": "CARGO PANTS BLACK",
        "description": "",
        "price": 39.99,
        "category": "pantalones",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/03/pantalon-cargo-pants-negro-bowen-marco-polo-1.jpg"
    },
    {
        "title": "PANTALON CARGO PREMIUM MILITAR",
        "description": "",
        "price": 19.99,
        "category": "pantalones",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/03/pantalon-cargo-premium-verde-militar-airborn-marco-polo-1-300x400.jpg"
    },
    {
        "title": "PANTALON CARGO PREMIUM TOSTADO",
        "description": "",
        "price": 99.99,
        "category": "pantalones",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/03/pantalon-cargo-premium-tostado-airborn-marco-polo-1-300x400.jpg"
    },
    {
        "title": "BUZO CHESTER VERDE OSCURO",
        "description": "",
        "price": 59.99,
        "category": "buzos",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/buzo-chester-verde-oscuro-old-bridge-marco-polo-1-300x400.jpg"
    },
    {
        "title": "BUZO MEOLS NEGRO",
        "description": "",
        "price": 44.99,
        "category": "buzos",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/buzo-meols-negro-old-bridge-marco-polo-1-300x400.jpg"
    },
    {
        "title": "BUZO MEOLS NARANJA",
        "description": "",
        "price": 14.99,
        "category": "buzos",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/buzo-meols-naranja-old-bridge-marco-polo-1-300x400.jpg"
    },
    {
        "title": "BUZO MEOLS AZUL OSCURO",
        "description": "",
        "price": 79.99,
        "category": "buzos",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/buzo-meols-azul-oscuro-old-bridge-marco-polo-1-300x400.jpg"
    },
    {
        "title": "REMERA ZIPPO NEGRO",
        "description": "",
        "price": 54.99,
        "category": "remeras",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/remera-zippo-negro-old-bridge-marco-polo-1-300x400.jpg"
    },
    {

        "title": "REMERA ZIPPO BLANCO",
        "description": "",
        "price": 49.99,
        "category": "remeras",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/remera-heswell-blanco-old-bridge-marco-polo-1-300x400.jpg"
    },
    {

        "title": "REMERA HESWELL BLANCO",
        "description": "",
        "price": 24.99,
        "category": "remeras",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/remera-industrial-verde-oscuro-old-bridge-marco-polo-1-300x400.jpg"
    },
    {

        "title": "REMERA INDUSTRIAL VERDE OSCURO",
        "description": "",
        "price": 89.99,
        "category": "remeras",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/campera-kendal-negro-old-bridge-marco-polo-1-300x400.jpg"
    },
    {

        "title": "CAMPERA KENDAL BLACK",
        "description": "",
        "price": 39.99,
        "category": "camperas",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/campera-crawley-beige-old-bridge-marco-polo-1-300x400.jpg"
    },
    {

        "title": "CAMPERA CRAWLEY BEIGE",
        "description": "",
        "price": 59.99,
        "category": "camperas",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/campera-crawley-azul-oscuro-old-bridge-marco-polo-1-300x400.jpg"
    },
    {

        "title": "CAMPERA CRAWLEY AZUL OSCURO",
        "description": "",
        "price": 29.99,
        "category": "camperas",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/campera-crawley-azul-oscuro-old-bridge-marco-polo-1-300x400.jpg"
    },
    {

        "title": "CAMPERA FRATTON DEEP BLUE",
        "description": "",
        "price": 69.99,
        "category": "camperas",
        "image": "https://marcopololp.com.ar/wp-content/uploads/2024/04/campera-fratton-deep-blue-old-bridge-marco-polo-1-300x400.jpg"
    }

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
    /* return fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json()) */
}

export const getProductById = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((elem) => elem.id === parseInt(productId));
            resolve(product);
        }, 1000);
    });

}

export const getProductByCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredProducts = products.filter(elem => elem.category === category


            );
            resolve(filteredProducts);
        }, 1000);
    })
}