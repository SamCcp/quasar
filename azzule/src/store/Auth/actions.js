//las acciones contendran la logica de negocio siempre que sea posible
export function SetLoginStatus (context, data) {
  return new Promise((resolve, reject) =>{
    context.commit("SetLoginStatus", data);
    resolve(data);
  })
}

