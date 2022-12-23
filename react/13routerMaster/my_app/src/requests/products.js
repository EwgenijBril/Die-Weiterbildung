export const getProducts = ( category, callback ) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(reps => reps.json())
    .then(json => callback(json))
}