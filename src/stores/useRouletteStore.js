import { defineStore } from 'pinia';

const CARD_WIDTH = 260;

export const useRouletteStore = defineStore('roulette', {
  state: () => ({
    stripeRef: null,
    awards: null,
    isDisplayAward: false,
    award: null,
    countSpins: 0,
    historyItems: [],
    spinRef: null,
    autoplayRef: null,
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
    setSpinRef(ref) {
      this.spinRef = ref;
    },
    setAutoplayRef(ref) {
      this.autoplayRef = ref;
    },

    // Methods
    addToHistory(weapon) {
      if (weapon && this.historyItems.length < 32) {
        this.historyItems.push({ id: weapon.id, rarity: weapon.rarity, sprite: weapon.sprite });
      } else {
        this.historyItems.shift();
        this.historyItems.push({ id: weapon.id, rarity: weapon.rarity, sprite: weapon.sprite });
      }
    },
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
