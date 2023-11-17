<template>
  <ul class="awards-list">
    <award v-for="award in awards" :award="award"></award>
  </ul>
</template>

<script>
import Award from './Award.vue';

import { useLoadThings } from '@/helpers/useLoadThings.js';

export default {
  data() {
    return {
      awards: [],
    };
  },
  components: { Award },
  async mounted() {
    const things = await useLoadThings({
      url: 'http://localhost:3001/api/v1/getDefaultAwards',
      method: 'GET',
    });

    if (things) {
      this.awards = things;
    }
  },
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
