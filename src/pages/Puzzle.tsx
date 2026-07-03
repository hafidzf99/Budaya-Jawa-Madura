import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Puzzle.css";

import PuzzleBoard from "../components/PuzzleBoard";
import { puzzleData } from "../data/puzzleData";

export default function Puzzle() {

  const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const [gameFinished, setGameFinished] = useState(false);

  function nextPuzzle() {

    if (current < puzzleData.length - 1) {

      setCurrent((prev) => prev + 1);

    } else {

      setGameFinished(true);

    }

  }

  const progress =
    ((current + 1) / puzzleData.length) * 100;

  if (gameFinished) {

    return (

      <main className="puzzle-page">

        <div className="finish-card">

          <div className="finish-emoji">
            🏆
          </div>

          <h1>
            Selamat!
          </h1>

          <h2>
            Semua Puzzle Berhasil Disusun
          </h2>

          <p>

            Kamu berhasil menyelesaikan seluruh permainan.

          </p>

          <button
            className="finish-btn"
            onClick={() => navigate("/")}
          >
            🏠 Kembali ke Home
          </button>

        </div>

      </main>

    );

  }

  return (

    <main className="puzzle-page">

      <div className="puzzle-box">

        <div className="top-bar">

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            🏠 Home
          </button>

          <div className="score-box">

            ⭐ {current + 1}/{puzzleData.length}

          </div>

        </div>

        <div className="title-area">

          <div className="game-title">

            🧩 Puzzle Budaya

          </div>

          <div className="game-subtitle">

            Jawa & Madura

          </div>

        </div>

        <div className="progress">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <div className="level-text">

          Level {current + 1} dari {puzzleData.length}

        </div>

        <div className="object-title">

          {puzzleData[current].title}

        </div>

        <PuzzleBoard
          image={puzzleData[current].image}
          onComplete={nextPuzzle}
        />

      </div>

    </main>

  );

}