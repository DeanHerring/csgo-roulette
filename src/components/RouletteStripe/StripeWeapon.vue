<template>
  <li class="roulette-item rarity-white">
    <div class="roulette-item__price">
      <h3>$24.91</h3>
    </div>
    <div class="roulette-item__weapon">
      <img :src="image" alt="weapon" />
    </div>
    <div class="roulette-item__title">
      <h1>Colony IV</h1>
      <h3>SG 553</h3>
    </div>
  </li>
</template>

<script>
import image from '@/sprites/spectra/14.png';

export default {
  data() {
    return {
      image,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.roulette-item {
  width: $card-width;
  height: calc(328px - 50px);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px 0;
  &.rarity {
    &-white {
      background: linear-gradient(-210deg, $blue-1 50%, $white-1 150%);
    }
    &-green {
      background: linear-gradient(-210deg, $blue-1 50%, $green-1 150%);
    }
    &-blue {
      background: linear-gradient(-210deg, $blue-1 50%, $blue-2 150%);
    }
    &-purpure {
      background: linear-gradient(-210deg, $blue-1 50%, $purpure-1 150%);
    }
    &-red {
      background: linear-gradient(-210deg, $blue-1 50%, $red-1 150%);
    }
  }
  &:first-child {
    border-radius: 5px 0 0 5px;
  }
  &__price {
    visibility: hidden;
    h3 {
      font: 700 16px $Lato;
      color: $white-2;
    }
  }
  &__weapon {
    img {
      width: 200px;
    }
  }
  &__title {
    h1 {
      font: 700 16px $Lato;
      color: $white-2;
    }
    h3 {
      margin-top: 10px;
      font: 400 15px $Lato;
      color: $blue-4;
    }
  }
}
</style>
