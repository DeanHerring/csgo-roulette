<template>
  <!-- History -->
  <div class="history">
    <history-list></history-list>
  </div>
</template>

<script>
import HistoryList from './HistoryList.vue';

export default {
  components: { HistoryList },
};
</script>

<style lang="scss" scoped>
.history {
  width: 100%;
  height: 100px;
  overflow: hidden;
}
</style>
