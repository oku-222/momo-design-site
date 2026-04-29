/**
 * works-data.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * 作品データをここで一元管理します。
 *
 * カテゴリー値:
 *   "instagram" | "lp" | "slide" | "ai" | "logo"
 *
 * 画像パスについて:
 *   - /public/works/ フォルダに画像を配置して "/works/xxx.png" と記述するか
 *   - 外部URL (https://...) をそのまま使用できます
 *
 * 新しい作品を追加する場合は、下記の配列に要素を追加するだけです。
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type WorkCategory = 'instagram' | 'lp' | 'slide' | 'ai' | 'logo'

export interface Work {
  id: string
  category: WorkCategory
  /** 画像パス（/public/works/ 配下 or 外部URL） */
  image: string
  /** 任意: ライトボックスで表示する画像（未指定時は image を使用） */
  lightboxImage?: string
  /** 任意: PDFや外部ページの詳細URL */
  detailUrl?: string
  /** 採用担当者向けタイトル */
  title: string
  /** 採用担当者向け説明文 */
  description: string
  /** 使用ツール・技術タグ */
  tags: string[]
}

// ─── Instagram 投稿 ──────────────────────────────────────────────────────────
const instagramWorks: Work[] = [
  {
    id: 'ig-01',
    category: 'instagram',
    image: '/works/i01_01.png',
    lightboxImage: '/works/i01.png',
    title: 'Amulette｜国内最大級の香水メディア様',
    description:
      'BURBERRYシグネチャーシリーズを題材に、ブランドの格調を損なわず情報を整理。スワイプ率・保存率の向上を意識した構成設計が採用担当者の目に留まります。',
    tags: ['Canva', 'Instagram', 'ブランドデザイン'],
  },
  {
    id: 'ig-06',
    category: 'instagram',
    image: '/works/i06_01.png',
    lightboxImage: '/works/i06.png',
    title: '音声療法サロンORB STATION様',
    description:
      '工程を段階的に見せる構成で、写真の見せ方を中心にデザインしています。',
    tags: ['Canva', 'Instagram', '情報設計'],
  },
  {
    id: 'ig-07',
    category: 'instagram',
    image: '/works/i07_01.png',
    lightboxImage: '/works/i07.png',
    title: 'ホテル記念日向けカルーセル投稿',
    description:
      '支店の流れを意識し、余白、色味の統一で世界観を保ちながら読みやすくまとめました。',
    tags: ['Canva', 'Instagram', 'カルーセル設計'],
  },
  {
    id: 'ig-04',
    category: 'instagram',
    image: '/works/i04_01.png',
    lightboxImage: '/works/i04.png',
    title: 'Canva素材名15選 ─ 保存されるコンテンツ設計',
    description:
      '「保存して後で使う」を狙ったリファレンス型投稿。ミントグリーンの統一感あるデザインと検索性の高いレイアウトで、ブックマーク獲得を最大化します。',
    tags: ['Canva', 'Instagram', 'UI設計'],
  },
]

// ─── ランディングページ ───────────────────────────────────────────────────────
const lpWorks: Work[] = [
  {
    id: 'lp-01',
    category: 'lp',
    image: '/works/L1.png',
    lightboxImage: '/works/L1_2.png',
    title: 'サービス訴求LP ─ コンバージョン導線設計',
    description:
      'ファーストビューで課題を提示し、解決策→実績→CTAへと自然に誘導する構成。離脱を防ぐ視線の流れを意識したランディングページです。',
    tags: ['STUDIO', 'LP制作', 'UI/UX'],
  },
  {
    id: 'lp-02',
    category: 'lp',
    image: '/works/L2.png',
    lightboxImage: '/works/L2_2.png',
    title: 'ブランドLP ─ 世界観を伝えるビジュアル設計',
    description:
      'ブランドの価値観と雰囲気を視覚的に伝えるデザイン。余白と写真の使い方で高級感を演出し、ターゲット層に刺さる世界観を構築しました。',
    tags: ['STUDIO', 'Adobe Illustrator', 'ブランディング'],
  },
]

// ─── スライド資料 ─────────────────────────────────────────────────────────────
const slideWorks: Work[] = [
  {
    id: 'slide-01',
    category: 'slide',
    image: '/works/kizuna_thumb.png',
    title: '介護施設きずな ─ プラットフォーム導入提案書',
    description:
      '介護現場の課題を深く理解した上で作成した提案資料。複雑な情報を図解とステップで整理し、意思決定者に刺さる構成と視覚表現を実現しました。',
    tags: ['PowerPoint', 'プレゼン設計', '提案資料'],
  },
  {
    id: 'slide-02',
    category: 'slide',
    image: '/works/ramune_thumb.png',
    title: '森永ラムネ ─ グループワーク提案資料',
    description:
      'ブランドの強みを再定義し、新たな市場機会を提案するグループワーク資料。データと感性を組み合わせた説得力のあるプレゼンテーションです。',
    tags: ['PowerPoint', 'マーケティング', 'データ分析'],
  },
  {
    id: 'slide-03',
    category: 'slide',
    image: '/works/unicharm_thumb.png',
    title: 'ユニ・チャーム ─ ペット事業戦略提案',
    description:
      '市場分析から施策立案まで一貫した論理構成で仕上げた戦略資料。PowerPointの高度な活用で、視覚的インパクトと情報の明快さを両立しています。',
    tags: ['PowerPoint', '戦略立案', '市場分析'],
  },
]

// ─── AI 制作スライド ──────────────────────────────────────────────────────────
const aiWorks: Work[] = [
  {
    id: 'ai-01',
    category: 'slide',
    image: '/works/ai_slide1.png',
    detailUrl: '/works/ai-remote-work-2026.pdf',
    title: '在宅ワーク3選2026 ─ AI生成スライドデザイン',
    description:
      '生成AIを活用して制作した女性向けキャリア情報スライド。ターゲットの関心を引くビジュアルと、読みやすい情報構成でコンテンツの訴求力を最大化しています。',
    tags: ['ChatGPT', 'Canva', 'AI活用', 'スライドデザイン'],
  },
  {
    id: 'ai-02',
    category: 'slide',
    image: '/works/ai_slide2.png',
    detailUrl: '/works/ai-dog-food-service.pdf',
    title: '室内犬向けフードサービス紹介 ─ AI活用プレゼン資料',
    description:
      'AIツールを駆使して制作したペット向けサービス紹介資料。ブランドイメージに合わせた配色とレイアウトで、サービスの魅力を視覚的に伝えます。',
    tags: ['ChatGPT', 'Canva', 'AI活用', 'ブランドデザイン'],
  },
  {
    id: 'ai-03',
    category: 'ai',
    image: '/works/ai_slide3.png',
    title: '猫ベーカリー工程紹介 ─ AI生成ビジュアル',
    description:
      '5ステップを1枚で理解できるように整理した、ストーリー性のあるAI制作画像。可愛らしさと情報の見やすさを両立しています。',
    tags: ['ChatGPT', '画像生成', 'ストーリー構成'],
  },
  {
    id: 'ai-04',
    category: 'ai',
    image: '/works/ai_slide4.png',
    title: '横浜エリア訴求バナー ─ 旅行プロモーション',
    description:
      '観光・アクセス・モデルコースを1画面に統合し、回遊したくなる情報導線を意識して設計したプロモーションビジュアルです。',
    tags: ['ChatGPT', '画像生成', 'バナー設計'],
  },
  {
    id: 'ai-05',
    category: 'ai',
    image: '/works/ai_slide5.png',
    title: '高層レジデンス訴求ビジュアル ─ 不動産向け',
    description:
      '高級感のある色調とコピー配置で、プレミアム感を訴求。サービス特徴とCTAを分かりやすく配置した訴求クリエイティブです。',
    tags: ['ChatGPT', '画像生成', '不動産クリエイティブ'],
  },
]

// ─── ロゴ制作 ────────────────────────────────────────────────────────────────
const logoWorks: Work[] = [
  {
    id: 'logo-01',
    category: 'logo',
    image: '/works/Log01_HamaKura%20LAB.png',
    title: 'HamaKura LAB ロゴデザイン',
    description:
      'ブランドの個性が伝わるよう、視認性と印象の残りやすさを重視して制作したロゴデザインです。',
    tags: ['ロゴ', 'ブランディング', 'デザイン'],
  },
]

// ─── 全作品（エクスポート） ───────────────────────────────────────────────────
export const allWorks: Work[] = [
  ...lpWorks,
  ...instagramWorks,
  ...aiWorks.filter((w) => w.category === 'ai'),
  ...logoWorks,
  ...slideWorks,
  ...aiWorks.filter((w) => w.category === 'slide'),
]

// ─── カテゴリーフィルター定義 ─────────────────────────────────────────────────
export interface CategoryOption {
  value: WorkCategory | 'all'
  label: string
}

export const categoryOptions: CategoryOption[] = [
  { value: 'all',       label: 'すべて' },
  { value: 'lp',        label: 'LP' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'ai',        label: 'AI制作' },
  { value: 'logo',      label: 'ロゴ' },
  { value: 'slide',     label: '職業訓練校' },
]
