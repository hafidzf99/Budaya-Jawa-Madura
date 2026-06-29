import { useState } from "react";
import { Link } from "react-router-dom";
import { quizData } from "../data/quizData";

import QuestionCard from "../components/QuestionCard";
import ResultCard from "../components/ResultCard";

import "./Quiz.css";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const soal = quizData[index];

  function pilih(jawaban: string) {
    if (answered) return;

    setSelected(jawaban);
    setAnswered(true);

    if (jawaban === soal.answer) {
      setScore((s) => s + 10);
    }
  }

  function next() {
    if (index === quizData.length - 1) {
      setFinished(true);
      return;
    }

    setIndex((i) => i + 1);
    setSelected("");
    setAnswered(false);
  }

  function ulangi() {
    setIndex(0);
    setScore(0);
    setSelected("");
    setAnswered(false);
    setFinished(false);
  }

  if (finished) {
    return (
      <main className="quiz-page">
        <ResultCard
          score={score}
          total={quizData.length}
          onRestart={ulangi}
        />
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <div className="quiz-box">

        <Link to="/" className="back">
          ← Kembali
        </Link>

        <h1>Quiz Budaya Jawa & Madura</h1>

        <div className="progress">
          Soal {index + 1} / {quizData.length}
        </div>

        <div className="category">
          {soal.category}
        </div>

        <QuestionCard
          image={soal.image}
          question={soal.question}
          options={soal.options}
          selected={selected}
          answer={soal.answer}
          answered={answered}
          onSelect={pilih}
        />

        {answered && (
          <div className="feedback">

            {selected === soal.answer ? (
              <h2 className="text-benar">
                ✅ Jawaban Benar
              </h2>
            ) : (
              <>
                <h2 className="text-salah">
                  ❌ Jawaban Salah
                </h2>

                <p>
                  Jawaban benar:
                  <br />
                  <b>{soal.answer}</b>
                </p>
              </>
            )}

            <button
              className="btn-next"
              onClick={next}
            >
              {index === quizData.length - 1
                ? "Lihat Nilai"
                : "Soal Berikutnya"}
            </button>

          </div>
        )}

      </div>
    </main>
  );
}