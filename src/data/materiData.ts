import joglo from "../assets/images/background/rumah-adat-joglo.png";
import beskap from "../assets/images/background/berkap-jawa.png";
import gudeg from "../assets/images/background/gudeg.png";
import wayang from "../assets/images/background/wayang.png";

import rumahMadura from "../assets/images/background/rumah-adat-madura.png";
import pesaan from "../assets/images/background/pesaan-madura.png";
import sate from "../assets/images/background/sate-madura.png";
import karapan from "../assets/images/background/karapan-sapi.png";

export type Materi = {

    id:string;

    kategori:"jawa"|"madura";

    title:string;

    subtitle:string;

    image:string;

    description:string;

};

export const materiData:Materi[]=[

    // =========================
    // JAWA
    // =========================

    {

        id:"rumah-adat-joglo",

        kategori:"jawa",

        title:"Rumah Adat",

        subtitle:"Rumah Joglo",

        image:joglo,

        description:
        "Rumah Joglo adalah rumah adat dari Jawa Tengah. Rumah ini memiliki atap tinggi berbentuk limas dan tiang kayu yang kokoh. Joglo melambangkan kebersamaan, kehormatan, dan budaya masyarakat Jawa."

    },

    {

        id:"berkap-jawa",

        kategori:"jawa",

        title:"Pakaian Adat",

        subtitle:"Beskap Jawa",

        image:beskap,

        description:
        "Beskap adalah pakaian adat pria Jawa. Beskap biasanya dipakai saat acara adat, pernikahan, atau upacara resmi. Pakaian ini dipadukan dengan blangkon dan kain batik."

    },

    {

        id:"gudeg",

        kategori:"jawa",

        title:"Makanan Tradisional",

        subtitle:"Gudeg",

        image:gudeg,

        description:
        "Gudeg adalah makanan khas Yogyakarta yang terbuat dari nangka muda. Gudeg dimasak dengan santan dan bumbu hingga rasanya manis dan gurih. Makanan ini sering disajikan bersama ayam, telur, dan sambal krecek."

    },

    {

        id:"wayang",

        kategori:"jawa",

        title:"Kesenian Daerah",

        subtitle:"Wayang",

        image:wayang,

        description:
        "Wayang adalah seni pertunjukan tradisional Jawa. Tokoh wayang dimainkan oleh seorang dalang dengan iringan musik gamelan. Wayang mengajarkan nilai kebaikan, kejujuran, dan keberanian."

    },

    // =========================
    // MADURA
    // =========================

    {

        id:"rumah-adat-madura",

        kategori:"madura",

        title:"Rumah Adat",

        subtitle:"Rumah Tanean Lanjhang",

        image:rumahMadura,

        description:
        "Rumah Tanean Lanjhang adalah rumah adat masyarakat Madura. Rumah-rumah dibangun berjajar dalam satu halaman yang luas sebagai tempat tinggal keluarga besar. Rumah ini melambangkan persatuan dan kebersamaan."

    },

    {

        id:"pesaan-madura",

        kategori:"madura",

        title:"Pakaian Adat",

        subtitle:"Pesa'an Madura",

        image:pesaan,

        description:
        "Pesa'an adalah pakaian adat pria Madura. Pakaian ini terdiri dari baju bergaris merah putih atau hitam putih, celana longgar, serta ikat kepala. Pesa'an melambangkan keberanian dan semangat masyarakat Madura."

    },

    {

        id:"sate-madura",

        kategori:"madura",

        title:"Makanan Tradisional",

        subtitle:"Sate Madura",

        image:sate,

        description:
        "Sate Madura adalah makanan khas Madura yang terkenal di Indonesia. Sate ini dibuat dari daging ayam atau kambing yang dibakar dan disajikan dengan bumbu kacang yang gurih dan manis."

    },

    {

        id:"karapan-sapi",

        kategori:"madura",

        title:"Kesenian Daerah",

        subtitle:"Karapan Sapi",

        image:karapan,

        description:
        "Karapan Sapi adalah tradisi perlombaan pacuan sapi dari Madura. Dua ekor sapi menarik sebuah kereta kecil yang dikendarai joki. Tradisi ini menjadi simbol semangat, kerja sama, dan kebanggaan masyarakat Madura."

    }

];