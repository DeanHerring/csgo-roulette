<template>
  <li class="debil-item" :class="item.data.color">
    <h1>Case #{{ item.index }}</h1>
    <h3>${{ item.data.price }}</h3>
  </li>
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
  flex-direction: column;
  position: relative;
  border: 1px solid red;
  h1 {
    font-size: 30px;
  }
  h3 {
    margin-top: 20px;
    font-size: 25px;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background-color: blue;
  }
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
