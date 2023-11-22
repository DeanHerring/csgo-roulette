<template>
  <div class="roulette-spin">
    <button @click="autoplay" ref="autoplay">Autoplay</button>
  </div>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore.js';
import { Utils } from '@/utils/Utils.js';

export default {
  methods: {
    autoplay() {
      const store = useRouletteStore();

      Utils.roulette.autoplay();

      store.incrementSpin();
    },
  },
  mounted() {
    const store = useRouletteStore();

    store.setAutoplayRef(this.$refs.autoplay);
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
    margin-left: 10px;
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
