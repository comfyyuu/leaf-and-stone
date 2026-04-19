# Leaf & Stone

ナチュラルエステティックサロンのウェブサイトです。

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## Vercelへのデプロイ手順

### 1. GitHubにプッシュ

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/あなたのID/leaf-and-stone.git
git push -u origin main
```

### 2. Vercelでデプロイ

1. [vercel.com](https://vercel.com) にアクセス
2. 「Add New Project」をクリック
3. GitHubのリポジトリを選択
4. 「Deploy」ボタンを押すだけで完了

## 画像の差し替え方法

### ローカル画像を使う場合

1. `public/images/` フォルダに画像ファイルを置く
2. `src/constants.ts` または各コンポーネントの `src` を書き換える

```ts
// constants.ts の例（変更前）
image: 'https://images.unsplash.com/photo-xxxx'

// 変更後
image: '/images/your-photo.jpg'
```

### 差し替え対象一覧

| ファイル | 箇所 | 説明 |
|----------|------|------|
| `src/components/Hero.tsx` | `src="..."` | ヒーローの背景画像 |
| `src/components/Profile.tsx` | `src="..."` | プロフィール写真 |
| `src/constants.ts` | `PRODUCTS[*].image` | 商品画像（3枚） |
| `src/constants.ts` | `NOTES[*].image` | ブログ記事の画像（2枚） |

## テキスト・情報の変更

`src/constants.ts` でメニュー・商品・記事の内容を変更できます。
`src/components/Profile.tsx` でプロフィール文・住所・SNSリンクを変更できます。
`src/components/Footer.tsx` で住所・電話番号・メールアドレスを変更できます。
