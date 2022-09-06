import React from "react";
import { Link } from "react-router-dom";

export default function Keranjang() {
  return (
    <div>
      <hr />
      <Link to="/"> home </Link>
      <span> | </span>
      <Link to="/aksesoris"> aksesoris </Link>
      <h2> Keranjang </h2>
      <p>produk di masukkan ke keranjang </p>
    </div>
  );
}
