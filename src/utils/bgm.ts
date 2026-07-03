import bgm from "../assets/audio/bgm-gamelan-mdr-byhafid.mp3";

let audio: HTMLAudioElement | null = null;

let volume =
  Number(localStorage.getItem("bgm-volume")) || 0.35;

let muted =
  localStorage.getItem("bgm-muted") === "true";

function save() {

  localStorage.setItem(
    "bgm-volume",
    volume.toString()
  );

  localStorage.setItem(
    "bgm-muted",
    muted.toString()
  );

}

function getAudio() {

  if (!audio) {

    audio = new Audio(bgm);

    audio.loop = true;

    audio.volume = muted ? 0 : volume;

  }

  return audio;

}

export function startBGM() {

  const player = getAudio();

  player.volume = muted ? 0 : volume;

  player.play().catch(() => {});

}

export function stopBGM() {

  getAudio().pause();

}

export function setBGMVolume(v:number){

  volume = Math.max(0,Math.min(1,v));

  muted = volume===0;

  getAudio().volume = muted ? 0 : volume;

  save();

}

export function volumeUp(){

  setBGMVolume(volume + 0.1);

}

export function volumeDown(){

  setBGMVolume(volume - 0.1);

}

export function toggleBGM(){

  muted=!muted;

  getAudio().volume = muted ? 0 : volume;

  save();

}

export function getVolume(){

  return volume;

}

export function isMuted(){

  return muted;

}