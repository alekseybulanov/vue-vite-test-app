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
  import { defineProps, computed } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const props = defineProps(['index']);
  const url = computed(() => store.state.urls[props.index] || '');

  const updateInput = (event) => {
    store.commit('updateInput', { index: props.index, url: event.target.value });
    store.commit('setCurrentImageByIndex', props.index);
  };

  const removeInput = () => {
    store.commit('removeInput', props.index);
  };
</script>

<template>
  <div class="item">
    <input
      class="input"
      :value="url"
      @input="updateInput"
      placeholder="Enter url"
    />
    <button @click="removeInput">x</button>
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