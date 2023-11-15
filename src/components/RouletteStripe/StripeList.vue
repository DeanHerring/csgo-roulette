<template>
  <ul class="roulette-list">
    <stripe-weapon></stripe-weapon>
    <stripe-weapon></stripe-weapon>
    <stripe-weapon></stripe-weapon>
    <stripe-weapon></stripe-weapon>
    <stripe-weapon></stripe-weapon>
    <stripe-weapon></stripe-weapon>
    <stripe-weapon></stripe-weapon>
    <stripe-weapon></stripe-weapon>
    <stripe-weapon></stripe-weapon>
  </ul>
</template>

<script>
// import { useRouletteStore } from '@/stores/useRouletteStore';

import StripeWeapon from './StripeWeapon.vue';

// import axios from 'axios';

export default {
  components: { StripeWeapon },
};
</script>

<style lang="scss" scoped>
.roulette-list {
  display: flex;
}
</style>
