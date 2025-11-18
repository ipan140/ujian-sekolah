import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

// Import halaman ujian
import ExamIPA from "./components/ExamIPA";
import ExamIPS from "./components/ExamIPS";
import ExamMatematika from "./components/ExamMatematika";
import ExamInggris from "./components/ExamInggris";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/exam/ipa" element={<ExamIPA />} />
        <Route path="/exam/ips" element={<ExamIPS />} />
        <Route path="/exam/matematika" element={<ExamMatematika />} />
        <Route path="/exam/inggris" element={<ExamInggris />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
