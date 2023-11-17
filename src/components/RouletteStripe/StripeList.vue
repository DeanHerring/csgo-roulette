<template>
  <ul class="roulette-list">
    <stripe-weapon v-for="weapon in getWeapons" :weapon="weapon"></stripe-weapon>
  </ul>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore';
import { useLoadThings } from '@/helpers/useLoadThings.js';

import StripeWeapon from './StripeWeapon.vue';

export default {
  components: { StripeWeapon },
  computed: {
    getWeapons() {
      console.log('[getWeapons]');

      const store = useRouletteStore();

      return store.awards;
    },
  },
  async mounted() {
    const store = useRouletteStore();
    const things = await useLoadThings({
      url: 'http://localhost:3001/api/v1/getShuffledAwards',
      method: 'POST',
      postData: {
        length: 32,
      },
    });

    things && store.setAwards(things);
  },
};
</script>

<style lang="scss" scoped>
.roulette-list {
  display: flex;
}
</style>
