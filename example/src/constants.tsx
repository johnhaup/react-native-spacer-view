import { Dimensions } from 'react-native';

export interface Item {
  title: string;
  subtitle: string;
  image: string;
}

export const BASE_UNIT = 8;
export const DEFAULT_PADDING = BASE_UNIT * 2;
export const IMG_ASPECT_RATIO = 3 / 2;
export const IMG_WIDTH = Dimensions.get('window').width * 1.5;
export const IMG_HEIGHT = IMG_WIDTH / IMG_ASPECT_RATIO;

const BANDS = [
  'Nirvana',
  'Wavves',
  'Turnstile',
  'Against Me!',
  'Otoboke Beaver',
  'Jellyfish',
  'Weezer',
  'Skegss',
  'The Strokes',
  'The White Stripes',
];
export const ITEMS: Item[] = BANDS.map((band, i) => ({
  title: band,
  subtitle: 'Lorem florem ipsum barfo',
  image: `https://picsum.photos/${IMG_WIDTH}/${IMG_HEIGHT}?random=${i}`,
}));
