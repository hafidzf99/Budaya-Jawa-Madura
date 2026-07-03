import { useNavigate, useParams } from "react-router-dom";

import { FaArrowLeft, FaHome } from "react-icons/fa";

import "../Materi.css";

import { materiData } from "../../data/materiData";

export default function MateriDetail() {

    const navigate = useNavigate();

    const { id } = useParams();

    const materi = materiData.find(
        item => item.id === id
    );

    if (!materi) {

        return (

            <main className="materi-page">

                <div className="materi-container">

                    <h1>

                        Materi tidak ditemukan

                    </h1>

                    <button
                        className="circle-btn"
                        onClick={() => navigate("/materi")}
                    >

                        <FaArrowLeft/>

                    </button>

                </div>

            </main>

        );

    }

    return (

        <main className="materi-page">

            <div className="detail-container">

                <div className="materi-header">

                    <button
                        className="circle-btn"
                        onClick={() => navigate(-1)}
                    >

                        <FaArrowLeft/>

                    </button>

                    <h1>

                        {materi.subtitle}

                    </h1>

                    <button
                        className="circle-btn"
                        onClick={() => navigate("/")}
                    >

                        <FaHome/>

                    </button>

                </div>

                <img
                    className="detail-image"
                    src={materi.image}
                    alt={materi.subtitle}
                />

                <div className="detail-content">

                    <h2>

                        {materi.title}

                    </h2>

                    <p>

                        {materi.description}

                    </p>

                </div>

            </div>

        </main>

    );

}