<template>
  <q-page>
    <q-btn color="primary" label="Get Picture" @click="captureImage" />

    <img :src="imageSrc">
  </q-page>
</template>

<script>

export default {
  name : "reports",
  data(){
    return {
      imageSrc: ""
    }
  },
  methods: {
    captureImage(){
      navigator.camera.getPicture(
        data => { // on success
          this.imageSrc = data;
          //this.imageSrc = `data:image/jpeg;base64,${data}`
        },
        () => { // on fail
          this.$q.notify('Could not access device camera.')
        },
        {
          // camera options
          quality : 80,
          destinationType: Camera.DestinationType.FILE_URI,
        }
      )
    }
  }
}
</script>

<style>

</style>