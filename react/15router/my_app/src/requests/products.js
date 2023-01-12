
export const getProducts = (cartegory, callback) => {
    fetch(`https://dummyjson.com/products/category/${cartegory}`)
    .then(resp => resp.json())
    .then(json => callback(json))
}