import ga from "../assets/quiz/ga.png";
import ra from "../assets/quiz/ra.png";
import ya from "../assets/quiz/ya.png";
import sa from "../assets/quiz/sa.png";

import arjuna from "../assets/quiz/arjuna.png";
import semar from "../assets/quiz/semar.png";

import adatJawa from "../assets/quiz/adat-jawa.png";
import adatMadura from "../assets/quiz/adat-madura.png";

import gamelan from "../assets/quiz/gamelan.png";

import sateMadura from "../assets/quiz/sate-madura.png";

export const quizData = [
  {
    category: "Aksara Jawa",
    question: "Huruf pada gambar dibaca....",
    image: ga,
    options: ["ga", "ra", "sa", "ya"],
    answer: "ga",
  },

  {
    category: "Aksara Jawa",
    question: "Huruf pada gambar dibaca....",
    image: ra,
    options: ["ga", "ra", "sa", "ya"],
    answer: "ra",
  },

  {
    category: "Aksara Jawa",
    question: "Huruf pada gambar dibaca....",
    image: ya,
    options: ["ga", "ra", "sa", "ya"],
    answer: "ya",
  },

  {
    category: "Aksara Jawa",
    question: "Huruf pada gambar dibaca....",
    image: sa,
    options: ["ga", "ra", "sa", "ya"],
    answer: "sa",
  },

  {
    category: "Wayang",
    question: "Tokoh wayang pada gambar adalah....",
    image: arjuna,
    options: ["Arjuna", "Semar", "Bima", "Gatotkaca"],
    answer: "Arjuna",
  },

  {
    category: "Wayang",
    question: "Tokoh wayang pada gambar adalah....",
    image: semar,
    options: ["Arjuna", "Semar", "Bima", "Nakula"],
    answer: "Semar",
  },

  {
    category: "Pakaian Adat",
    question: "Pakaian adat pada gambar berasal dari....",
    image: adatJawa,
    options: ["Jawa", "Madura", "Bali", "Sunda"],
    answer: "Jawa",
  },

  {
    category: "Pakaian Adat",
    question: "Pakaian adat pada gambar berasal dari....",
    image: adatMadura,
    options: ["Jawa", "Madura", "Papua", "Aceh"],
    answer: "Madura",
  },

  {
    category: "Alat Musik",
    question: "Nama alat musik pada gambar adalah....",
    image: gamelan,
    options: ["Angklung", "Gamelan", "Sasando", "Kolintang"],
    answer: "Gamelan",
  },

  {
    category: "Makanan Khas",
    question: "Nama makanan pada gambar adalah....",
    image: sateMadura,
    options: [
      "Gudeg",
      "Rawon",
      "Sate Madura",
      "Soto",
    ],
    answer: "Sate Madura",
  },
];