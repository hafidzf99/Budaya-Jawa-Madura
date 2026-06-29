import { Link } from "react-router-dom";
import aksara from "../../assets/icons/aksara.png";

export default function Aksara() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F8F2E7",
        padding: "40px",
      }}
    >
      <Link
        to="/materi"
        style={{
          textDecoration: "none",
          color: "#5D2E0C",
          fontWeight: "bold",
        }}
      >
        ← Kembali
      </Link>

      <h1
        style={{
          marginTop: 20,
          fontSize: 42,
          color: "#5D2E0C",
        }}
      >
        Aksara Jawa
      </h1>

      <div
        style={{
          marginTop: 30,
          background: "white",
          borderRadius: 25,
          padding: 30,
          boxShadow: "0 10px 30px rgba(0,0,0,.15)",
        }}
      >
        <img
          src={aksara}
          style={{
            width: 300,
            display: "block",
            margin: "auto",
          }}
        />

        <h2
          style={{
            marginTop: 30,
            color: "#5D2E0C",
          }}
        >
          Hanacaraka
        </h2>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.8,
          }}
        >
          Aksara Jawa merupakan sistem tulisan tradisional masyarakat Jawa
          yang dikenal dengan nama Hanacaraka. Aksara ini digunakan untuk
          menulis bahasa Jawa dan memiliki 20 huruf dasar.
        </p>
      </div>
    </main>
  );
}