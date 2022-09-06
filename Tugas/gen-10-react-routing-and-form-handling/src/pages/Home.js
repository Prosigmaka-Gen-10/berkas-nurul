import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import Hijab from "./Home/Hijab";
import Pakaian from "./Home/Pakaian";
import Aksesoris from "./Home/Aksesoris";

export default function Home() {
  return (
    <>
      <h1> Selamat Datang </h1>
      <p>Ini Home</p>
      <Link to="/about/">about</Link>
      <span> | </span>
      <Link to="/form-handling/">form</Link>

      <nav>
        <Link to="/aksesoris"> Aksesoris </Link>
        <span> | </span>
        <Link to="/hijab"> Hijab </Link>
        <span> | </span>
        <Link to="/pakaian"> Pakaian </Link>
      </nav>

      <Outlet />
    </>
  );
}
