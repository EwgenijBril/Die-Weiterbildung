
export const getProducts = (category, callback) => {
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(resp => resp.json())
    .then(json => callback(json.products))
}