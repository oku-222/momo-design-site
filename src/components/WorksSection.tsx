/**
 * WorksSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * カテゴリーフィルター付きの作品グリッド。
 * 作品データは src/data/worksData.ts で管理しています。
 *
 * フィルター動作の仕組み:
 *   - filterKey が変わるたびに useScrollReveal が再実行される
 *   - グリッドコンテナに key={filterKey} を設定して強制再マウント
 *   → これにより、フィルター切替後も .fade-in アニメーションが正しく動く
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { useState } from 'react'
import { allWorks, categoryOptions } from '../data/worksData'
import type { Work, WorkCategory } from '../data/worksData'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory | 'all'>('all')
  const [filterKey, setFilterKey]           = useState(0)
  const [lightboxWork, setLightboxWork]     = useState<Work | null>(null)

  // filterKey が変わるたびに再実行（フィルター切替対応）
  useScrollReveal(filterKey)

  const handleCategoryChange = (cat: WorkCategory | 'all') => {
    setActiveCategory(cat)
    setFilterKey((prev) => prev + 1)
  }

  const filteredWorks =
    activeCategory === 'all'
      ? allWorks
      : allWorks.filter((w) => w.category === activeCategory)

  return (
    <section id="works" className="py-24 px-6" style={{ backgroundColor: '#faf5ee' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14 fade-in">
          <p
            className="text-xs tracking-[0.3em] mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
          >
            WORKS
          </p>
          <h2
            className="section-title text-4xl md:text-5xl mb-4"
            style={{ color: '#3d3530' }}
          >
            制作実績
          </h2>
          <div className="section-divider" />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 fade-in">
          {categoryOptions.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={`filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Works grid — key={filterKey} で切替時に強制再マウント */}
        <div key={filterKey} className="works-grid">
          {filteredWorks.map((work, i) => (
            <div
              key={work.id}
              className="fade-in work-card"
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setLightboxWork(work)}
            >
              <img src={work.image} alt={work.title} loading="lazy" />

              {/* Hover overlay */}
              <div className="work-overlay">
                <span
                  className="text-white text-xs tracking-widest"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {work.category.toUpperCase()}
                </span>
                <span className="text-white/80 text-xs">✦ 拡大表示</span>
              </div>

              {/* Card info */}
              <div className="p-4">
                <h3
                  className="text-sm font-medium mb-1 leading-snug"
                  style={{ color: '#3d3530' }}
                >
                  {work.title}
                </h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: '#9e8f86' }}>
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-sm"
                      style={{
                        backgroundColor: '#faf5ee',
                        border: '1px solid #e8ddd4',
                        color: '#9e8f86',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {work.detailUrl && (
                  <a
                    href={work.detailUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block mt-3 text-xs underline"
                    style={{ color: '#8c6f5a', fontFamily: "'DM Sans', sans-serif" }}
                  >
                    PDFを見る
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxWork && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxWork(null)}
        >
          <button
            className="absolute top-6 right-8 text-white/70 hover:text-white text-3xl leading-none"
            onClick={() => setLightboxWork(null)}
            aria-label="閉じる"
          >
            ×
          </button>
          <img
            src={lightboxWork.lightboxImage ?? lightboxWork.image}
            alt={lightboxWork.title}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 text-center">
            <p
              className="text-white text-sm mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
            >
              {lightboxWork.title}
            </p>
            <p className="text-white/60 text-xs" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              クリックで閉じる
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
