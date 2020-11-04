<template>
  <q-page>
    <q-card class="my-card">
      <q-card-section>
        <!-- caja de texto para usuario -->
    <q-input outlined v-model="username" label="User" />
    <!-- caja de texto para password -->
    <q-input
      v-model="password"
      filled
      :type="isPwd ? 'password' : 'text'"
      hint="Password with toggle"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <br>
    <q-btn
      class="full-width"
      color="primary"
      label="Outline"
      @click="doLogin"
    />
      </q-card-section>
    </q-card>
    
  </q-page>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isPwd: true,
      username: "",
      password: "",
    };
  },
  created(){
    this.$store.dispatch("Auth/SetLoginStatus", false)
  },
  methods : {
    doLogin(){
      let estaLogueado = this.$store.getters["Auth/GetLoginStatus"]
      //checamos si ingresamos usuario y contraseña
      if( this.username != "" && 
          this.password != ""  ){
        //modificamos el almacen para que SI este logueado
        this.$store.dispatch("Auth/SetLoginStatus", true)
          .then(respuesta => {
            if( respuesta == true ){
              //console.log("ya puedo irme a la pagina que queria ir")
              let adonde = this.$route.query.redirect || "/";
              this.$router.push(adonde)
            }
          }) 
      }
    }
  }
};
</script>

<style lang="sass">
.limitar
  margin-left: 50px
  margin-right: 50px
</style>