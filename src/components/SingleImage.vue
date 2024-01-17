<template>
  <div class="single-img">
    <img v-if="currentImage" :src="currentImage" alt="image">
  </div>
</template>

<script>
export default {
  computed: {
    currentImage() {
      return this.$store.state.currentImage;
    }
  }
}
</script>

<style scoped>
  .single-img {
    width: 300px;
    height: 257px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>