<template>
  <div class="roulette-spin">
    <button>Spin</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.roulette-spin {
  text-align: center;
  margin-top: 25px;
  button {
    font: 700 25px $Lato;
    color: $white-2;
    background: none;
    border: 0;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      color: $yellow-1;
    }
  }
}
</style>
