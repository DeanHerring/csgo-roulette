<template>
  <ul class="debil-list" ref="band">
    <roulette-item
      v-for="(item, index) in awards"
      :key="index + 1"
      :item="{ data: item, index: index + 1 }"
    ></roulette-item>
  </ul>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore';
import { config } from '@/config/config.js';

import RouletteItem from './RouletteItem.vue';
import Utils from '@/utils/Utils.js';
import shuffle from 'lodash.shuffle';

console.log('asdjasndjk');

export default {
  components: { RouletteItem },
  data() {
    return {
      awards: undefined,
    };
  },
  mounted() {
    const store = useRouletteStore();
    const utils = new Utils();
    const awards = utils.getAwardsList(config.BAND_LENGTH);
    const shuffledAwards = shuffle(awards);

    store.setAwards(shuffledAwards);
    store.setBandRef(this.$refs.band);

    this.awards = shuffledAwards;
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
.debil-list {
  display: flex;
  margin-left: -$card-width;
}
</style>
