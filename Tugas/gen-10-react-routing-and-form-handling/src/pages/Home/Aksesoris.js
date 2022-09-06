import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Aksesoris() {
  return (
    <div>
      <Link to="/"> Home </Link>

      <h3> List Aksesoris </h3>

      <ul>
        <li>
          Bros |<Link to="/aksesoris/detail-produk/bros">Lihat Detail</Link>
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          Kacamata |
          <Link to="/aksesoris/detail-produk/kacamata">Lihat Detail</Link>
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          Kaos Kaki |
          <Link to="/aksesoris/detail-produk/kaos kaki">Lihat Detail</Link>
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          Jam tangan |
          <Link to="/aksesoris/detail-produk/jam tangan">Lihat Detail</Link>
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          Tas | <Link to="/aksesoris/detail-produk/tas">Lihat Detail</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
