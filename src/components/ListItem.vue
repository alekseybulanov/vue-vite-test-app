<!-- <template>
  <div class="item">
    <input 
      class="input"
      :value="url" 
      @input="updateInput" 
      placeholder="Enter url"
    >
    <button @click="removeInput">x</button>
  </div>
</template>


<script>
export default {
  props: ['url', 'index'],
  methods: {
    removeInput() {
      this.$store.commit('removeInput', this.index);
    },
    updateInput(event) {
      const newUrl = event.target.value;
      this.$store.commit('updateInput', { index: this.index, url: newUrl });
      this.$store.commit('setCurrentImage', newUrl);
    }
  }
}
</script> -->

<script setup>
  import { ref, watch, defineProps } from 'vue';

  const props = defineProps(['url', 'index', 'onRemoveInput', 'onUpdateUrl']);
  const url = ref(props.url);

  const updateInput = (event) => {
    props.onUpdateUrl(props.index, event.target.value);
  };

  watch(
    () => url,
    (newUrl) => {
      url.value = newUrl;
    }
  );
</script>

<template>
  <div class="item">
    <input
      class="input"
      v-model="url"
      @input="updateInput"
      placeholder="Enter url"
    />
    <button @click="onRemoveInput(index)">x</button>
  </div>
</template>

<style scoped>
.item {
  width: 250px;
  height: auto;
  display: flex;
  align-items:center;
  padding: 10px;
}

input {
  padding: 10px;
  border: 1px solid green;
  border-radius: 5px;
}
.item input {
  flex: 1;
  margin-right: 8px;
}
</style>