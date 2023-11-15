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
import StripeWeapon from './StripeWeapon.vue';

export default {
  components: { StripeWeapon },
};
</script>

<style lang="scss" scoped>
.roulette-list {
  display: flex;
}
</style>
