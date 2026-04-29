# momo Portfolio — Cursor (Vite + React + Tailwind CSS)

## セットアップ手順

```bash
# 1. 依存関係をインストール
npm install

# 2. 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173` を開くと確認できます。

---

## ファイル構成

```
momo-portfolio-cursor/
├── index.html                    # Google Fonts 読み込み済み
├── vite.config.ts
├── tailwind.config.js            # カラーパレット・フォント定義
├── postcss.config.js
├── package.json
├── tsconfig.json
├── public/
│   └── works/                    # ← 作品画像をここに配置
│       ├── hero.png              # ヒーロー背景画像
│       ├── i01.png               # Instagram投稿 1
│       ├── i02.png               # Instagram投稿 2
│       ├── i03.png               # Instagram投稿 3
│       ├── i04.png               # Instagram投稿 4
│       ├── i05.png               # Instagram投稿 5
│       ├── L1.png                # LP 1
│       ├── L1_2.png              # LP 1 詳細
│       ├── L2.png                # LP 2
│       ├── L2_2.png              # LP 2 詳細
│       ├── kizuna_thumb.png      # スライド: 介護施設きずな
│       ├── ramune_thumb.png      # スライド: 森永ラムネ
│       ├── unicharm_thumb.png    # スライド: ユニ・チャーム
│       ├── ai_slide1.png         # AI: 在宅ワーク3選
│       └── ai_slide2.png         # AI: 室内犬向けフードサービス
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css                 # グローバルスタイル・カスタムクラス
    ├── data/
    │   └── worksData.ts          # ★ 作品データをここで管理
    ├── hooks/
    │   └── useScrollReveal.ts    # スクロールアニメーション
    └── components/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── WorksSection.tsx      # カテゴリーフィルター付き
        ├── AboutSection.tsx
        ├── ServicesSection.tsx
        ├── SkillsSection.tsx
        ├── ContactSection.tsx
        └── Footer.tsx
```

---

## 画像の配置方法

1. `public/works/` フォルダを作成する
2. 上記ファイル構成の画像ファイルをそのフォルダに配置する

> **ポイント**: `public/` 配下のファイルは `/works/xxx.png` のように絶対パスで参照できます。

---

## 作品データの管理

`src/data/worksData.ts` で全作品を JSON 配列として管理しています。

### 新しい作品を追加する方法

```typescript
// src/data/worksData.ts の各カテゴリー配列に追加するだけ

const instagramWorks: Work[] = [
  // ... 既存の作品 ...
  {
    id: 'ig-06',                          // ユニークなID
    category: 'instagram',                // カテゴリー
    image: '/works/i06.png',              // 画像パス
    title: '新しい作品のタイトル',
    description: '採用担当者向けの説明文',
    tags: ['Canva', 'Instagram'],
  },
]
```

### カテゴリー一覧

| 値 | 表示名 | 説明 |
|---|---|---|
| `instagram` | Instagram | Instagram投稿デザイン |
| `lp` | LP | ランディングページ |
| `slide` | スライド | プレゼン・提案資料 |
| `ai` | AI | AI活用制作物 |

---

## お問い合わせフォームの送信設定

`src/components/ContactSection.tsx` の `handleSubmit` 関数内に送信処理を実装してください。

### EmailJS を使う場合（推奨）

```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    { name: form.name, email: form.email, message: form.message },
    'YOUR_PUBLIC_KEY'
  )
  setSubmitted(true)
}
```

### Formspree を使う場合

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSubmitted(true)
}
```

---

## カラーパレット

| 変数名 | カラーコード | 用途 |
|---|---|---|
| Rose Gold | `#C4956A` | アクセントカラー（ボタン・見出し） |
| Cream | `#faf5ee` | 背景色 |
| Charcoal | `#3d3530` | テキスト・フッター |
| Charcoal Light | `#6b5f58` | 本文テキスト |
| Charcoal Muted | `#9e8f86` | サブテキスト |

---

## ビルド

```bash
npm run build
```

`dist/` フォルダに本番用ファイルが生成されます。
