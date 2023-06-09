import Head from "next/head";
import { Feature, FeaturesGrid } from "../../components/Featurescard";
import { FeaturesCards } from "../../components/Featurescard2";
import { FooterLinks } from "../../components/Footerhero";
import HeaderMenu from "../../components/Header";
import styles from "../../styles/commodity.module.scss";

export default function Commodity() {
  return (

    <div>
      <Head>
        <title>Commodity Trading</title>
      </Head>
      <HeaderMenu />
      <div className="servicecard">
        <div className="commoditycard">
          <h1 className="pagetitle">Commodity Trading</h1>
          <div className="pagetext">
            B-Money, the umbrella entity which houses the broking vertical is a
            multidimensional conglomerate with interests in various sectors. FMCG
            – Hospitality – Tech – Finance B-Money always aims to provide value to
            its stakeholders. With a motto “Aap Kijiye Kaamyabi Ki Tayaari, Baki
            Humari Zimmedari” which captures the very essence of what B-Money
            abides by. Every day at B-Money is an effort to raise the bar of
            “Excellence”.
          </div>
          <div>
            <h2 className="pagesubtitle">
              Commodity Trading in Resources and Renewables with Spot and
              Derivatives contracts on MCX and NCDEX exchanges
            </h2>

            <ul className="pagetext">
              <li>
                Diversify your portfolio by adding Commodities and Hedge risk.
              </li>
              <li>
                We offer Broking Services, Arbitrage Desk, Hedging Solutions for
                investors, traders, arbitrageurs and speculators for commodities.
              </li>
              <li>
                We offer Broking Services, Arbitrage Desk, Hedging Solutions for
                investors, traders, arbitrageurs and speculators for commodities.
              </li>
            </ul>
          </div>
          <div >
            <h2 className="pagesubtitle">Start Online Commodity Trading with B-Money</h2>

            <p className="pagetext">
              B-Money Broking, as a registered commodity broker with both, MCX &
              NCDEX, provides you with a Commodity Trading Account for trading /
              investing in Commodities as per your objectives and goals. Commodity
              Markets are highly synced with global developments. The Commodity
              Research and Fundamental team keenly observe worldwide news and
              couple them with effective analysis to produce dependable research
              calls. We at B-Money Traders Broking intend to make Commodity Trading
              easy and effective for you.
            </p>
          </div>
        </div>

        <div >
          <h2 className="pagesubtitle">
            8 Reasons to begin Commodity Trading with B-Money Traders Broking in
            Commodity Markets
          </h2>
          <FeaturesGrid />
        </div>
      </div>
      <div className={styles.cont2}>
        <FeaturesCards title1={"Why Commodity Trading with B-Money Traders ?"} />
      </div>
      <div className="footer">
        <FooterLinks />
      </div>
    </div>
  );
}
