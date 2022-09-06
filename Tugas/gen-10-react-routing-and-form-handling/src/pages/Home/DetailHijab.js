import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function DetailHijab() {
  return (
    <>
      <hr />
      <h2>Detail Produk </h2>
      <ul>
        <li>
          zwetta |{" "}
          <Link to="/hijab/detail-hijab/zwetta collection "> zwetta </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
