import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type MenuCardProps = {
  title: string;
  color: string;
  icon: ReactNode;
  to: string;
};

export default function MenuCard({
  title,
  color,
  icon,
  to,
}: MenuCardProps) {
  return (
    <Link to={to} className={color}>
      {icon}

      <div className="card-title">
        {title}
      </div>
    </Link>
  );
}