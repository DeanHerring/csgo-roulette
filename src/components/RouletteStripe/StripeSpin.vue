<template>
  <div class="roulette-spin">
    <button @click="play" ref="spin">Spin</button>
  </div>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore.js';
import { Utils } from '@/utils/Utils.js';

export default {
  methods: {
    play() {
      const store = useRouletteStore();
      const isFirstSpin = store.isFirstSpin;

      isFirstSpin ? Utils.roulette.spin() : Utils.roulette.respin();

      store.incrementSpin();
    },
  },
  mounted() {
    const store = useRouletteStore();

    store.setSpinRef(this.$refs.spin);
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.roulette-spin {
  text-align: center;
  button {
    font: 700 18px $Lato;
    color: $black-1;
    background-color: $yellow-1;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    transition: all 0.2s;
    cursor: pointer;
    &:disabled {
      background-color: darkgray;
      opacity: 0.66;
      cursor: not-allowed;
      pointer-events: none;
    }
  }
}
</style>
