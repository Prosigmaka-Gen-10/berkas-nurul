import { useParams } from "react";
import { Link, Outlet } from "react-router-dom";

export default function NamaHijab() {
  const params = useParams();

  return (
    <>
      <hr />
      <Link to="/"> home </Link>
      <span> | </span>
      <Link to="/aksesoris"> aksesoris </Link>

      <p>{params.namaproduk} </p>
      <p>Warna : </p>
      <p>Harga : </p>

      <Outlet />
    </>
  );
}
