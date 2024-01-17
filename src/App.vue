<template>
  <div class="app">
    <component :is="selectedComponent" />
    <image-list />
  </div>
</template>

<script>
import ImageGallery from './components/ImageGallery.vue';
import SingleImage from './components/SingleImage.vue';
import ImageList  from './components/ImageList.vue';
export default {
  computed: {
    selectedComponent() {
      return this.$store.state.urls.length === 1 ? 'single-image' : 'image-gallery';
    }
  },
  components: {
    ImageList,
    'single-image': SingleImage,
    'image-gallery': ImageGallery
  }
}
</script>

<style scoped>
.app {
  display: flex;
  justify-content: space-around;
  height: 300px;
}
</style>