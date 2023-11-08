import { config } from '@/config/config.js';

export default class Utils {
  /**
   * @param {Number} min
   * @param {Number} max
   *
   * @return {Number}
   */
  getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getDefaultAwards() {
    const AWARDS = [
      { id: 1, color: 'white', rarity: 100 }, // 0 - 1 000 000
      { id: 2, color: 'green', rarity: 14 }, // 430 000 - 570 000
      { id: 3, color: 'blue', rarity: 5 }, // 475 000 - 525 000
      { id: 4, color: 'purpure', rarity: 1 }, // 495 000 - 505 000
      { id: 5, color: 'gold', rarity: 0.1 }, // 499 500 - 500 500
    ];

    return AWARDS;
  }

  getAwardRarityRange(award) {
    const rangeMin = (config.MAX - award.rarity * 10000) / 2;
    const rangeMax = rangeMin + award.rarity * 10000;

    return [rangeMin, rangeMax];
  }

  getAwardItem() {
    const awards = this.getDefaultAwards();
    const randomNum = this.getRandomNum(config.MIN, config.MAX);
    const reversedAwards = awards.reverse();

    for (let i = 0; i < reversedAwards.length; i++) {
      const award = reversedAwards[i];
      const [rangeMin, rangeMax] = this.getAwardRarityRange(award);

      if (randomNum >= rangeMin && randomNum <= rangeMax) {
        return award;
      }
    }
  }

  getAwardsList(length) {
    const awards = [];

    for (let i = 0; i < length; i++) {
      const award = this.getAwardItem();
      awards.push(award);
    }

    return awards;
  }
}
