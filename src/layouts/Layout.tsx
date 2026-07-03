import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import {
  FaVolumeMute,
  FaVolumeDown,
  FaVolumeUp,
} from "react-icons/fa";

import {
  volumeUp,
  volumeDown,
  toggleBGM,
  getVolume,
  isMuted,
} from "../utils/bgm";

export default function Layout() {

  const [volume, setVolume] = useState(getVolume());
  const [muted, setMuted] = useState(isMuted());

  function refresh() {

    setVolume(getVolume());

    setMuted(isMuted());

  }

  function handleVolumeUp() {

    volumeUp();

    refresh();

  }

  function handleVolumeDown() {

    volumeDown();

    refresh();

  }

  function handleMute() {

    toggleBGM();

    refresh();

  }

  useEffect(() => {

    refresh();

  }, []);

  return (

    <div className="layout">

      <div className="volume-panel">

        <button
          className="volume-btn"
          onClick={handleVolumeDown}
        >
          −
        </button>

        <button
          className="volume-btn"
          onClick={handleMute}
        >

          {

            muted || volume === 0
            ?

            <FaVolumeMute/>

            :

            volume < 0.5

            ?

            <FaVolumeDown/>

            :

            <FaVolumeUp/>

          }

        </button>

        <button
          className="volume-btn"
          onClick={handleVolumeUp}
        >
          +
        </button>

      </div>

      <Outlet/>

    </div>

  );

}