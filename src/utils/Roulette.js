import { useRouletteStore } from '@/stores/useRouletteStore.js';
import { useLoadThings } from '@/helpers/useLoadThings.js';

// Sounds
import endSound from '@/assets/sounds/end.mp3';
import spinSound from '@/assets/sounds/spin.mp3';

const CARD_WIDTH = 260;
const DURATION = 1;
const DELAY_BEFORE_NEXT_SPIN = 0;

const playSound = (sound) => {
  const audio = new Audio(sound);

  audio.volume = 0.0;
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

const afterSpin = ({ ref, result }) => {
  const store = useRouletteStore();

  if (result.isEnd) {
    const award = getAward();

    setTimeout(() => {
      ref.disabled = false;
    }, DELAY_BEFORE_NEXT_SPIN * 1000);

    playSound(endSound);
    end();

    store.addToHistory(award);
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
