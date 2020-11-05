<template>
  <q-page class="flex flex-center">
    
      <!-- Hola desde
      <span v-if="$q.platform.is.desktop">desktop</span>
      <span v-else-if="$q.platform.is.android">android</span>
      <span v-else-if="$q.platform.is.ios">ios</span> -->
      <q-card
        class="my-card bg-secondary text-white"
        @click="$router.push('/products')"
      >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section>
          hay {{ $store.getters["Products/getProducts"].length }} productos en
          existencia
        </q-card-section>
      </q-card>
      
      <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        hay {{ $store.getters["Products/getProductsWithA"].length }} productos
        que empiezan con A
      </q-card-actions>
    </q-card>

      
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style lang="sass">
</style>
