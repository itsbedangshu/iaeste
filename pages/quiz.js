import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MessageCircle } from 'lucide-react'

const Quiz = dynamic(() => import('../components/Quiz'), { ssr: false })

export default function QuizPage() {
  return (
    <main className="min-h-screen">
      <header className="bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 md:py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative inline-block h-12 w-12 md:h-14 md:w-14">
              <Image src="/logo.png" alt="IAESTE CI SMU" fill className="object-contain" />
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-iaesteBlue">IAESTE Quiz</h1>
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/iaestesmu?igsh=M2dnOXlqcWNxeDE1&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
            >
              <Instagram className="h-5 w-5" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://chat.whatsapp.com/Iwp9zjfiLD10XtT0vV1AvZ?mode=ems_copy_t"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-slate-700 hover:bg-slate-50"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <Link href="/" className="btn-primary">Back Home</Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <Quiz />
      </section>
    </main>
  )
}


