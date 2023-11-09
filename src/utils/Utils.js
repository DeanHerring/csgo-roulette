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
    // const AWARDS = [
    //   { id: 1, color: 'white', rarity: 100 }, // 0 - 1 000 000
    //   { id: 2, color: 'green', rarity: 14 }, // 430 000 - 570 000
    //   { id: 3, color: 'blue', rarity: 5 }, // 475 000 - 525 000
    //   { id: 4, color: 'purpure', rarity: 1 }, // 495 000 - 505 000
    //   { id: 5, color: 'gold', rarity: 0.1 }, // 499 500 - 500 500
    // ];

    const AWARDS = [
      { id: 1, color: 'white', price: 0.12, rarity: 46.81 },
      { id: 2, color: 'white', price: 0.17, rarity: 45.21 },
      { id: 3, color: 'white', price: 0.43, rarity: 1.26 },
      { id: 4, color: 'white', price: 1.34, rarity: 0.84 },
      { id: 5, color: 'green', price: 1.61, rarity: 3.09 },
      { id: 6, color: 'white', price: 2.31, rarity: 1.48 },
      { id: 7, color: 'green', price: 3.08, rarity: 0.57 },
      { id: 8, color: 'white', price: 9.11, rarity: 0.003 },
      { id: 9, color: 'blue', price: 10.35, rarity: 0.005 },
      { id: 10, color: 'white', price: 14.04, rarity: 0.009 },
      { id: 11, color: 'green', price: 15.27, rarity: 0.006 },
      { id: 12, color: 'green', price: 19, rarity: 0.65 },
      { id: 13, color: 'blue', price: 37.37, rarity: 0.01 },
      { id: 14, color: 'green', price: 48.04, rarity: 0.02 },
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
    const reversedAwards = awards.sort((a, b) => a.rarity - b.rarity);

    const award = reversedAwards.find((currentAward) => {
      const [rangeMin, rangeMax] = this.getAwardRarityRange(currentAward);

      if (randomNum >= rangeMin && randomNum <= rangeMax) {
        return currentAward;
      }
    });

    return award ? award : reversedAwards[reversedAwards.length - 1];
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
