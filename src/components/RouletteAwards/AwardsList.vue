<template>
  <ul class="awards-list">
    <award v-for="award in awards" :award="award"></award>
  </ul>
</template>

<script>
import Award from './Award.vue';

import axios from 'axios';

export default {
  data() {
    return {
      awards: [],
    };
  },
  components: { Award },
  methods: {
    async getDefaultAwards() {
      const responce = await axios.get('http://localhost:3001/api/v1/getDefaultAwards');
      const { status, data } = responce;

      if (status !== 200 || !data.ok) {
        throw new Error({ ok: data.ok, error: 'Какая-то срака.' });
      }

      const parsedAwards = JSON.parse(data.data);

      return parsedAwards;
    },
  },
  async mounted() {
    const awards = await this.getDefaultAwards();

    this.awards = awards;
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
