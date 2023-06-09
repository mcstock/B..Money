import Head from "next/head";
import { Feature, FeaturesGrid } from "../../components/Featurescard";
import { FeaturesCards } from "../../components/Featurescard2";
import { FooterLinks } from "../../components/Footerhero";
import HeaderMenu from "../../components/Header";
import styles from "../../styles/commodity.module.scss";

export default function Derivatives() {
  return (
    <div>
      <Head>
        <title>Derivatives Trading </title>
      </Head>
      <HeaderMenu />
      <div className="servicecard">
        <div>
          <h1 className="pagetitle">Derivatives Trading</h1>
          <div>
            <h2 className="pagesubtitle">
              Leverage more from your Investments by Trading in Futures & Options
              in the Derivatives Market
            </h2>
            <ul className="pagetext">
              <li>
                Derivatives Trading, helps you to invest in contracts by bidding
                on their future value as their value gets derived from the
                underlying Financial Asset
              </li>
              <li>
                Experience the bull-run with the Growing Futures & Options Market
                in the NSE F&O segment, BSE Derivatives segment, MCX Futures
                segment, NCDEX Derivatives segment & MSEI Derivatives segment.
              </li>
              <li>
                Derivatives are available for Equity Stocks, Indices, Currencies
                and Commodities.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="pagesubtitle">Start Derivatives Trading with B-Money Traders</h2>

            <p className="pagetext">
              Derivatives trading in the Indian Derivatives Markets act as an excellent medium to leverage on foreseen market movements allowing you to either buy or sell a fixed amount of underlying financial assets at a particular time in the future. Derivatives are majorly traded to benefit from anticipated market movements, and additionally, they give you higher liquidity too. Under our Derivatives Market, we allow our clients to perform Futures Trading as well as Options Trading for higher growth rates. This acts as a well-balanced and preferred tool to hedge your risks, speculate and earn returns in a fairly shorter duration.


            </p>
          </div>
        </div>
        <div>
        </div>
        <h2 className="pagesubtitle">
          8 Reasons to begin Commodity Trading with B-Money Traders Broking in
          Commodity Markets
        </h2>
        <FeaturesGrid />
      </div>
      <div className={styles.cont2}>
        <FeaturesCards title1={"Why Derivatives Trading with B-Money Traders?"} />
      </div>

      <FooterLinks />
    </div>
  );
}
