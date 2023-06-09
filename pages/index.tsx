import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { HeroImageRight } from "../components/Heroheader";
import styles from "../styles/Home.module.scss";
import HeaderMenu from "./../components/Header";
import { Features } from "./../components/Features";
import { FooterLinks } from "../components/Footerhero";
import New from "./new";


import {
  TickerSymbol,
  TickerTape,
  TickerTapeSymbol,
} from "react-ts-tradingview-widgets";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | BMoney</title>
      </Head>
      <HeaderMenu />
      <New />
      <FooterLinks />
    </>)
}
export default Home;
