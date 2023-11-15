<template>
  <li class="history-item rarity-red">
    <img :src="weapon" alt="item" />
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
  clip-path: polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
  margin-left: -22px;
  &:first-child {
    clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
    color: #fff;
  }
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
