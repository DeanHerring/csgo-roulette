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
      const store = useRouletteStore();

      store.doSpin().then((result) => {
        if (result.isEnd) {
          store.finish();
          store.setShowRouletteAwards(true);
        }
      });
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
