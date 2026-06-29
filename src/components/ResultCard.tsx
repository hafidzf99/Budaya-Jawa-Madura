import { Link } from "react-router-dom";

type Props = {
  score: number;
  total: number;
  onRestart: () => void;
};

export default function ResultCard({
  score,
  total,
  onRestart,
}: Props) {
  return (
    <div className="quiz-result">

      <h1>🎉 Quiz Selesai</h1>

      <div className="nilai">
        {score}
      </div>

      <p>
        Kamu menjawab benar {score / 10} dari {total} soal.
      </p>

      <button
        className="btn-main"
        onClick={onRestart}
      >
        Main Lagi
      </button>

      <Link to="/">
        <button className="btn-home">
          Kembali ke Home
        </button>
      </Link>

    </div>
  );
}