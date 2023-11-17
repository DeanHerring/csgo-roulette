import { defineStore } from 'pinia';

const CARD_WIDTH = 260;

export const useRouletteStore = defineStore('roulette', {
  state: () => ({
    stripeRef: null,
    awards: null,
    isDisplayAward: false,
    award: null,
    countSpins: 0,
  }),
  getters: {
    isFirstSpin: (state) => state.countSpins === 0,
  },
  actions: {
    // setters
    setStripeRef(ref) {
      this.stripeRef = ref;
    },
    setAwards(awards) {
      this.awards = awards;
    },
    setAward(award) {
      this.award = award;
    },
    setDisplayAward(state) {
      this.isDisplayAward = state;
    },

    // Methods
    incrementSpin() {
      this.countSpins++;
    },
    animateClear() {
      this.stripeRef.style.marginLeft = `-${CARD_WIDTH}px`;
    },
    animateTo(marginValue, duration) {
      this.stripeRef.style.transition = duration ? `all ${duration}s` : 'none';
      this.stripeRef.style.marginLeft = `-${marginValue}px`;
    },
    trimStripe() {
      const trimAwards = this.awards.slice(25);

      this.awards = trimAwards;
      this.animateTo(CARD_WIDTH, 0);
    },
    updateStripe(parsedAwards) {
      const newAwards = this.awards.concat(parsedAwards);

      this.awards = newAwards;
    },
  },
});
