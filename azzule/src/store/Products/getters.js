export function getProducts (state) {
  return state.Products;
}
export function getProductsWithA(state){
  return state.Products.filter( p=> {
    return p.name.toLowerCase().startsWith("a");
  })
}
