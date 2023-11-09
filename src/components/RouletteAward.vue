<template>
  <div class="debil-award" :class="getVisibilityStatus && 'show'">
    <h1>
      You win <b>${{ getAwardAmount }}</b>
    </h1>
  </div>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore';

export default {
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    getVisibilityStatus() {
      const store = useRouletteStore();

      return store.rouletteAwardStatus;
    },
    getAwardAmount() {
      const store = useRouletteStore();

      return store.awardAmount;
    },
  },
};
</script>

<style lang="scss" scoped>
.debil-award {
  margin-bottom: 50px;
  visibility: hidden;
  &.show {
    visibility: visible;
  }
  h1 {
    color: #fff;
  }
}
</style>
