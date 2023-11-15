<template>
  <div class="roulette">
    <stripe-header></stripe-header>

    <div class="roulette-wrapper">
      <div class="roulette-container">
        <stripe-arrows></stripe-arrows>
        <stripe-list></stripe-list>
      </div>
    </div>

    <stripe-spin></stripe-spin>
  </div>
</template>

<script>
import StripeHeader from './StripeHeader.vue';
import StripeSpin from './StripeSpin.vue';
import StripeArrows from './StripeArrows.vue';
import StripeList from './StripeList.vue';

export default {
  components: { StripeHeader, StripeSpin, StripeArrows, StripeList },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.roulette {
  width: 1300px;
  margin: 50px 0;
  &-wrapper {
    width: 100%;
    border-radius: 10px;
    background-color: $blue-1;
    position: relative;
    margin-top: 25px;
    overflow: hidden;
    border: 2px solid $blue-1;
    .roulette-container {
      width: $card-width * 32;
      margin-left: -$card-width;
      &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        box-shadow: inset 0 0 25px 5px $blue-3;
      }
    }
  }
}
</style>
