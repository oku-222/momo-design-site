/**
 * ContactSection.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * お問い合わせフォーム。
 * フォームの送信処理は handleSubmit 内に実装してください。
 * 例: EmailJS / Formspree / Netlify Forms などを利用できます。
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type ContactType =
  | 'お仕事のご依頼・ご相談'
  | 'スキル・制作実績に関するご質問'
  | 'その他・メッセージ'

interface FormState {
  name: string
  email: string
  contactType: ContactType
  message: string
}

const contactTypes: ContactType[] = [
  'お仕事のご依頼・ご相談',
  'スキル・制作実績に関するご質問',
  'その他・メッセージ',
]

export default function ContactSection() {
  useScrollReveal()

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    contactType: 'お仕事のご依頼・ご相談',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // ─── ここにメール送信処理を実装してください ───────────────────────────────
    // 例: EmailJS を使う場合
    //   import emailjs from '@emailjs/browser'
    //   await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ...form }, 'PUBLIC_KEY')
    //
    // 例: Formspree を使う場合
    //   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    // ─────────────────────────────────────────────────────────────────────────

    // デモ用: 1秒後に送信完了
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ backgroundColor: '#faf5ee' }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-14 fade-in">
          <p
            className="text-xs tracking-[0.3em] mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", color: '#C4956A' }}
          >
            CONTACT
          </p>
          <h2
            className="section-title text-4xl md:text-5xl mb-4"
            style={{ color: '#3d3530' }}
          >
            お問い合わせ
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-sm leading-loose" style={{ color: '#9e8f86' }}>
            ご依頼・ご相談はお気軽にお問い合わせください。<br />
            2営業日以内にご返信いたします。
          </p>
        </div>

        {submitted ? (
          /* Success message */
          <div
            className="text-center py-16 fade-in"
            style={{ border: '1px solid #e8ddd4', backgroundColor: 'white' }}
          >
            <div className="text-3xl mb-4" style={{ color: '#C4956A' }}>✦</div>
            <h3
              className="text-xl mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#3d3530' }}
            >
              送信が完了しました
            </h3>
            <p className="text-sm" style={{ color: '#9e8f86' }}>
              お問い合わせありがとうございます。<br />
              2営業日以内にご返信いたします。
            </p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="space-y-6 fade-in">
            {/* Name */}
            <div>
              <label
                className="block text-xs tracking-widest mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5f58' }}
              >
                お名前 <span style={{ color: '#C4956A' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="山田 花子"
                className="form-input"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-xs tracking-widest mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5f58' }}
              >
                メールアドレス <span style={{ color: '#C4956A' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="form-input"
              />
            </div>

            {/* Contact type (radio) */}
            <div>
              <label
                className="block text-xs tracking-widest mb-3"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5f58' }}
              >
                お問い合わせ内容 <span style={{ color: '#C4956A' }}>*</span>
              </label>
              <div className="space-y-2">
                {contactTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="contactType"
                      value={type}
                      checked={form.contactType === type}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span
                      className="w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors"
                      style={{
                        borderColor: form.contactType === type ? '#C4956A' : '#d4aa85',
                        backgroundColor: form.contactType === type ? '#C4956A' : 'transparent',
                      }}
                    >
                      {form.contactType === type && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </span>
                    <span className="text-sm" style={{ color: '#6b5f58' }}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-xs tracking-widest mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b5f58' }}
              >
                本文 <span style={{ color: '#C4956A' }}>*</span>
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="ご依頼内容・ご質問をご記入ください"
                className="form-input resize-none"
              />
            </div>

            {/* Submit */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-block px-12 py-3.5 text-xs tracking-widest transition-all duration-300 disabled:opacity-60"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  backgroundColor: '#C4956A',
                  color: 'white',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!loading) e.currentTarget.style.backgroundColor = '#a87850'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C4956A'
                }}
              >
                {loading ? '送信中...' : '送信する'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
