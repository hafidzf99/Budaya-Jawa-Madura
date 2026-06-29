import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { quizData } from "../../data/quizData";

export default function QuizDetail() {
  const { id } = useParams();

  const questions =
    quizData[id as keyof typeof quizData];

  if (!questions) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
        }}
      >
        Materi quiz tidak ditemukan.
      </main>
    );
  }

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  function choose(option: string) {
    if (answered) return;

    const isCorrect = option === question.answer;

    setCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 10);
    }

    setAnswered(true);
  }

  function next() {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setAnswered(false);
      setCorrect(false);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#F8F2E7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "40px",
            borderRadius: "25px",
            width: "450px",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,.15)",
          }}
        >
          <h1>🎉 Quiz Selesai</h1>

          <h2>Nilai</h2>

          <h1
            style={{
              fontSize: "70px",
              color: "#14883E",
            }}
          >
            {score}
          </h1>

          <Link to="/quiz">
            <button
              style={{
                width: "100%",
                padding: "15px",
                border: "none",
                borderRadius: "15px",
                background: "#14883E",
                color: "white",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              Kembali ke Menu Quiz
            </button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F8F2E7",
        padding: "40px",
      }}
    >
      <Link
        to="/quiz"
        style={{
          textDecoration: "none",
          color: "#5D2E0C",
          fontWeight: "bold",
        }}
      >
        ← Kembali
      </Link>

      <div
        style={{
          maxWidth: "800px",
          margin: "30px auto",
          background: "white",
          borderRadius: "25px",
          padding: "40px",
          boxShadow: "0 10px 25px rgba(0,0,0,.15)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Quiz {id}
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
          }}
        >
          Soal {current + 1} dari {questions.length}
        </p>

        <div
          style={{
            fontSize: "120px",
            textAlign: "center",
            margin: "30px 0",
          }}
        >
          📚
        </div>

        <h2
          style={{
            textAlign: "center",
          }}
        >
          {question.question}
        </h2>

        <div
          style={{
            display: "grid",
            gap: "15px",
            marginTop: "35px",
          }}
        >
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => choose(option)}
              disabled={answered}
              style={{
                padding: "18px",
                borderRadius: "15px",
                border: "none",
                background: "#14883E",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <>
            <h2
              style={{
                textAlign: "center",
                marginTop: "35px",
                color: correct ? "green" : "red",
              }}
            >
              {correct ? "✅ Jawaban Benar" : "❌ Jawaban Salah"}
            </h2>

            {!correct && (
              <p
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                Jawaban yang benar adalah:
                <br />
                <b>{question.answer}</b>
              </p>
            )}

            <button
              onClick={next}
              style={{
                marginTop: "25px",
                width: "100%",
                padding: "18px",
                borderRadius: "15px",
                border: "none",
                background: "#2368BD",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Soal Berikutnya →
            </button>
          </>
        )}
      </div>
    </main>
  );
}