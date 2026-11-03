# 生成画像の記録


## 店舗別の人気メニュー用素材（追加）

組み込み image_gen で商品ごとに個別生成。既存のラーメン・特製ラーメン・野菜ラーメンの生成画像と併せ、6種類を品名別に割り当てる。
通常のつけ麺に、卵・メンマ・海苔付きの特製つけ麺画像は流用しない。通常のつけ麺は提供写真にある麺の器のみを表示し、つけ汁が別添えである旨を添える。
チャーシューメンは券売機の「チャーシューメン 1,300円」の写真を品目・盛り付けの参照とし、ラーメン写真と肉の接写は器・質感の補助参照に限定。特製の卵は追加しない。

### popular-chashu.png

- 保存先：`src/assets/generated/popular-chashu.png`
- 参照画像：`src/assets/LINE_ALBUM_店内+ロゴ素材_261103_13.jpg`、`src/assets/LINE_ALBUM_ラーメン素材_261103_27.jpg`、`src/assets/LINE_ALBUM_ラーメン素材_261103_17.jpg`
- 用途：店舗ページの人気メニュー（チャーシューメン）

最終プロンプト：

```text
Use case: product-mockup. Create one photorealistic Japanese ramen restaurant menu cutout, consistent with a premium natural food photograph, not an illustration. Landscape 3:2 canvas, entire bowl centered with 6 percent clear margin on every side, elevated three-quarter view, warm soft studio light from upper left, realistic moist food texture and restrained natural colors. Genuinely transparent alpha background, no black or white rectangle, no checkerboard, no tabletop or props, no hands or utensils, no text, no logos, no steam. Preserve the reference food identity, bowl silhouette, ingredients and serving scale. Reference 1 is a vending machine menu: use ONLY the actual dish thumbnail directly under チャーシューメン on its right-hand yellow panel (1300yen), not the standard ramen thumbnail and not any poster above. That thumbnail defines the chashu portion and arrangement: ivory bowl, a generous pile of pale irregular thick braised pork pieces centered/back, one nori sheet at back left, wakame and wood ear mushrooms towards front, cloudy beige soup and noodles. Reference 2 defines this restaurant ivory bowl, nori, broth, noodles and vegetables only; the chashu bowl has more meat, matching reference 1, not an arbitrary exaggeration. Reference 3 is ONLY a close-up reference for the pale moist braised pork texture; do NOT copy its egg. No egg, no menma, no grilled spiral pork slices, no added garnish. Create only the chashu ramen bowl, not the vending machine or a composite.
```

### popular-negi.png

- 保存先：`src/assets/generated/popular-negi.png`
- 参照画像：`src/assets/LINE_ALBUM_ラーメン素材_261103_24.jpg`
- 用途：店舗ページの人気メニュー（ネギラーメン）

最終プロンプト：

```text
Use case: product-mockup. Create one photorealistic Japanese ramen restaurant menu cutout, consistent with a premium natural food photograph, not an illustration. Landscape 3:2 canvas, entire bowl centered with 6 percent clear margin on every side, elevated three-quarter view, warm soft studio light from upper left, realistic moist food texture and restrained natural colors. Genuinely transparent alpha background, no black or white rectangle, no checkerboard, no tabletop or props, no hands or utensils, no text, no logos, no steam. Preserve the reference food identity, bowl silhouette, ingredients and serving scale. Reference image is the exact negi ramen dish. Preserve the ivory ceramic bowl, central mound of finely shredded white and light-green long onion, pale chunky braised pork at front left, wakame at back left and wood ear mushrooms on right, cloudy beige broth. Match the reference portion, arrangement and angle. No egg, no nori, no menma or new toppings. Improve light and resolution while preserving the actual dish.
```

### popular-plain-tsukemen.png

- 保存先：`src/assets/generated/popular-plain-tsukemen.png`
- 参照画像：`src/assets/LINE_ALBUM_ラーメン素材_261103_1.jpg`
- 用途：店舗ページの人気メニュー（通常のつけ麺・麺の器のみ）

最終プロンプト：

```text
Use case: product-mockup. Create one photorealistic Japanese ramen restaurant menu cutout, consistent with a premium natural food photograph, not an illustration. Landscape 3:2 canvas, entire bowl centered with 6 percent clear margin on every side, elevated three-quarter view, warm soft studio light from upper left, realistic moist food texture and restrained natural colors. Genuinely transparent alpha background, no black or white rectangle, no checkerboard, no tabletop or props, no hands or utensils, no text, no logos, no steam. Preserve the reference food identity, bowl silhouette, ingredients and serving scale. Reference image is the exact plain tsukemen NOODLE-SIDE BOWL ONLY. Preserve its dark brown-black glazed ceramic bowl with the distinctive golden brown interior brushstroke on the right, its heap of pale yellow drained noodles, bowl shape, portion and view angle. No soup in this bowl, no toppings, no egg, no menma, no nori, no pork, no garnish. Do not invent an additional dipping broth bowl. Render only this single noodle bowl; the website will explicitly indicate this is the noodle side.
```


生成日：2026年11月3日
使用方法：組み込み image_gen ツール（CLI/APIフォールバックは未使用）。背景透過を指定。
元の提供写真は変更せず、生成画像を src/assets/generated に保存。
生成画像は実商品を参照した演出用イメージ。ページ内にイメージ表記を設けている。

## special.png

- 保存先：src/assets/generated/special.png
- 参照画像：src/assets/LINE_ALBUM_ラーメン素材_261103_20.jpg
- 用途：トップのヒーロー、看板商品、店舗ページ

最終プロンプト：

```text
Use case: background-extraction / product-mockup. Input image 1 is the exact real product reference. Create a premium high resolution photorealistic food image for a Japanese ramen restaurant website, based closely on this reference. hero centerpiece and signature menu cutout. Preserve the distinctive BLACK glazed bowl with red inner rim, three upright sheets of nori at the back, exactly one halved soft egg (two halves) at front, chunky pale braised pork in center, long bamboo shoots on right, wakame back right, wood ear mushrooms left, cloudy beige soup. Match amounts, no new ingredients. Composition: entire bowl and every nori edge fully visible, elevated three-quarter view close to the reference angle, centered in a landscape 3:2 canvas, tight but with 6 percent clear margin. Clean subtle warm studio lighting from upper left, realistic moist textures, restrained natural colors, no stylization. Background: genuinely transparent alpha, no colored rectangle, no checkerboard baked in, no tabletop, minimal contact shadow only. Invariants: preserve bowl color, silhouette, food identity, arrangement, quantities and proportions from the reference. Improve resolution and light only. No text, no logo, no watermark, no props, no hands, no chopsticks, no dramatic fake steam.
```

## regular.png

- 保存先：src/assets/generated/regular.png
- 参照画像：src/assets/LINE_ALBUM_ラーメン素材_261103_27.jpg
- 用途：トップのお品書き

最終プロンプト：

```text
Use case: background-extraction / product-mockup. Input image 1 is the exact real product reference. Create a premium high resolution photorealistic food image for a Japanese ramen restaurant website, based closely on this reference. standard ramen menu cutout. Preserve the ivory ceramic bowl, one nori sheet at back left, pale braised pork center, wood ear mushrooms at front left, green wakame front right, visible noodles, cloudy beige soup. No eggs, no menma, no added toppings. Match amount. Composition: entire bowl and every nori edge fully visible, elevated three-quarter view close to the reference angle, centered in a landscape 3:2 canvas, tight but with 6 percent clear margin. Clean subtle warm studio lighting from upper left, realistic moist textures, restrained natural colors, no stylization. Background: genuinely transparent alpha, no colored rectangle, no checkerboard baked in, no tabletop, minimal contact shadow only. Invariants: preserve bowl color, silhouette, food identity, arrangement, quantities and proportions from the reference. Improve resolution and light only. No text, no logo, no watermark, no props, no hands, no chopsticks, no dramatic fake steam.
```

## vegetable.png

- 保存先：src/assets/generated/vegetable.png
- 参照画像：src/assets/LINE_ALBUM_ラーメン素材_261103_25.jpg
- 用途：トップのお品書き

最終プロンプト：

```text
Use case: background-extraction / product-mockup. Input image 1 is the exact real product reference. Create a premium high resolution photorealistic food image for a Japanese ramen restaurant website, based closely on this reference. mixed vegetable ramen menu cutout. Preserve the ivory bowl and the original mound height and volume of bean sprouts, cabbage and thin carrot strips in center, pale braised pork front left, wood ear mushrooms right, cloudy broth. No eggs, no nori, no bamboo shoots, no extra toppings. Composition: entire bowl and every nori edge fully visible, elevated three-quarter view close to the reference angle, centered in a landscape 3:2 canvas, tight but with 6 percent clear margin. Clean subtle warm studio lighting from upper left, realistic moist textures, restrained natural colors, no stylization. Background: genuinely transparent alpha, no colored rectangle, no checkerboard baked in, no tabletop, minimal contact shadow only. Invariants: preserve bowl color, silhouette, food identity, arrangement, quantities and proportions from the reference. Improve resolution and light only. No text, no logo, no watermark, no props, no hands, no chopsticks, no dramatic fake steam.
```

## tsukemen.png

- 保存先：src/assets/generated/tsukemen.png
- 参照画像：src/assets/LINE_ALBUM_ラーメン素材_261103_9.jpg
- 用途：特製つけ麺の麺側の器。つけ汁を写したものとしては扱わない

最終プロンプト：

```text
Use case: background-extraction / product-mockup. Input image 1 is the exact real product reference. Create a premium high resolution photorealistic food image for a Japanese ramen restaurant website, based closely on this reference. special tsukemen noodle-bowl cutout, noodles side only. Preserve ivory bowl with plain drained yellow noodles, three nori sheets at back, long bamboo shoots front left and ONE halved egg (two halves) front right. No soup in this bowl, no extra side bowl, no pork added. Match amount. Composition: entire bowl and every nori edge fully visible, elevated three-quarter view close to the reference angle, centered in a landscape 3:2 canvas, tight but with 6 percent clear margin. Clean subtle warm studio lighting from upper left, realistic moist textures, restrained natural colors, no stylization. Background: genuinely transparent alpha, no colored rectangle, no checkerboard baked in, no tabletop, minimal contact shadow only. Invariants: preserve bowl color, silhouette, food identity, arrangement, quantities and proportions from the reference. Improve resolution and light only. No text, no logo, no watermark, no props, no hands, no chopsticks, no dramatic fake steam.
```

