<template>
  <ul class="awards-list">
    <award></award>
    <award></award>
    <award></award>
    <award></award>
    <award></award>
    <award></award>
  </ul>
</template>

<script>
import Award from './Award.vue';

export default {
  components: { Award },
};
</script>

<style lang="scss" scoped>
.awards-list {
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}
</style>
