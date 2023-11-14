<template>
  <div class="debil-start">
    <button class="btn-start" @click="spin">Start</button>
  </div>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore';

export default {
  methods: {
    spin() {
      console.log('[spin]: Start Game');

      const store = useRouletteStore();
      const isFirstSpin = store.isFirstSpin;

      if (isFirstSpin) {
        console.log('[spin]: First Spin');

        store.startSpin().then((result) => {
          if (result.isEnd) {
            store.finishSpin();
            store.displayAward();
          }
        });
      } else {
        console.log('[spin]: Not First Spin');

        store.hideAward();
        store.trimStripe();
        store.updateStripe();
        store.animateClear();

        setTimeout(() => {
          store.startSpin().then((result) => {
            if (result.isEnd) {
              store.finishSpin();
              store.displayAward();
            }
          });
        }, 100);
      }

      store.incrementSpin();

      /**
       * isFirstSpin (true) = startSpin(), finishSpin(), displayAward()
       * isFirstSpin (false) = hideAward(), trimStripe(), updateStripe()
       */
    },
  },
};
</script>

<style lang="scss" scoped>
.debil-start {
  margin-top: 50px;
  button {
    font-size: 30px;
    padding: 10px 50px;
    background-color: #333;
    border: 0;
    outline: 0;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }
}
</style>
