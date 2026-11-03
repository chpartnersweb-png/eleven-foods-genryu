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
| 店舗別の人気メニューTop5 | `src/data/site.ts` の `popularMenus` / `src/components/PopularMenu.astro` |
| 支払い・テイクアウト・Uber Eats | `src/data/site.ts` の `brand` |
| 冷凍商品の販売場所・品目・有料容器案内 | `src/data/site.ts` の `shops[].frozenSales` / `takeoutContainerNote` |
| ご自宅向けの案内構成 | `src/components/TakeHome.astro` |
| メニュー・価格 | `src/data/site.ts` の `menuGroups` / `extras` |
| 平日サービスの基本情報 | `src/data/site.ts` の `brand.lunch` |
| 平日サービスの表示 | `src/components/LunchBanner.astro` |
| 写真の割り当て | `src/data/images.ts` |
| トップの本文・歴史・料理の紹介 | `src/pages/index.astro` |
| 各店舗ページ共通の構成 | `src/pages/shops/[slug].astro` |
| 全体の配色・レイアウト・画面幅別の調整 | `src/styles/global.css` |
| GSAP・Lenis・スマートフォンのメニュー | `src/scripts/site.ts` |
| 共通の公開URL・トップのタイトルと説明 | `src/config/seo.mjs` |
| メタタグ・OGP・構造化データ | `src/components/Seo.astro` |
| 店舗別のタイトルと説明 | `src/pages/shops/[slug].astro` |
| フォント・共通レイアウト | `src/layouts/BaseLayout.astro` |

トップ・店舗ページの主要商品紹介と価格表は `featuredPrices` を介して共通の価格データを使用します。
麺増量サービスの時間は案内帯と店舗ページの説明文で `brand.lunch.hours` を共有しています。

## 画像

- `src/assets/generated/`：実商品写真を参照した生成素材7点。元写真と最終プロンプトは `GENERATED-ASSETS.md`。
- 店舗ページの人気商品には、チャーシューメン・ラーメン・特製ラーメン・ネギラーメン・野菜ラーメン・通常のつけ麺の専用素材を使用。`popular-*.png` の3点を追加。通常のつけ麺は麺の器のみの画像と明記し、特製つけ麺の素材とは区別。
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
- 人気順は店舗別データ。`popularMenus[].imageKey` で商品別素材に紐付け、1位を大きく、2〜5位をPCでは2列・スマートフォンでは1列で紹介。紹介文は `PopularMenu.astro` の `dishDetails`。生成画像の注記を表示。
- 店内紹介の「気軽に、一杯。」は折り返さず、文字サイズと余白を画面幅に応じて調整。
- 冷凍商品・テイクアウト・デリバリーはトップと両店舗ページに表示。南品川店はカウンター販売、西糀谷店は店頭自販機販売と有料容器案内を表示。
- 席数と決済方法は追加のユーザー提供情報に更新済み。その他の決済ブランドは画像が届いた後に更新する。
- 公開URLはユーザー指定の `https://eleven-foods-genryu.pages.dev`。正規URL・OGP・構造化データ・サイトマップをこのドメインに統一しています。設定の詳細と確認範囲は `SEO.md`。

開発サーバーを起動する場合はAGENTS.mdに従い `astro dev --background` を使用し、`astro dev stop` / `status` / `logs` で管理してください。
