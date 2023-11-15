<template>
  <li
    class="award"
    :class="{
      'rarity-white': award.rarity === 'white',
      'rarity-green': award.rarity === 'green',
      'rarity-blue': award.rarity === 'blue',
      'rarity-purpure': award.rarity === 'purpure',
      'rarity-red': award.rarity === 'red',
      'rarity-gold': award.rarity === 'gold',
    }"
  >
    <header class="award-header">
      <h3>${{ award.price }}</h3>
      <h3>{{ award.drop_rate }}%</h3>
    </header>
    <div class="award-weapon">
      <img :src="`http://localhost:5173/src/sprites/spectra/${award.sprite}`" alt="weapon" />
    </div>
    <div class="award-title">
      <h1>{{ award.skin }}</h1>
      <h3>{{ award.name }}</h3>
    </div>
  </li>
</template>

<script>
export default {
  props: ['award'],
  data() {
    return {};
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
    &-gold {
      background: linear-gradient(-210deg, $blue-1 50%, $yellow-1 150%);
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
