import "./Materi.css";
import { Link } from "react-router-dom";
import MaterialCard from "../components/MaterialCard";

import aksara from "../assets/icons/aksara.png";
import pakaian from "../assets/icons/pakaian.png";
import musik from "../assets/icons/musik.png";
import wayang from "../assets/icons/wayang.png";
import makanan from "../assets/icons/makanan.png";

export default function Materi() {
  return (
    <main className="materi">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#5D2E0C",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        ← Kembali
      </Link>

      <h1
        style={{
          fontSize: "48px",
          color: "#5D2E0C",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        📚 Materi Budaya Jawa & Madura
      </h1>

      <MaterialCard
        image={aksara}
        title="Aksara Jawa"
        desc="Belajar huruf Hanacaraka"
        to="/materi/aksara"
      />

      <MaterialCard
        image={pakaian}
        title="Pakaian Adat"
        desc="Pakaian adat Jawa dan Madura"
        to="/materi/pakaian"
      />

      <MaterialCard
        image={musik}
        title="Alat Musik"
        desc="Belajar alat musik tradisional"
        to="/materi/musik"
      />

      <MaterialCard
        image={wayang}
        title="Wayang"
        desc="Tokoh dan cerita wayang"
        to="/materi/wayang"
      />

      <MaterialCard
        image={makanan}
        title="Makanan Khas"
        desc="Kuliner Jawa dan Madura"
        to="/materi/makanan"
      />
    </main>
  );
}