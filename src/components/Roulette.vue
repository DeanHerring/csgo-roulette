<template>
  <div class="debil-wrapper">
    <roulette-award></roulette-award>

    <div class="debil">
      <roulette-line></roulette-line>
      <roulette-list></roulette-list>
    </div>

    <roulette-start></roulette-start>
  </div>
</template>

<script>
import RouletteList from './RouletteList.vue';
import RouletteStart from './RouletteStart.vue';
import RouletteLine from './RouletteLine.vue';
import RouletteAward from './RouletteAward.vue';

export default {
  components: { RouletteList, RouletteStart, RouletteLine, RouletteAward },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.debil-wrapper {
  width: 100%;
  height: 100vh;
  background-color: #111;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .debil {
    width: $card-width * 5;
    max-width: 90%;
    background-color: #555;
    position: relative;
    overflow: hidden;
  }
}
</style>
