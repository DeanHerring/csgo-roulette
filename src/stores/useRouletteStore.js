import { defineStore } from 'pinia';
import axios from 'axios';

export const useRouletteStore = defineStore('roulette', {
  state: () => ({
    bandRef: null,
    awards: null,
    isShowRouletteAward: false,
    award: null,
    countSpins: 0,
  }),
  getters: {
    rouletteAwardStatus: (state) => state.isShowRouletteAward,
    awardAmount: (state) => state.award,
    isFirstSpin: (state) => state.countSpins === 0,
  },
  actions: {
    // setters
    setBandRef(ref) {
      this.bandRef = ref;
    },
    setAwards(awards) {
      this.awards = awards;
    },
    setAward(award) {
      this.award = award;
    },

    // Methods
    incrementSpin() {
      console.log('[incrementSpin]: Фиксация спина');

      this.countSpins++;
    },
    animateClear() {
      console.log('[animateClear]: Очистка анимации');

      this.bandRef.style.marginLeft = '-240px';
    },
    animateTo(marginValue, duration) {
      console.log('[animateTo]: Анимация прокрутки');

      this.bandRef.style.transition = duration ? `all ${duration}s` : 'none';
      this.bandRef.style.marginLeft = `-${marginValue}px`;
    },
    startSpin() {
      console.log('[startSpin]: Начинаю прокрутку');

      return new Promise((resolve) => {
        this.animateTo(240 * 26, 2);

        setTimeout(() => resolve({ isEnd: true }), 2 * 1000);
      });
    },
    finishSpin() {
      console.log('[finishSpin]: Конец игры');

      const award = this.awards[28];

      this.setAward(award.price);
    },
    displayAward() {
      console.log('[displayAward]: Показать награду');

      this.isShowRouletteAward = true;
    },
    hideAward() {
      console.log('[hideAward]: Скрыть награду');

      this.isShowRouletteAward = false;
    },
    trimStripe() {
      console.log('[trimStripe]: Обрезать ленту');

      const trimAwards = this.awards.slice(25);

      this.awards = trimAwards;
      this.animateTo(240, 0);
    },
    updateStripe() {
      console.log('[updateStripe]: Обновить ленту к следующему спину');

      axios
        .post('http://localhost:3001/api/v1/getShuffledAwards', {
          length: 25,
        })
        .then((success) => {
          const { status, data } = success;

          if (status !== 200 || !data.ok) {
            throw new Error({ ok: data.ok, error: 'Какая-то срака.' });
          }

          const parsedAwards = JSON.parse(data.data);
          const newAwards = this.awards.concat(parsedAwards);

          this.awards = newAwards;
        })
        .catch((error) => console.log(`[updateStripe]: Error: ${error}`));
    },
  },
});
