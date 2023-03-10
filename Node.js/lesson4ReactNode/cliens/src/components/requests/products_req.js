export const getProducts = callback => {
    fetch('http://localhost:2000/products', {
        credentials: 'include' //включаем поддержку куков
    })
    .then(res => res.json())
    .then(json => callback(json))
    
}