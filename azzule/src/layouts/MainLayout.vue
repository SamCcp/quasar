<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
       v-if="displayToolbar"
      >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Azzule App
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          App Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view /> <!-- vue router -->
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
//const linksData = [];
export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: []
    }
  },
  created(){
    this.essentialLinks = [];
    this.$router.options.routes[0].children.forEach( i => {
      this.essentialLinks.push({
        title : i.name || "",
        caption : i.caption || "",
        icon : i.icon || "",
        link : i.path || "/"
      })
    })
    console.log(this.essentialLinks)
  },
  computed : {
    //si ya esta logueado debe mostrar el toolbar
    displayToolbar(){
      let resultado = true;
      let estaLogueado = this.$store.getters["Auth/GetLoginStatus"]
      let necesitaLoguear = app.$route.meta.requiresAuth || false;
      
      if( estaLogueado ) return true;
      if( !necesitaLoguear ) return true;
      return false;
    }
  }
}
</script>
