import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import Materi from "./pages/Materi";
import Puzzle from "./pages/Puzzle";
import Guide from "./pages/Guide";
import Profile from "./pages/Profile";

import MateriDetail from "./pages/materials/MateriDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/materi" element={<Materi />} />
          <Route path="/materi/:id" element={<MateriDetail />} />

          <Route path="/puzzle" element={<Puzzle />} />

          <Route path="/guide" element={<Guide />} />

          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}