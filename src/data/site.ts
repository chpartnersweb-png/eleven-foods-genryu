export const brand = {
  name: 'イレブンフーズ源流',
  instagram: 'https://www.instagram.com/elevenfoods_genryu/',
  instagramHandle: '@elevenfoods_genryu',
  parking: '提携駐車場はございません。お近くの有料駐車場をご利用ください。',
  lunch: { hours: '11:00〜15:00', title: '平日限定 麺増量無料', note: '平日のランチに、いつもの一杯をたっぷりと。' },
};

export const shops = [
  {
    slug: 'nishikojiya', name: '西糀谷店', english: 'NISHIKOJIYA', number: '01',
    postalCode: '144-0034', address: '東京都大田区西糀谷2-26-4', building: '都営ビル104', locality: '大田区',
    phone: '03-5737-1191', telephone: '0357371191',
    hours: '9:00〜17:00', lastOrder: '16:30', closed: 'なし',
    openingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    access: ['大鳥居駅より徒歩約10分'],
    seats: '21席（カウンター9席）',
    map: 'https://maps.app.goo.gl/xd5E81rwTem2WnUo8?g_st=ic',
    mapQuery: 'イレブンフーズ源流 西糀谷 東京都大田区西糀谷2-26-4',
    openingYear: '2003',
  },
  {
    slug: 'minamishinagawa', name: '南品川店', english: 'MINAMISHINAGAWA', number: '02',
    postalCode: '140-0004', address: '東京都品川区南品川2-15-3', building: 'フラットAI 101', locality: '品川区',
    phone: '03-3472-1197', telephone: '0334721197',
    hours: '8:00〜16:00', lastOrder: '15:00', closed: '月曜日・火曜日',
    openingDays: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    access: ['新馬場駅より徒歩約4分', '青物横丁駅より徒歩約9分'],
    seats: '15席（カウンター9席・テーブル6席）',
    map: 'https://maps.app.goo.gl/63wEyZ1MT4ZeDXnR8?g_st=ic',
    mapQuery: 'イレブンフーズ源流 南品川店 東京都品川区南品川2-15-3',
    openingYear: '2014',
  },
] as const;

export type Shop = (typeof shops)[number];

export const menuGroups = [
  { name: 'ラーメン', items: [
    { name: 'ラーメン', prices: [950, 1050, 1150] },
    { name: '特製ラーメン', prices: [1230, 1330, 1430], signature: true },
    { name: 'チャーシューメン', prices: [1300, 1400, 1500] },
    { name: '特製チャーシュー', prices: [1580, 1680, 1780] },
  ] },
  { name: '野菜ラーメン', items: [
    { name: '野菜ミックス', prices: [950, 1050, 1150] },
    { name: '野菜もやし', prices: [950, 1050, 1150] },
    { name: '野菜ねぎ', prices: [950, 1050, 1150] },
    { name: '特製野菜ミックス', prices: [1230, 1330, 1430] },
    { name: '特製野菜もやし', prices: [1230, 1330, 1430] },
    { name: '特製野菜ねぎ', prices: [1230, 1330, 1430] },
  ] },
  { name: 'つけ麺', note: 'あつ盛・冷や盛をお選びいただけます。', items: [
    { name: 'つけ麺', prices: [980, 1080, 1180] },
    { name: '特製つけ麺', prices: [1260, 1360, 1460] },
  ] },
];

export const extras = [
  { name: '味付玉子', price: 150 }, { name: 'きくらげ', price: 230 },
  { name: 'わかめ', price: 150 }, { name: 'メンマ', price: 230 },
  { name: 'のり', price: 150 }, { name: 'もやし', price: 250 },
  { name: 'ねぎ', price: 280 }, { name: '温野菜', price: 280 },
  { name: '玉ねぎ', price: 100 }, { name: '替え玉', price: 200 },
  { name: 'ライス', price: 180 }, { name: '缶ビール', price: 400 },
];

// The featured dishes and the full price table share the same source values.
export const featuredPrices = {
  special: menuGroups[0].items[1].prices[0],
  regular: menuGroups[0].items[0].prices[0],
  vegetable: menuGroups[1].items[0].prices[0],
  tsukemen: menuGroups[2].items[1].prices[0],
};

export const yen = (value: number) => `${value.toLocaleString('ja-JP')}円`;
