<template>
  <div class="debil-line"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.debil-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 100%;
  background-color: rgba(#f44336, 0.5);
  transform: translateX(-50%);
  z-index: 1000;
}
</style>
