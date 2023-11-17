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

  audio.play();
};

const start = () => {
  const store = useRouletteStore();

  return new Promise((resolve) => {
    store.animateTo(CARD_WIDTH * 26, DURATION);

    setTimeout(() => resolve({ isEnd: true }), DURATION * 1000);
  });
};

const end = () => {
  const store = useRouletteStore();
  const award = store.awards[28];

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

const afterSpin = ({ ref, result }) => {
  const store = useRouletteStore();

  if (result.isEnd) {
    setTimeout(() => {
      ref.disabled = false;
    }, DELAY_BEFORE_NEXT_SPIN * 1000);

    playSound(endSound);
    end();

    store.setDisplayAward(true);
  }
};

const spin = (ref) => {
  playSound(spinSound);
  start().then((result) => afterSpin({ ref, result }));
};

const respin = async (ref) => {
  const store = useRouletteStore();
  const weapons = await getWeapons();

  store.setDisplayAward(false);
  store.trimStripe();
  store.updateStripe(weapons);
  store.animateClear();

  playSound(spinSound);

  setTimeout(() => {
    start().then((result) => afterSpin({ ref, result }));
  }, 100);
};

const Roulette = {
  spin,
  respin,
};

export default Roulette;
