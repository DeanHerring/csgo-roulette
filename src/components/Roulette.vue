<template>
  <roulette-history></roulette-history>
  <Container>
    <roulette-stripe></roulette-stripe>
    <roulette-awards></roulette-awards>
  </Container>
</template>

<script>
import RouletteHistory from './RouletteHistory/RouletteHistory.vue';
import RouletteStripe from './RouletteStripe/RouletteStripe.vue';
import RouletteAwards from './RouletteAwards/RouletteAwards.vue';

import Container from './Other/Container.vue';

export default {
  components: { RouletteHistory, RouletteStripe, RouletteAwards, Container },
};
</script>

<style lang="scss" scoped>
.roulette-app {
  width: 100%;
}
</style>
