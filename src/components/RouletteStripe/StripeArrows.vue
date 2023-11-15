<template>
  <div class="roulette-arrows">
    <div class="roulette-arrows__top"></div>
    <div class="roulette-arrows__bottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.roulette-arrows {
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  &__top,
  &__bottom {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid $yellow-1;
  }
  &__top {
    transform: rotate(180deg);
  }
  &__bottom {
    position: absolute;
    bottom: 0;
  }
}
</style>
