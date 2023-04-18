const products = [
    {id: 1, nombre:"Alfombra Oval", img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/393/125/products/agra1-0fa666e433c535c7d316021966679713-1024-10241-c22cc3ca9205b346d416050480924552-1024-1024.jpg', precio: 1500, category: 'alfombras', cantidad: 10, descripcion: 'Alfombra'},
    {id: 2, nombre:"Alfombra Asilash", img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/172/567/products/asilah-21-ba9e386c4664e5278616011625641501-240-0.png', precio: 1800, category: 'alfombras', cantidad: 15, descripcion: 'Alfombra'},
    {id: 3, nombre:"Alfombra Rectangular" , img: 'https://sc04.alicdn.com/kf/Hfc779591c0bc4bf3b44bff3b55e8041eM.jpg', precio: 1400, category: 'alfombras', cantidad: 11, descripcion: 'Alfombra'},
    {id: 4, nombre:"Alfombra Paris" , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5KrvKJ4S9DrTWtlYIDKuV2YfToUv-MUgqQ&usqp=CAU', precio: 1300, category: 'alfombras', cantidad: 8, descripcion: 'Alfombra'},
    {id: 5, nombre:"Alfombra Sumatra" , img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/172/567/products/sumatra51-e9500238346d16d03316657461031613-240-0.png', precio: 2000, category: 'alfombras', cantidad: 6, descripcion: 'Alfombra'},
    {id: 6, nombre:"Felpudo Home" , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGw-sVZhMp1weYWahD6Wpu3cXEFkdG1Jwwig&usqp=CAU', precio: 1500, category: 'alfombras', cantidad: 12, descripcion: 'Alfombra' },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (category) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const productCategory = products.filter(prod => prod.category === category);
            resolve(productCategory);
        }, 500)
    })
}


