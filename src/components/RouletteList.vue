<template>
  <ul class="debil-list" ref="band">
    <roulette-item
      v-for="(item, index) in getAwards"
      :key="index + 1"
      :item="{ data: item, index: index + 1 }"
    ></roulette-item>
  </ul>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore';

import RouletteItem from './RouletteItem.vue';
import axios from 'axios';

export default {
  components: { RouletteItem },
  computed: {
    getAwards() {
      const store = useRouletteStore();

      console.log('[getAwards]');

      return store.awards;
    },
  },
  methods: {
    async loadAwards() {
      const responce = await axios.post('http://localhost:3001/api/v1/getShuffledAwards', {
        length: 32,
      });
      const { status, data } = responce;

      if (status !== 200 || !data.ok) {
        throw new Error({ ok: data.ok, error: 'Какая-то срака.' });
      }

      const parsedAwards = JSON.parse(data.data);

      return { ok: true, data: parsedAwards };
    },
  },
  async mounted() {
    const store = useRouletteStore();
    const awards = await this.loadAwards();

    awards.ok ? store.setAwards(awards.data) : console.log('Произошла ошибка во время загрузки данных.');

    store.setBandRef(this.$refs.band);
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
