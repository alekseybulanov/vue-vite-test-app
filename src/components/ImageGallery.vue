<template>
  <div class="gallery">
    <single-image :url="currentImage" :key="currentImage" />
    <div class="nav-btn"> 
      <button @click="prevImage" v-if="showNavigation">Prev</button>
      <button @click="nextImage" v-if="showNavigation">Next</button>
    </div>
  </div>
</template>

<script>
import SingleImage from './SingleImage.vue';

export default {
  components: {
    SingleImage,
  },
  computed: {
    currentImage() {
      return this.$store.state.currentImage;
    },
    showNavigation() {
      return this.filteredUrls.length > 1;
    },
    filteredUrls() {
      return this.$store.state.urls.filter(url => url.trim() !== '');
    },
  },
  methods: {
    prevImage() {
      if (this.filteredUrls.length > 1) {
        this.$store.commit('setCurrentIndex', (this.$store.state.currentIndex - 1 + this.filteredUrls.length) % this.filteredUrls.length);
      }
    },
    nextImage() {
      if (this.filteredUrls.length > 1) {
        this.$store.commit('setCurrentIndex', (this.$store.state.currentIndex + 1) % this.filteredUrls.length);
      }
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.nav-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>