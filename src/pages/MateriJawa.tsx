import { useNavigate } from "react-router-dom";

import "./Materi.css";

import { FaArrowLeft, FaHome } from "react-icons/fa";

import joglo from "../assets/images/background/rumah-adat-joglo.png";
import beskap from "../assets/images/background/berkap-jawa.png";
import gudeg from "../assets/images/background/gudeg.png";
import wayang from "../assets/images/background/wayang.png";

import { playHover, playPop } from "../utils/audio";

export default function MateriJawa() {

    const navigate = useNavigate();

    function open(id:string){

        playPop();

        setTimeout(()=>{

            navigate(`/materi/${id}`);

        },120);

    }

    return(

        <main className="materi-page">

            <div className="materi-container">

                <div className="materi-header">

                    <button
                        className="circle-btn"
                        onClick={()=>navigate("/materi")}
                    >
                        <FaArrowLeft/>
                    </button>

                    <h1>

                        📖 MATERI BUDAYA JAWA

                    </h1>

                    <button
                        className="circle-btn"
                        onClick={()=>navigate("/")}
                    >
                        <FaHome/>
                    </button>

                </div>

                <p className="materi-subtitle">

                    Pilih materi yang ingin dipelajari

                </p>

                <div className="materi-grid">

                    <div
                        className="materi-card"
                        onMouseEnter={playHover}
                        onClick={()=>open("rumah-adat-joglo")}
                    >

                        <img src={joglo}/>

                        <div className="materi-body">

                            <h3>

                                Rumah Adat

                            </h3>

                            <p>

                                Rumah Joglo

                            </p>

                        </div>

                    </div>

                    <div
                        className="materi-card"
                        onMouseEnter={playHover}
                        onClick={()=>open("berkap-jawa")}
                    >

                        <img src={beskap}/>

                        <div className="materi-body">

                            <h3>

                                Pakaian Adat

                            </h3>

                            <p>

                                Beskap Jawa

                            </p>

                        </div>

                    </div>

                    <div
                        className="materi-card"
                        onMouseEnter={playHover}
                        onClick={()=>open("gudeg")}
                    >

                        <img src={gudeg}/>

                        <div className="materi-body">

                            <h3>

                                Makanan Tradisional

                            </h3>

                            <p>

                                Gudeg

                            </p>

                        </div>

                    </div>

                    <div
                        className="materi-card"
                        onMouseEnter={playHover}
                        onClick={()=>open("wayang")}
                    >

                        <img src={wayang}/>

                        <div className="materi-body">

                            <h3>

                                Kesenian Daerah

                            </h3>

                            <p>

                                Wayang

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </main>

    );

}