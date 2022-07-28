const products = [
    {
        id: '1',
        title: 'Tofu Orgánico',
        description:'Proteina de soya, 300grs.',
        price: 1000,
        img:'img/products/tofu.webp',
    },

    {
        id: '2',
        title: 'Tempeh',
        description:'Proteina de garbanzos, 250 grs.',
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