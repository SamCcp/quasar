<template>
  <q-page class="flex flex-center">
    <h1>
      Hola desde
      <span v-if="$q.platform.is.desktop">desktop</span>
      <span v-else-if="$q.platform.is.android">android</span>
      <span v-else-if="$q.platform.is.ios">ios</span>
      
    </h1>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
}
</script>

<style lang="sass">
  
</style>
