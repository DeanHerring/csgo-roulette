<template>
  <li class="debil-item" :class="item.data.color">Case #{{ item.index }}</li>
</template>

<script>
export default {
  props: ['item'],
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.debil-item {
  height: $card-width;
  color: #fff;
  aspect-ratio: 1 / 1;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  &.white {
    background-color: #fff;
    color: #000;
  }
  &.green {
    background-color: #00a03e;
  }
  &.blue {
    background-color: #298eea;
    color: #fff;
  }
  &.purpure {
    background-color: #9c27b0;
    color: #fff;
  }
  &.gold {
    background-color: #ffcf48;
  }
}
</style>
