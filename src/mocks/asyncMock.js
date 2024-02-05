const products = [
    {
        id:'1',
        name:'surftrainer Surfclub',
        price:15000,
        category:'tabla',
        img:'../../../public/products/tabla.png',
        stock: 18,
        description:'Tabla de balanceboard surf, lo mejor para entrenar tu equilibrio'
    },
    { id:'2', name:'futon ', price:13000, category:'sillon', img:'../../../public/products/futon.png', stock: 18, description:'funton muy comodo en L ideal living, tela resistente'},
    { id:'3', name:'samsung jk-24 heladera', price:17000, category:'heladera', img:'../../../public/products/heladera.jpg', stock: 12, description:'heladera que enfria mucho con frezzer y fabrica de hielo en la puerta'}
]

const categories = [
    {id: '1', description: 'Tablas', slug: 'tabla'},
    {id: '2', description: 'Sillones', slug: 'sillon'},
    {id: '3', description: 'Heladeras', slug: 'heladera'},
]

export const getCategories = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(categories)
        }, 1000)
    })
}

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}