import { Link } from "react-router-dom";

type Props = {
  title: string;
  desc: string;
  image: string;
  to: string;
};

export default function MaterialCard({
  title,
  desc,
  image,
  to,
}: Props) {
  return (
    <Link to={to} className="material-card">

      <img
        src={image}
        alt={title}
        className="material-image"
      />

      <div className="material-text">

        <h3>{title}</h3>

        <p>{desc}</p>

      </div>

      <div className="material-arrow">
        ➜
      </div>

    </Link>
  );
}