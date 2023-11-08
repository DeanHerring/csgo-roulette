<template>
  <ul class="debil-list" ref="band">
    <roulette-item
      v-for="(item, index) in getAwardsList()"
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

export default {
  components: { RouletteItem },
  methods: {
    getAwardsList() {
      const utils = new Utils();
      const awards = utils.getAwardsList(config.BAND_LENGTH);
      const shuffledAwards = shuffle(awards);

      return shuffledAwards;
    },
  },
  mounted() {
    const store = useRouletteStore();
    store.setBandRef(this.$refs.band);
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';
.debil-list {
  display: flex;
  transition: all 3s;
  margin-left: -$card-width;
}
</style>
