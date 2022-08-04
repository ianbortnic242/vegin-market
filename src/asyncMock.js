const products = [
    {
        id: '1',
        title: 'Tofu Orgánico',
        description:'Proteina de soya, 300grs.',
        category: 'Proteinas',
        price: 1000,
        stock: 3,
        img:'/img/products/tofu.webp',
    },

    {
        id: '2',
        title: 'Tempeh',
        description:'Proteina de garbanzos, 250 grs.',
        category: 'Proteinas',
        price: 2000,
        stock: 4,
        img:'/img/products/tempeh.webp',
    },
    {
        id: '3',
        title: 'Avena',
        description:'Avena Instantánea 250 grs.',
        category: 'Cereales',
        price: 2000,
        stock: 4,
        img:'/img/products/avena.png',
    },
    {
        id: '4',
        title: 'Leche de Almendra',
        description:'Leche de Almendra Chilena 300 ml.',
        category: 'Leches',
        price: 2000,
        stock: 4,
        img:'/img/products/leche_almendra.png',
    },
    {
        id: '5',
        title: 'Triton',
        description:'Galletas de chocolate',
        category: 'Golosinas',
        price: 2000,
        stock: 4,
        img:'/img/products/triton.webp',
    },


]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}


export const getProductById = (id) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

