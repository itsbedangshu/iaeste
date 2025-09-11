import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const QUESTIONS = [
  {
    id: 1,
    question: 'What does IAESTE primarily focus on?',
    options: [
      'International student exchange and internships',
      'Sports competitions',
      'Music festivals',
      'Local tourism'
    ],
    answerIndex: 0,
  },
  {
    id: 2,
    question: 'Which students typically join IAESTE?',
    options: [
      'Only business students',
      'STEM and related fields',
      'Only medical students',
      'Only high school students'
    ],
    answerIndex: 1,
  },
  {
    id: 3,
    question: 'IAESTE offers opportunities in which of these?',
    options: [
      'Paid technical internships abroad',
      'Free concert tickets',
      'Language certificates only',
      'Gaming tournaments'
    ],
    answerIndex: 0,
  },
  {
    id: 4,
    question: 'How is IAESTE best described?',
    options: [
      'A global, non-profit student organization',
      'A local travel agency',
      'A sports club',
      'A food delivery service'
    ],
    answerIndex: 0,
  },
]

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const current = QUESTIONS[currentIndex]
  const total = QUESTIONS.length

  const title = useMemo(() => {
    const ratio = score / total
    if (ratio === 1) return 'IAESTE Legend'
    if (ratio >= 0.75) return 'IAESTE Explorer'
    if (ratio >= 0.5) return 'IAESTE Enthusiast'
    return 'Getting Started'
  }, [score, total])

  function handleNext() {
    if (selected === null) return
    if (selected === current.answerIndex) setScore(s => s + 1)

    const next = currentIndex + 1
    if (next >= total) {
      setFinished(true)
    } else {
      setCurrentIndex(next)
      setSelected(null)
    }
  }

  function reset() {
    setCurrentIndex(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="card p-6">
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-4 text-sm text-slate-500">Question {currentIndex + 1} of {total}</div>
              <h2 className="text-xl font-semibold mb-4">{current.question}</h2>
              <div className="grid gap-3">
                {current.options.map((opt, idx) => {
                  const isSelected = selected === idx
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelected(idx)}
                      className={`w-full text-left rounded-lg border px-4 py-3 transition ${
                        isSelected
                          ? 'border-iaesteBlue bg-iaesteBlue/10'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-slate-600">Score: {score}</div>
                <button onClick={handleNext} disabled={selected === null} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  {currentIndex + 1 === total ? 'Finish' : 'Next'}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <div className="text-sm text-slate-500 mb-2">Your Score</div>
              <div className="text-4xl font-bold mb-1">{score} / {total}</div>
              <div className="text-lg mb-6">{title}</div>
              <button onClick={reset} className="btn-primary">Play Again</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}


