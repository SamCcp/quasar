export function addProduct (context, data) {
  context.commit("addProduct", data);
}
export function addProducts (context, data) {
  context.commit("addProducts", data);
}

export function updateProduct(context, data){
  context.commit("updateProduct", data);
}