<template>
  <li
    class="history-item"
    :class="{
      'rarity-white': weapon.rarity === 'white',
      'rarity-green': weapon.rarity === 'green',
      'rarity-blue': weapon.rarity === 'blue',
      'rarity-purpure': weapon.rarity === 'purpure',
      'rarity-red': weapon.rarity === 'red',
      'rarity-gold': weapon.rarity === 'gold',
    }"
    ref="historyItem"
  >
    <img :src="`http://localhost:5173/src/assets/cases/spectra/${weapon.sprite}`" alt="item" />
  </li>
</template>

<script>
export default {
  props: ['weapon'],
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.history-item {
  width: $history-card-width;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $blue-1;
  // clip-path: polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
  &.rarity {
    &-white {
      background: linear-gradient(180deg, $blue-1 60%, $white-1 175%);
    }
    &-green {
      background: linear-gradient(180deg, $blue-1 60%, $green-1 175%);
    }
    &-blue {
      background: linear-gradient(180deg, $blue-1 60%, $blue-2 175%);
    }
    &-purpure {
      background: linear-gradient(180deg, $blue-1 60%, $purpure-1 175%);
    }
    &-red {
      background: linear-gradient(180deg, $blue-1 60%, $red-1 175%);
    }
    &-gold {
      background: linear-gradient(180deg, $blue-1 60%, $yellow-1 175%);
    }
  }
  img {
    width: 100px;
  }
}
</style>
