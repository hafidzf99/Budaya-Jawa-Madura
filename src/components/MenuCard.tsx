import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import {
  playHover,
  playPop,
} from "../utils/audio";

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

  const navigate = useNavigate();

  function handleClick() {

    playPop();

    setTimeout(() => {

      navigate(to);

    },120);

  }

  return (

    <button

      className={color}

      onMouseEnter={playHover}

      onFocus={playHover}

      onClick={handleClick}

    >

      {icon}

      <div className="card-title">

        {title}

      </div>

    </button>

  );

}