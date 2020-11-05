// aqui controlamos la navegacion
export default ({ router, store, Vue, app }) => {  
  router.beforeEach((to, from, next) => {
    //si la pagina que se quiere cargar necesita estar loguear, lo mandamos a login
    let necesitaAuth = to.meta.requiresAuth || false;
    console.log(app);
    if (necesitaAuth && !store.getters["Auth/GetLoginStatus"]) {
      next({
        path: "/login",
        query: {
          redirect: decodeURIComponent(to.fullPath)
        }
      });
    } else {
      next();
    }
  });
}