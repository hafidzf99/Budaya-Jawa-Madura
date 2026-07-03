import "./Materi.css";

import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome } from "react-icons/fa";

import joglo from "../assets/images/background/rumah-adat-joglo.png";
import rumahMadura from "../assets/images/background/rumah-adat-madura.png";

export default function Materi() {

    const navigate = useNavigate();

    return (

        <main className="materi-page">

            <div className="materi-container">

                <div className="materi-header">

                    <button
                        className="circle-btn"
                        onClick={() => navigate("/")}
                    >
                        <FaArrowLeft/>
                    </button>

                    <div className="game-title">

    <span>

        📚 PILIH BUDAYA

    </span>

</div>

                    <button
                        className="circle-btn"
                        onClick={() => navigate("/")}
                    >
                        <FaHome/>
                    </button>

                </div>

                <p className="materi-subtitle">

                    Pilih budaya yang ingin dipelajari

                </p>

                <div className="culture-grid">

                    {/* =================== JAWA =================== */}

                    <div
                        className="culture-card"
                        onClick={()=>navigate("/materi/jawa")}
                    >

                        <div className="culture-title jawa">

                            BUDAYA JAWA

                        </div>

                        <img
                            className="culture-image"
                            src={joglo}
                            alt=""
                        />

                        <div className="culture-list">

                            <div>🏠 Rumah Adat</div>

                            <div>👘 Pakaian Adat</div>

                            <div>🍛 Gudeg</div>

                            <div>🎭 Wayang</div>

                        </div>

                        <div className="culture-button">

                            ▶ MULAI BELAJAR

                        </div>

                    </div>

                    {/* =================== MADURA =================== */}

                    <div
                        className="culture-card"
                        onClick={()=>navigate("/materi/madura")}
                    >

                        <div className="culture-title madura">

                            BUDAYA MADURA

                        </div>

                        <img
                            className="culture-image"
                            src={rumahMadura}
                            alt=""
                        />

                        <div className="culture-list">

                            <div>🏠 Rumah Adat</div>

                            <div>👘 Pesa'an</div>

                            <div>🍢 Sate Madura</div>

                            <div>🐂 Karapan Sapi</div>

                        </div>

                        <div className="culture-button">

                            ▶ MULAI BELAJAR

                        </div>

                    </div>

                </div>

            </div>

        </main>

    );

}