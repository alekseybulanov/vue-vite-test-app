import { createStore } from 'vuex';

export default createStore({
  state: {
    urls: [],
    currentIndex: 0,
    currentImage: null,
  },
  mutations: {
    addInput(state) {
      state.urls.push('');
      this.commit('setCurrentImageByIndex', state.currentIndex);
    },
    removeInput(state, index) {
      state.urls.splice(index, 1);

      if (state.urls.length === 0) {
        state.currentIndex = 0;
        state.currentImage = null;
      } else if (index === state.urls.length) {
        state.currentIndex = index - 1;
        this.commit('setCurrentImageByIndex', state.currentIndex);
      }
    },
    updateInput(state, { index, url }) {
      state.urls[index] = url;
      if (index === state.currentIndex) {
        this.commit('updateCurrentImage', url);
      }
    },
    setCurrentImageByIndex(state, index) {
      state.currentImage = state.urls[index] || null;
    },
    setCurrentImage(state, url) {
      state.currentImage = url;
    },
    updateCurrentImage(state, url) {
      state.currentImage = url;
    },
    setCurrentIndex(state, index) {
      state.currentIndex = index;
      this.commit('setCurrentImageByIndex', index);
    },
  }
});