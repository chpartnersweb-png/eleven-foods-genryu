# 編集ガイド

## ページ

- `/`：ブランドトップ。お品書き・歴史・平日サービス・2店舗案内。
- `/shops/nishikojiya/`：西糀谷店。
- `/shops/minamishinagawa/`：南品川店。

歴史・メニュー・平日サービスの独立ページは追加していません。
公開・デプロイは実施していません。依頼により、実装後のビルド・テスト・ブラウザ確認も実施していません。

## よく編集する箇所

| 内容 | ファイル |
| --- | --- |
| 住所・電話・時間・L.O.・定休日・席数・地図URL | `src/data/site.ts` の `shops` |
| メニュー・価格 | `src/data/site.ts` の `menuGroups` / `extras` |
| 平日サービスの基本情報 | `src/data/site.ts` の `brand.lunch` |
| 平日サービスの表示 | `src/components/LunchBanner.astro` |
| 写真の割り当て | `src/data/images.ts` |
| トップの本文・歴史・料理の紹介 | `src/pages/index.astro` |
| 各店舗ページ共通の構成・支払方法 | `src/pages/shops/[slug].astro` |
| 全体の配色・レイアウト・画面幅別の調整 | `src/styles/global.css` |
| GSAP・Lenis・スマートフォンのメニュー | `src/scripts/site.ts` |
| 共通の公開URL・トップのタイトルと説明 | `src/config/seo.mjs` |
| メタタグ・OGP・構造化データ | `src/components/Seo.astro` |
| 店舗別のタイトルと説明 | `src/pages/shops/[slug].astro` |
| フォント・共通レイアウト | `src/layouts/BaseLayout.astro` |

トップ・店舗ページの主要商品紹介と価格表は `featuredPrices` を介して共通の価格データを使用します。
麺増量サービスの時間は案内帯と店舗ページの説明文で `brand.lunch.hours` を共有しています。

## 画像

- `src/assets/generated/`：実商品写真を参照した生成素材4点。元写真と最終プロンプトは `GENERATED-ASSETS.md`。
- `S__58687592.jpg`：ユーザー指定の南品川店内写真。
- その他の店内・外観写真は主に西糀谷店の提供素材。
- 商品の細部に寄った写真は提供された実写を使用。
- ロゴは既存の `logo.png`。生成による描き直しはしていません。
- Astroの画像コンポーネントでWebPのサイズ別配信を指定。ヒーローは優先読み込み、下部画像と地図は遅延読み込み。

## 仕様

- 全メニューはトップでは開閉式、店舗ページでは初めから開いた状態。
- PCの細かいポインター操作時にLenisを適用し、スマートフォンのタッチ操作はネイティブのスクロールを使用。
- `prefers-reduced-motion` でアニメーションとスクロール補間を停止。
- スマートフォンの固定バーは、トップがメニュー・店舗選択、店舗ページがメニュー・地図・電話。
- メニューは同一データを両店で使用。電話・地図は該当店舗のものを使用。
- 公開URLはユーザー指定の `https://eleven-foods-genryu.pages.dev`。正規URL・OGP・構造化データ・サイトマップをこのドメインに統一しています。設定の詳細と確認範囲は `SEO.md`。

開発サーバーを起動する場合はAGENTS.mdに従い `astro dev --background` を使用し、`astro dev stop` / `status` / `logs` で管理してください。
