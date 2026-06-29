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

  if (gameFinished) {

    return (

      <main className="puzzle-page">

        <div className="puzzle-box">

          <h1>🎉 Selamat 🎉</h1>

          <h2>Semua Puzzle Berhasil Disusun</h2>

          <p
            style={{
              marginTop:20,
              marginBottom:25,
            }}
          >
            Terima kasih sudah bermain.
          </p>

          <button
            className="start-btn"
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

        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          🏠 Home
        </button>

        <h1>Puzzle Budaya Jawa & Madura</h1>

        <div
          style={{
            color:"#2E7D32",
            fontWeight:"bold",
            marginBottom:10,
            fontSize:20,
          }}
        >
          Puzzle {current + 1} / {puzzleData.length}
        </div>

        <h2>

          {puzzleData[current].title}

        </h2>

        <PuzzleBoard
          image={puzzleData[current].image}
          onComplete={nextPuzzle}
        />

      </div>

    </main>

  );

}