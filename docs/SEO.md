# SEO設定

実装日：2026年11月3日
ユーザー指定の本番URL：https://eleven-foods-genryu.pages.dev

## 本番URLと正規URL

`src/config/seo.mjs` を本番URLの共通設定とし、Astroの `site`、canonical、OGP、JSON-LD、robots.txt、サイトマップから参照。
ページURLは末尾スラッシュ付きに統一。canonicalには本番ドメインを使用し、クエリやフラグメントを含めない。

- トップ：https://eleven-foods-genryu.pages.dev/
- 西糀谷店：https://eleven-foods-genryu.pages.dev/shops/nishikojiya/
- 南品川店：https://eleven-foods-genryu.pages.dev/shops/minamishinagawa/

別ドメインへ移行する場合は `seo.mjs` を更新し、再ビルド・再デプロイする。旧ドメインからの転送はホスティング側でも別途設定する。

## メタデータ

`src/components/Seo.astro` に共通化し、BaseLayoutから各ページに出力。

- ページ固有のタイトルとdescription。店舗ページでは店名と最寄り駅を含める。
- canonical、OGPのURL・タイトル・説明・画像・画像の代替テキスト。
- X/Twitterの大型画像カード、タイトル、説明、画像と代替テキスト。
- index / follow / max-image-preview:large。
- サイトマップへのリンク。

トップのOGP画像はクライアント提供の `public/ogp.png`（ブランドロゴ）を維持。
各店舗のOGPは実際の店舗写真からAstroで1200×630pxのJPEGを生成する指定。西糀谷店は外観、南品川店は指定された店内写真。
メタデータの画像URLはすべて本番ドメインの絶対URL。

## 構造化データ

JSON-LDで次の情報を出力する。

- 共通：Organization、WebSite、WebPage。
- トップ：2店舗へのリンクを表すItemList。
- 各店舗：Restaurant、BreadcrumbList、Menu（MenuSection・MenuItem・Offerを含む）。

Restaurantには店舗名、URL、説明、実店舗写真、電話、郵便番号、住所と建物名、営業曜日と営業時間、料理ジャンル、Googleマップ、お品書きへのURL、ブランドとの関係を設定。
追加のユーザー提供情報に基づき、決済方法は現金・PayPayを構造化データに設定。トップと店舗の説明文にテイクアウト・Uber Eats対応も反映。
人気メニューの画像追加に合わせ、店舗ページのdescriptionにも特製ラーメン・チャーシューメンと商品イメージ・価格の案内を反映。このdescriptionはOGP・X/TwitterとWebPage・Restaurantの説明にも共通で出力する。

Menuには店舗別の人気メニュー（並盛）と、共通メニューのラーメン・野菜ラーメン・つけ麺・トッピングとサイドを掲載。MenuItemのOfferに価格・JPYと並盛／大盛／特盛の区別を設定する。画面表示と同じ `popularMenus`・`menuGroups`・`extras` を参照し、別の価格を手入力しない。缶ビールの注文条件も画面表示に合わせて記載する。
Restaurantの `hasMenu` からMenuを参照し、GoogleのLocalBusiness資料に記載される `menu` URLも実際のお品書きセクションへ設定。提供された人気順を口コミ評価や星評価として扱わない。
西糀谷店は全曜日9:00〜17:00、南品川店は水〜日8:00〜16:00。ラストオーダーを閉店時刻として扱わない。
営業時間の時刻は `site.ts` の表示データから変換。曜日は `openingDays`、住所の市区は `locality` を使用する。

生成した料理画像を実店舗の写真として構造化データに入れていない。
今回追加した生成素材もMenuItemの実商品写真として出力していない。画面の代替テキスト・注記で商品イメージであることを明示し、OGPとRestaurantの画像には実店舗写真を継続使用する。
評価・口コミ・受賞歴・座標・不明な決済ブランド・創業年・価格帯などを推測して追加していない。
構造化データは検索結果の特別な表示や順位を保証するものではない。

## クローラー向けファイル

- `src/pages/sitemap.xml.ts` → `/sitemap.xml`
  - トップと2店舗の計3URL。店舗追加時は `shops` から自動反映。
  - 確実な更新日時を管理していないためlastmodは付けない。
  - priorityやchangefreqは追加しない。
- `src/pages/robots.txt.ts` → `/robots.txt`
  - クロールを許可し、本番のサイトマップURLを記載。

静的エンドポイントとしてビルド時に生成する指定。追加パッケージのインストールは不要。

## 反映と確認の範囲

今回行ったのはローカルソースの実装。再デプロイは行っていない。
ユーザー指定の公開URLは調査用Web取得ツールで読み取れなかったため、現在公開されているHTMLやHTTP状態は確認できていない。
ユーザーの指示に従い、実装後のビルド、テスト、ブラウザ表示、構造化データの検証ツールによる確認は行っていない。
Search Consoleの所有権確認・サイトマップ送信・URL検査・インデックス状況確認も行っていない。

再デプロイ後、Search Consoleに登録するサイトマップは `https://eleven-foods-genryu.pages.dev/sitemap.xml`。

## 参照した公式資料

- Astro routing：https://docs.astro.build/en/guides/routing/
- Astro components：https://docs.astro.build/en/basics/astro-components/
- Astro images：https://docs.astro.build/en/guides/images/
- Google canonical：https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google LocalBusiness：https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google breadcrumbs：https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- Google sitemap：https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google構造化データの一般ガイドライン：https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Schema.org Menu：https://schema.org/Menu
- Schema.org MenuItem：https://schema.org/MenuItem
