<template>
  <ul class="history-list">
    <history-header></history-header>

    <history-weapon v-for="weapon in weapons" :weapon="weapon"></history-weapon>
  </ul>
</template>

<script>
import HistoryWeapon from './HistoryWeapon.vue';
import HistoryHeader from './HistoryHeader.vue';

export default {
  components: { HistoryWeapon, HistoryHeader },
  data() {
    return {
      weapons: [],
    };
  },
  methods: {
    importWeapons() {
      const weaponSprites = import.meta.glob('@/assets/cases/spectra/*.png');

      this.weapons = Object.keys(weaponSprites);
    },
  },
  mounted() {
    this.importWeapons();
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.history-list {
  display: flex;
  width: 9999px;
  height: 100%;
  overflow: hidden;
}
</style>
