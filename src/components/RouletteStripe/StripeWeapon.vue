<template>
  <li
    class="roulette-item"
    :class="{
      'rarity-white': weapon.rarity === 'white',
      'rarity-green': weapon.rarity === 'green',
      'rarity-blue': weapon.rarity === 'blue',
      'rarity-purpure': weapon.rarity === 'purpure',
      'rarity-red': weapon.rarity === 'red',
      'rarity-gold': weapon.rarity === 'gold',
    }"
  >
    <div class="roulette-item__price" :class="{ show: getDisplayAwardState }">
      <h3>${{ weapon.price }}</h3>
    </div>
    <div class="roulette-item__weapon">
      <img :src="`http://localhost:5173/src/sprites/spectra/${weapon.sprite}`" alt="weapon" />
    </div>
    <div class="roulette-item__title">
      <h1>{{ weapon.skin }}</h1>
      <h3>{{ weapon.name }}</h3>
    </div>
  </li>
</template>

<script>
import { useRouletteStore } from '../../stores/useRouletteStore.js';

export default {
  props: ['weapon'],
  computed: {
    getDisplayAwardState() {
      const store = useRouletteStore();

      return store.isDisplayAward;
    },
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
    &.show {
      visibility: visible;
    }
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
