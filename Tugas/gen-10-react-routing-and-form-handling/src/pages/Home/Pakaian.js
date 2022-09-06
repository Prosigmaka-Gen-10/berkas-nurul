import React from "react";
import { Link } from "react-router-dom";

export default function Pakaian() {
  return (
    <>
      <Link to="/"> home </Link>
      <h2> List Pakaian </h2>
      <ul>
        <li>Atasan |</li>
        <li>Bawahan |</li>
        <li>Dress |</li>
      </ul>
    </>
  );
}
