<template>
  <TransitionGroup name="history-list" tag="ul">
    <history-header></history-header>
    <history-weapon v-for="weapon in getHistory" :key="weapon" :weapon="weapon"></history-weapon>
  </TransitionGroup>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore.js';

import HistoryWeapon from './HistoryWeapon.vue';
import HistoryHeader from './HistoryHeader.vue';

export default {
  components: { HistoryWeapon, HistoryHeader },
  data() {
    return {
      weapons: [],
    };
  },
  computed: {
    getHistory() {
      const store = useRouletteStore();
      const copyHistory = [...store.historyItems];

      return copyHistory.reverse();
    },
  },
  methods: {
    importWeaponSprites() {
      const weaponSprites = import.meta.glob('@/assets/cases/spectra/*.png');

      this.weapons = Object.keys(weaponSprites);
    },
  },
  mounted() {
    this.importWeaponSprites();
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

ul {
  display: flex;
  width: 9999px;
  height: 100%;
  overflow: hidden;
  background-color: $blue-1;
}

.history-list-enter-active,
.history-list-leave-active {
  margin-left: 0;
  transition: all 0.15s linear;
}
.history-list-enter-from,
.history-list-leave-to {
  // transform: translateX(-$history-card-width);
  margin-left: -$history-card-width;
}
</style>
