export const getProduct = ( id, callback ) => {
    fetch(`https://fakestoreapi.com/product/${id}`)
    .then(reps => reps.json())
    .then(json => callback(json))
}