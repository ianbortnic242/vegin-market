const products = [
    {
        id: '1',
        title: 'Tofu Orgánico',
        description:'Proteina de soya, 300grs.',
        category: 'Proteinas',
        price: 1000,
        img:'img/products/tofu.webp',
    },

    {
        id: '2',
        title: 'Tempeh',
        description:'Proteina de garbanzos, 250 grs.',
        category: 'Proteinas',
        price: 2000,
        img:'img/products/tempeh.webp',
    },


]

export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}


export const getProduct = () =>{
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products[1])
        }, 2000)
    })
}