import Head from "next/head";
import { FooterLinks } from "../components/Footerhero";
import HeaderMenu from "../components/Header";

export default function Aboutus() {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <HeaderMenu />
      <div className="pagecard">
        <h1 className="pagetitle">About Us</h1>
        <div className="pagetext">
          B-Money, the umbrella entity which houses the broking vertical is a
          multidimensional conglomerate with interests in various sectors. FMCG
          – Hospitality – Tech – Finance B-Money always aims to provide value to
          its stakeholders. With a motto “Aap Kijiye Kaamyabi Ki Tayaari, Baki
          Humari Zimmedari” which captures the very essence of what B-Money
          abides by. Every day at B-Money is an effort to raise the bar of
          “Excellence”.
        </div>
      </div>
      <FooterLinks />
    </div>
  );
}
