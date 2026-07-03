import { useNavigate } from "react-router-dom";

import "./Materi.css";

import { FaArrowLeft, FaHome } from "react-icons/fa";

import rumahMadura from "../assets/images/background/rumah-adat-madura.png";
import pesaan from "../assets/images/background/pesaan-madura.png";
import sate from "../assets/images/background/sate-madura.png";
import karapan from "../assets/images/background/karapan-sapi.png";

export default function MateriMadura() {

    const navigate = useNavigate();

    return (

        <main className="materi-page">

            <div className="materi-container">

                <div className="materi-header">

                    <button
                        className="circle-btn"
                        onClick={() => navigate("/materi")}
                    >
                        <FaArrowLeft />
                    </button>

                    <h1>

                        MATERI • MADURA

                    </h1>

                    <button
                        className="circle-btn"
                        onClick={() => navigate("/")}
                    >
                        <FaHome />
                    </button>

                </div>

                <div className="materi-grid">

                    <div
                        className="materi-card"
                        onClick={() => navigate("/materi/rumah-adat-madura")}
                    >

                        <img
                            src={rumahMadura}
                            alt="Rumah Adat Madura"
                        />

                        <h3>

                            Rumah Adat

                        </h3>

                        <p>

                            Tanean Lanjhang

                        </p>

                        <button>

                            ▶

                        </button>

                    </div>

                    <div
                        className="materi-card"
                        onClick={() => navigate("/materi/pesaan-madura")}
                    >

                        <img
                            src={pesaan}
                            alt="Pakaian Adat Madura"
                        />

                        <h3>

                            Pakaian Adat

                        </h3>

                        <p>

                            Pesa'an Madura

                        </p>

                        <button>

                            ▶

                        </button>

                    </div>

                    <div
                        className="materi-card"
                        onClick={() => navigate("/materi/sate-madura")}
                    >

                        <img
                            src={sate}
                            alt="Sate Madura"
                        />

                        <h3>

                            Makanan Tradisional

                        </h3>

                        <p>

                            Sate Madura

                        </p>

                        <button>

                            ▶

                        </button>

                    </div>

                    <div
                        className="materi-card"
                        onClick={() => navigate("/materi/karapan-sapi")}
                    >

                        <img
                            src={karapan}
                            alt="Karapan Sapi"
                        />

                        <h3>

                            Kesenian Daerah

                        </h3>

                        <p>

                            Karapan Sapi

                        </p>

                        <button>

                            ▶

                        </button>

                    </div>

                </div>

            </div>

        </main>

    );

}