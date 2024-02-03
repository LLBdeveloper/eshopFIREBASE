

const products = [
    {
        id:'1',
        name:'surftrainer',
        price:'15000',
        category:'tabla',
        img:'http://placekitten.com/200/300',
        stock:'18',
        description:'Tabla balanceboard surf'
    },
    { id:'2', name:'snowdeck ', price:'13000', category:'tabla', img:'http://placekitten.com/200/300', stock:'18', description:'Tabla balanceboard snow'},
    { id:'3', name:'heladera', price:'17000', category:'heladera', img:'http://placekitten.com/200/300', stock:'12', description:'heladera que enfria'}
]

export const getProducts = () => {
    return new Promise( (resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        })
    })
}