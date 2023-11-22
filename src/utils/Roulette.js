import { useRouletteStore } from '@/stores/useRouletteStore.js';
import { useLoadThings } from '@/helpers/useLoadThings.js';

// Sounds
import endSound from '@/assets/sounds/end.mp3';
import spinSound from '@/assets/sounds/spin.mp3';

const CARD_WIDTH = 260;
const DURATION = 4.4;
const DELAY_BEFORE_NEXT_SPIN = 1.2;

const playSound = (sound) => {
  const audio = new Audio(sound);

  audio.volume = 0.1;
  audio.play();
};

const start = () => {
  const store = useRouletteStore();

  return new Promise((resolve) => {
    store.animateTo(CARD_WIDTH * 26, DURATION);

    setTimeout(() => resolve({ isEnd: true }), DURATION * 1000);
  });
};

const getAward = () => {
  const store = useRouletteStore();
  const award = store.awards[28];

  return award;
};

const end = () => {
  const store = useRouletteStore();
  const award = getAward();

  store.setAward(award.price);
};

const getWeapons = async () => {
  const things = await useLoadThings({
    url: 'http://localhost:3001/api/v1/getShuffledAwards',
    method: 'POST',
    postData: {
      length: 25,
    },
  });

  return things && things;
};

const afterSpin = (result) => {
  const store = useRouletteStore();

  if (result.isEnd) {
    const award = getAward();

    setTimeout(() => {
      store.spinRef.disabled = false;
      store.autoplayRef.disabled = false;
    }, DELAY_BEFORE_NEXT_SPIN * 1000);

    playSound(endSound);
    end();

    store.addToHistory(award);
    store.setDisplayAward(true);
  }
};

const spin = () => {
  const store = useRouletteStore();

  store.spinRef.disabled = true;
  store.autoplayRef.disabled = true;

  playSound(spinSound);
  start().then((result) => afterSpin(result));
};

const respin = async () => {
  const store = useRouletteStore();
  const weapons = await getWeapons();

  store.spinRef.disabled = true;
  store.autoplayRef.disabled = true;

  store.setDisplayAward(false);
  store.trimStripe();
  store.updateStripe(weapons);
  store.animateClear();

  playSound(spinSound);

  setTimeout(() => {
    start().then((result) => afterSpin(result));
  }, 100);
};

const autoplay = async () => {
  const store = useRouletteStore();

  console.log('asdhjabsd');

  store.spinRef.disabled = true;
  store.autoplayRef.disabled = true;

  if (store.isFirstSpin) {
    playSound(spinSound);

    start().then((result) => {
      if (result.isEnd) {
        const award = getAward();

        playSound(endSound);
        end();

        console.log(store);

        store.addToHistory(award);
        store.setDisplayAward(true);

        setTimeout(() => {
          autoplay();
        }, DELAY_BEFORE_NEXT_SPIN * 1000);
      }
    });
  } else {
    const weapons = await getWeapons();

    store.setDisplayAward(false);
    store.trimStripe();
    store.updateStripe(weapons);
    store.animateClear();

    setTimeout(() => {
      playSound(spinSound);

      start().then((result) => {
        if (result.isEnd) {
          const award = getAward();

          playSound(endSound);
          end();

          store.addToHistory(award);
          store.setDisplayAward(true);

          setTimeout(() => {
            autoplay();
          }, DELAY_BEFORE_NEXT_SPIN * 1000);
        }
      });
    }, 100);
  }
};

const Roulette = {
  spin,
  respin,
  autoplay,
};

export default Roulette;
