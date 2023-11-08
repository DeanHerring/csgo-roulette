import { defineStore } from 'pinia';

export const useRouletteStore = defineStore('roulette', {
  state: () => ({ bandRef: null }),
  actions: {
    setBandRef(ref) {
      this.bandRef = ref;
    },
    doSpin() {
      const CARD_WIDTH = 240;

      this.bandRef.style.marginLeft = `-${CARD_WIDTH * 26}px`;
    },
  },
});
