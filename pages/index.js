import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-white/70 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-4 md:py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative inline-block h-12 w-12 md:h-14 md:w-14">
              <Image src="/logo.png" alt="IAESTE CI SMU" fill className="object-contain" />
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-iaesteBlue">IAESTE CI SMU</h1>
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
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <p className="text-lg md:text-xl text-slate-700 max-w-3xl">
              IAESTE CI SMU connects students with international paid internships, cultural exchange,
              and a global network of professionals. Discover opportunities, meet new friends, and
              grow your career through real-world experience.
            </p>
            <div className="mt-6">
              <Link href="/quiz" className="btn-primary text-base md:text-lg px-5 py-3">
                Play the IAESTE Quiz
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-slate-200">
              <Image src="/logo.png" alt="IAESTE CI SMU" fill className="object-contain p-6 bg-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { file: 'group1.jpg', alt: 'IAESTE members at event' },
            { file: 'group2.jpg', alt: 'IAESTE team in front of C-Block' },
            { file: 'group3.jpg', alt: 'IAESTE conference group photo' },
            { file: 'group4.jpg', alt: 'Annual day celebration stage' },
          ].map((imgObj, idx) => {
            const content = (
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-slate-200">
                <Image
                  src={`/images/${imgObj.file}`}
                  alt={imgObj.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority={idx < 2}
                />
              </div>
            )
            // Make the first image link to WhatsApp Group
            return (
              <div key={idx}>
                {idx === 0 ? (
                  <a
                    href="https://chat.whatsapp.com/Iwp9zjfiLD10XtT0vV1AvZ?mode=ems_copy_t"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Join IAESTE CI SMU WhatsApp Group"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Instagram */}
          <div className="card p-6 flex items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Follow us on Instagram</h2>
              <p className="text-slate-600 mb-4">See our latest updates, events, and stories.</p>
              <a
                href="https://www.instagram.com/iaestesmu?igsh=M2dnOXlqcWNxeDE1&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Instagram className="h-5 w-5" />
                Visit Instagram
              </a>
            </div>
            <a
              href="https://www.instagram.com/iaestesmu?igsh=M2dnOXlqcWNxeDE1&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="relative w-40 h-40 border rounded-lg overflow-hidden"
              aria-label="Open IAESTE SMU Instagram"
            >
              <Image src="/qrs/insta.png" alt="Instagram QR" fill className="object-contain" />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="card p-6 flex items-center gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Join our WhatsApp Group</h2>
              <p className="text-slate-600 mb-4">Get announcements and connect with members.</p>
              <a
                href="https://chat.whatsapp.com/Iwp9zjfiLD10XtT0vV1AvZ?mode=ems_copy_t"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-5 w-5" />
                Join WhatsApp
              </a>
            </div>
            <div className="relative w-40 h-40 border rounded-lg overflow-hidden">
              <Image src="/qrs/whatsapp.png" alt="WhatsApp QR" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-4 py-10 text-slate-500">
        © {new Date().getFullYear()} IAESTE CI SMU
      </footer>
    </main>
  )
}


