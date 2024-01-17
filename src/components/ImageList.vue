<template>
  <div class="list">
    <button @click="addInput">Add item</button>
    <list-item v-for="(url, index) in urls" :key="index" :url="url" :index="index" v-on="{ removeInput, updateUrl }" />
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  components: {
    ListItem
  },
  computed: {
    urls() {
      return this.$store.state.urls;
    }
  },
  methods: {
    addInput() {
      this.$store.commit('addInput');
    },
    removeInput(index) {
      this.$store.commit('removeInput', index);
    },
    updateUrl(index, newUrl) {
      this.$store.commit('updateInput', { index, url: newUrl });
      this.$store.commit('setCurrentImageByIndex', index);
    }
  }
}
</script>

<style scoped>
  .list {
    margin-left: 20px;
    max-width: 300px;
    overflow-x: auto;
  }
</style>