let ctx: AudioContext | null = null;

function getContext() {

  if (!ctx) {

    ctx = new AudioContext();

  }

  if (ctx.state === "suspended") {

    ctx.resume();

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
    1200,
    1000,
    0.03,
    0.03
  );

}

export function playPop() {

  play(
    650,
    900,
    0.10,
    0.08
  );

}