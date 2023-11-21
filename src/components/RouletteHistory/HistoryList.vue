<template>
  <TransitionGroup name="history-list" tag="ul">
    <history-weapon v-for="weapon in getHistory" :key="weapon" :weapon="weapon"></history-weapon>
  </TransitionGroup>
</template>

<script>
import { useRouletteStore } from '@/stores/useRouletteStore.js';

import HistoryWeapon from './HistoryWeapon.vue';

export default {
  components: { HistoryWeapon },
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
  transition: all 0.5s ease;
}
.history-list-enter-from,
.history-list-leave-to {
  margin-left: -$history-card-width;
}
</style>
