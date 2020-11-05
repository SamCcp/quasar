export function addProduct (state, product) {
  state.Products.push(product);
}

export function addProducts(state, products){
  products.forEach( product => {
    state.Products.push(product);
  })
}

export function updateProduct(state, productInfo){
  var p = state.Products.find( p=> p.id == productInfo.id);
  p.name = productInfo.name;
}

export function destroyProducts(state){
  state.Products = [];
}