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
      this.$refs.spin.disabled = true;

      const store = useRouletteStore();
      const isFirstSpin = store.isFirstSpin;

      isFirstSpin ? Utils.roulette.spin(this.$refs.spin) : Utils.roulette.respin(this.$refs.spin);

      store.incrementSpin();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.roulette-spin {
  text-align: center;
  margin-top: 25px;
  button {
    font: 700 25px $Lato;
    color: $white-2;
    background: none;
    border: 0;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      color: $yellow-1;
    }
  }
}
</style>
