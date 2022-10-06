const products = [
    { 
        id: '1', 
        name: 'Aceite de Oliva', 
        price: 4750, 
        category: 'Aceites', 
        img:'', 
        stock: 50, 
        description:'Descripcion de Aceite de Oliva'},
    {   id: '2', 
        name: 'Chocolinas', 
        price: 800, 
        category: 'Galletita', 
        img:'', 
        stock: 19, 
        description:'Descripcion de Chocolinas'},
    {   id: '3', 
        name: 'Jack Daniels Honey', 
        price: 9000, 
        category: 'Bebidas', 
        img:'', 
        stock: 12, 
        description:'Descripcion de Jack Daniels Honey'},
    {   id: '3', 
        name: 'Chocolate Blockazo', 
        price: 9000, 
        category: 'Chocolates',             
        img:'', 
        stock: 15, 
        description:'Descripcion de Chocolate Blockazo'}
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}