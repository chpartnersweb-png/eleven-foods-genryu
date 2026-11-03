# 生成画像の記録

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

