<template>
  <li class="award rarity-white">
    <header class="award-header">
      <h3>$0.01</h3>
      <h3>91.22%</h3>
    </header>
    <div class="award-weapon">
      <img :src="image" alt="weapon" />
    </div>
    <div class="award-title">
      <h1>UMP-45</h1>
      <h3>Exposure</h3>
    </div>
  </li>
</template>

<script>
import image from '@/sprites/spectra/1.png';

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

.award {
  background-color: $blue-1;
  height: calc(328px - 40px);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 15px 5px rgba($blue-1, 0.11);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  &-header {
    display: flex;
    justify-content: space-between;
    h3 {
      font: italic 700 14px $Lato;
      color: $white-2;
    }
  }
  &-weapon {
    img {
      width: 200px;
    }
  }
  &-title {
    h1 {
      font: 700 16px $Lato;
      color: $white-2;
    }
    h3 {
      font: 400 15px $Lato;
      color: $blue-4;
      margin-top: 10px;
    }
  }
}
</style>
