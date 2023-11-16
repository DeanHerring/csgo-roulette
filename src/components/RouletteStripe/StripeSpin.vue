<template>
  <div class="roulette-spin">
    <button @click="spin" ref="spin">Spin</button>
  </div>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore.js';

// Sounds
import endSound from '@/sounds/end.mp3';
import spinSound from '@/sounds/spin.mp3';
import startSound from '@/sounds/start.mp3';

export default {
  methods: {
    spin() {
      console.log('[spin]: Start Game');

      this.$refs.spin.disabled = true;

      const store = useRouletteStore();
      const isFirstSpin = store.isFirstSpin;
      const DELAY_BEFORE_NEXT_SPIN = 1.2;

      if (isFirstSpin) {
        console.log('[spin]: First Spin');

        store.playSound(spinSound);
        store.startSpin().then((result) => {
          if (result.isEnd) {
            setTimeout(() => {
              this.$refs.spin.disabled = false;
            }, DELAY_BEFORE_NEXT_SPIN * 1000);

            store.playSound(endSound);
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
        store.playSound(spinSound);

        setTimeout(() => {
          store.startSpin().then((result) => {
            if (result.isEnd) {
              setTimeout(() => {
                this.$refs.spin.disabled = false;
              }, DELAY_BEFORE_NEXT_SPIN * 1000);

              store.playSound(endSound);
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
