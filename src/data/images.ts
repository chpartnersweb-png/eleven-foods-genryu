import logo from '../assets/logo.png';
import special from '../assets/generated/special.png';
import regular from '../assets/generated/regular.png';
import vegetable from '../assets/generated/vegetable.png';
import tsukemen from '../assets/generated/tsukemen.png';
import chashu from '../assets/generated/popular-chashu.png';
import negi from '../assets/generated/popular-negi.png';
import plainTsukemen from '../assets/generated/popular-plain-tsukemen.png';
import exterior from '../assets/IMG_0980.jpeg';
import exteriorDetail from '../assets/IMG_0978.jpeg';
import nishikojiyaInterior from '../assets/LINE_ALBUM_店内+ロゴ素材_261103_6.jpg';
import minamishinagawaInterior from '../assets/S__58687592.jpg';
import pork from '../assets/LINE_ALBUM_ラーメン素材_261103_17.jpg';
import egg from '../assets/LINE_ALBUM_ラーメン素材_261103_8.jpg';
import menma from '../assets/LINE_ALBUM_ラーメン素材_261103_13.jpg';
import signatureOriginal from '../assets/LINE_ALBUM_ラーメン素材_261103_21.jpg';

export const images = { logo, special, regular, vegetable, tsukemen, chashu, negi, plainTsukemen, exterior, exteriorDetail,
  nishikojiyaInterior, minamishinagawaInterior, pork, egg, menma, signatureOriginal };

export const shopImage = (slug: string) => slug === 'nishikojiya' ? exterior : minamishinagawaInterior;
