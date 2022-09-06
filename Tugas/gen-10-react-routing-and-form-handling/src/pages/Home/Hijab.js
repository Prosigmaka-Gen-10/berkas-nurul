import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Hijab() {
  return (
    <>
      <Link to="/"> home </Link>
      <h2> List Hijab </h2>
      <ul>
        <li>
          Bela Square | <Link to="/hijab/detail-hijab"> Detail </Link>
        </li>
        <li>
          {" "}
          Pashmina | <Link to="/hijab/detail-hijab"> Detail </Link>{" "}
        </li>
        <li>
          {" "}
          Scraf | <Link to="/hijab/detail-hijab"> Detail </Link>{" "}
        </li>
      </ul>
      <Outlet />
    </>
  );
}
