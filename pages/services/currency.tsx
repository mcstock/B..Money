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
        <title>Currency Trading</title>
      </Head>
      <HeaderMenu />
      <div className="servicecard">
        <div>
          <h1 className="pagetitle">Currency Trading</h1>
          <div>
            <h2 className="pagesubtitle">Trade in the World’s Largest Market</h2>
            <ul className="pagetext">
              <li>
                As per Bank for International Settlements – Currency Market
                Trading average at $5.09 trillion/Day
              </li>
              <li>
                B-Money Traders Broking offers Currency Trading, Leveraged Currency
                Trading, Arbitrage Desk & Currency Hedging Solutions for
                investors, traders, arbitrageurs & hedgers.
              </li>
              <li>Leverage fluctuating FOREX rates beneficially by trading in Currency Futures & Currency Options using our Forex Trading Strategies.</li>
            </ul>
          </div>
          <div>
            <h2 className="pagesubtitle">
              Start Currency Trading with B-Money Traders
            </h2>

            <p className="pagetext">Currency Trading in the Forex Markets majorly happens via the NSE-CDS & BSE-CDS (Currency Derivative Segment) B-Money Traders Broking, as a registered Forex Broker or Currency Broker provides you with a Forex Trading Account to Trade / Invest in this highly dynamic segment. Currency Trading is governed by global events and broadly involves entire economies. Our Experts analysts bring you reliable research for you to take beneficial position involving currency. Our proprietary Trading platform allows you to Trade in currencies anytime – anywhere.</p>
          </div>
        </div>

        <div>
          <h2 className="pagesubtitle">
            8 Reasons to begin Commodity Trading with B-Money Broking in
            Commodity Markets
          </h2>
          <FeaturesGrid />
        </div>
      </div>
      <div className={styles.cont2}>
        <FeaturesCards title1={"Why Currency Trading with B-Money Traders?"} />
      </div>
      <FooterLinks />
    </div>
  );
}
