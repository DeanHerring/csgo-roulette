import { defineStore } from 'pinia';
import axios from 'axios';

const CARD_WIDTH = 260;
const DURATION = 4.4;

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

    // Methods
    incrementSpin() {
      console.log('[incrementSpin]: Фиксация спина');

      this.countSpins++;
    },
    animateClear() {
      console.log('[animateClear]: Очистка анимации');

      this.stripeRef.style.marginLeft = `-${CARD_WIDTH}px`;
    },
    animateTo(marginValue, duration) {
      console.log('[animateTo]: Анимация прокрутки');

      this.stripeRef.style.transition = duration ? `all ${duration}s` : 'none';
      this.stripeRef.style.marginLeft = `-${marginValue}px`;
    },
    playSound(sound) {
      const audio = new Audio(sound);

      audio.onloadedmetadata = () => {
        console.log(`Duration: ${audio.duration}`);
      };

      audio.play();
    },
    startSpin() {
      console.log('[startSpin]: Начинаю прокрутку');

      return new Promise((resolve) => {
        this.animateTo(CARD_WIDTH * 26, DURATION);

        setTimeout(() => resolve({ isEnd: true }), DURATION * 1000);
      });
    },
    finishSpin() {
      console.log('[finishSpin]: Конец игры');

      const award = this.awards[28];

      this.setAward(award.price);
    },
    displayAward() {
      console.log('[displayAward]: Показать награду');

      this.isDisplayAward = true;
    },
    hideAward() {
      console.log('[hideAward]: Скрыть награду');

      this.isDisplayAward = false;
    },
    trimStripe() {
      console.log('[trimStripe]: Обрезать ленту');

      const trimAwards = this.awards.slice(25);

      this.awards = trimAwards;
      this.animateTo(CARD_WIDTH, 0);
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
