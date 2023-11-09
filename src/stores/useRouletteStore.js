import { defineStore } from 'pinia';

export const useRouletteStore = defineStore('roulette', {
  state: () => ({
    bandRef: null,
    awards: null,
    isShowRouletteAward: false,
    award: null,
  }),
  getters: {
    rouletteAwardStatus: (state) => state.isShowRouletteAward,
    awardAmount: (state) => state.award,
  },
  actions: {
    // setters
    setBandRef(ref) {
      this.bandRef = ref;
    },
    setAwards(awards) {
      this.awards = awards;
    },
    setShowRouletteAwards(isShow) {
      this.isShowRouletteAward = isShow;
    },
    setAward(award) {
      this.award = award;
    },

    // Other
    doSpin() {
      return new Promise((resolve) => {
        const CARD_WIDTH = 240;
        const DURATION = 5;

        this.bandRef.style.transition = `all ${DURATION}s`;
        this.bandRef.style.marginLeft = `-${CARD_WIDTH * 26}px`;

        setTimeout(() => resolve({ isEnd: true }), DURATION * 1000);
      });
    },
    finish() {
      console.log('[finish]: Конец игры!');

      const award = this.awards[28];

      this.setAward(award.price);
    },
  },
});
