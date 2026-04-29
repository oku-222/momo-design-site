/**
 * useScrollReveal.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * IntersectionObserver を使ったスクロールアニメーションフック。
 *
 * 使い方:
 *   useScrollReveal()          // 通常のスクロール監視
 *   useScrollReveal(filterKey) // フィルター切替時に再実行（Worksセクション用）
 *
 * .fade-in クラスを持つ要素がビューポートに入ると .visible クラスが付与されます。
 * CSS側で .fade-in { opacity: 0; transform: translateY(24px); } を定義してください。
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { useEffect } from 'react'

export function useScrollReveal(dep?: number) {
  useEffect(() => {
    // React の DOM 更新を待つため 50ms 遅延
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
      )

      // まだ visible でない .fade-in 要素を全て監視
      const elements = document.querySelectorAll('.fade-in:not(.visible)')
      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 50)

    return () => clearTimeout(timer)
  }, [dep]) // dep（filterKey）が変わるたびに再実行
}
