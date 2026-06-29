import "./Home.css";

import {
  FaBookOpen,
  FaGamepad,
  FaQuestionCircle,
  FaUser,
} from "react-icons/fa";

import MenuCard from "../components/MenuCard";

export default function Home() {
  return (
    <main className="home">

      <div className="home-container">

        <div className="hero-title">

          <h1 className="title">
            Budaya Lokal
          </h1>

          <h2 className="subtitle">
            Jawa dan Madura
          </h2>

          <p className="description">
            Belajar • Bermain • Mengenal Budaya Nusantara
          </p>

        </div>

        <div className="menu-grid">

          <MenuCard
            title="Materi"
            to="/materi"
            color="card green"
            icon={<FaBookOpen className="icon" />}
          />

          <MenuCard
            title="Puzzle"
            to="/puzzle"
            color="card red"
            icon={<FaGamepad className="icon" />}
          />

          <MenuCard
            title="Petunjuk"
            to="/guide"
            color="card yellow"
            icon={<FaQuestionCircle className="icon" />}
          />

          <MenuCard
            title="Profil"
            to="/profile"
            color="card blue"
            icon={<FaUser className="icon" />}
          />

        </div>

      </div>

    </main>
  );
}