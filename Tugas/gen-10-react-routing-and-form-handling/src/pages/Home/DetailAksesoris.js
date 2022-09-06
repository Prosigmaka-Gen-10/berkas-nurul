import { Link, Outlet, useParams } from "react-router-dom";

export default function DetailAksesoris() {
  const params = useParams();

  return (
    <>
      <hr />
      <Link to="/"> home </Link>
      <span> | </span>
      <Link to="/aksesoris"> aksesoris </Link>
      <h3>Detail Produk</h3>

      <p>{params.namaproduk} </p>
      <p>Warna : </p>
      <p>Harga : </p>

      <Link to="/aksesoris/detail-produk/{namaproduk}/keranjang">
        <button> + keranjang </button>
      </Link>
      <Outlet />
    </>
  );
}
