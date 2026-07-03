import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { startBGM } from "./utils/bgm";
import { playPop } from "./utils/audio";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";

import Materi from "./pages/Materi";
import MateriJawa from "./pages/MateriJawa";
import MateriMadura from "./pages/MateriMadura";

import MateriDetail from "./pages/materials/MateriDetail";

import Puzzle from "./pages/Puzzle";
import Guide from "./pages/Guide";
import Profile from "./pages/Profile";

export default function App() {

  const [started, setStarted] = useState(false);

  function handleStart() {

    playPop();

    startBGM();

    setTimeout(() => {

      setStarted(true);

    },300);

  }

  if (!started) {

    return (

      <main className="start-screen">

        <div className="start-card">

          <div className="start-icon">

            🎮

          </div>

          <h1>

            Budaya Lokal

          </h1>

          <h2>

            Jawa dan Madura

          </h2>

          <p>

            Belajar • Bermain • Mengenal Budaya Nusantara

          </p>

          <button
            className="start-btn"
            onClick={handleStart}
          >

            🎮 Mulai Game

          </button>

        </div>

      </main>

    );

  }

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<Layout/>}>

          <Route
            path="/"
            element={<Home/>}
          />

          <Route
            path="/materi"
            element={<Materi/>}
          />

          <Route
            path="/materi/jawa"
            element={<MateriJawa/>}
          />

          <Route
            path="/materi/madura"
            element={<MateriMadura/>}
          />

          <Route
            path="/materi/:id"
            element={<MateriDetail/>}
          />

          <Route
            path="/puzzle"
            element={<Puzzle/>}
          />

          <Route
            path="/guide"
            element={<Guide/>}
          />

          <Route
            path="/profile"
            element={<Profile/>}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  );

}