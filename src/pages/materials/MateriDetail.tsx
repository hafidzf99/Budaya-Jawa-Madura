import { Link, useParams } from "react-router-dom";
import { materials } from "../../data/materials";

export default function MateriDetail() {
  const { id } = useParams();

  const materi = materials[id as keyof typeof materials];

  if (!materi) {
    return (
      <main style={{ padding: 50 }}>
        <h1>Materi tidak ditemukan</h1>
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
        to="/materi"
        style={{
          textDecoration: "none",
          color: "#5D2E0C",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        ← Kembali
      </Link>

      <div
        style={{
          maxWidth: "900px",
          margin: "30px auto",
          background: "#fff",
          borderRadius: "25px",
          padding: "40px",
          boxShadow: "0 15px 35px rgba(0,0,0,.15)",
        }}
      >
        <img
          src={materi.image}
          alt={materi.title}
          style={{
            width: "220px",
            display: "block",
            margin: "auto",
          }}
        />

        <h1
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#5D2E0C",
          }}
        >
          {materi.title}
        </h1>

        <p
          style={{
            marginTop: "25px",
            fontSize: "20px",
            lineHeight: "1.8",
            textAlign: "justify",
          }}
        >
          {materi.description}
        </p>

        <button
          style={{
            marginTop: "40px",
            width: "100%",
            padding: "18px",
            border: "none",
            borderRadius: "15px",
            background: "#14883E",
            color: "white",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          ▶ Mulai Latihan
        </button>
      </div>
    </main>
  );
}