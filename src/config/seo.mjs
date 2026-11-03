export const seo = Object.freeze({
  origin: 'https://eleven-foods-genryu.pages.dev',
  siteName: 'イレブンフーズ源流',
  language: 'ja-JP',
  socialImage: '/ogp.png',
  homeTitle: 'イレブンフーズ源流｜西糀谷・南品川の塩トンコツ醤油ラーメン',
  homeDescription: '初代から50年以上受け継ぐ、秘伝の塩トンコツ醤油ラーメン。イレブンフーズ源流の西糀谷店は大鳥居駅より徒歩約10分、南品川店は新馬場駅より徒歩約4分。お品書き・営業時間・アクセス、平日の麺増量無料サービスをご案内します。',
});

/** @param {string} [path] */
export function absoluteUrl(path = '/') {
  return new URL(path, `${seo.origin}/`).href;
}

/** Canonical pages use the production origin, without queries or fragments.
 * @param {string} pathname
 */
export function canonicalUrl(pathname) {
  const path = new URL(pathname, `${seo.origin}/`).pathname
    .replace(/\/index\.html$/, '/')
    .replace(/\/{2,}/g, '/');
  return absoluteUrl(path.endsWith('/') ? path : `${path}/`);
}
