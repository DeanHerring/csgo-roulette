<template>
  <li class="history-item">
    <h1>History</h1>
  </li>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.history-item {
  width: $history-card-width;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black-1;
  // clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 0 100%);
  color: $white-2;
  position: relative;
  z-index: 10;
}
</style>
