<template>
  <ul class="roulette-list">
    <stripe-weapon v-for="weapon in getAwards" :weapon="weapon"></stripe-weapon>
  </ul>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore';

import StripeWeapon from './StripeWeapon.vue';

import axios from 'axios';

export default {
  components: { StripeWeapon },
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
  },
};
</script>

<style lang="scss" scoped>
.roulette-list {
  display: flex;
}
</style>
