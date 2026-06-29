let ctx: AudioContext | null = null;

function getContext() {

  if (!ctx) {

    ctx = new AudioContext();

  }

  return ctx;

}

function play(
  startFreq: number,
  endFreq: number,
  volume: number,
  duration: number
) {

  const audio = getContext();

  const osc = audio.createOscillator();

  const gain = audio.createGain();

  osc.type = "triangle";

  osc.frequency.setValueAtTime(
    startFreq,
    audio.currentTime
  );

  osc.frequency.exponentialRampToValueAtTime(
    endFreq,
    audio.currentTime + duration
  );

  gain.gain.setValueAtTime(
    volume,
    audio.currentTime
  );

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    audio.currentTime + duration
  );

  osc.connect(gain);

  gain.connect(audio.destination);

  osc.start();

  osc.stop(audio.currentTime + duration);

}

export function playHover() {

  play(
    900,
    1100,
    0.05,
    0.04
  );

}

export function playPop() {

  play(
    650,
    950,
    0.12,
    0.09
  );

}