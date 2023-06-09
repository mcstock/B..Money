import Head from "next/head";
import { Feature, FeaturesGrid } from "../../components/Featurescard";
import { FeaturesCards } from "../../components/Featurescard2";
import { FooterLinks } from "../../components/Footerhero";
import HeaderMenu from "../../components/Header";
import styles from "../../styles/commodity.module.scss";

export default function Equity() {
  return (
    <div>
      <Head>
        <title>Equity</title>
      </Head>
      <HeaderMenu />
      <div className="servicecard">
        <div>
          <h1 className="pagetitle">Online Stock Trading</h1>
          <div>
            <h2 className="pagesubtitle">Make Financial Markets work for you with B-Money Traders Broking’s Online Equity Trading</h2>
            <ul className="pagetext">
              <li>
                As of March 2017, there are over 5500 Securities/Companies listed in BSE & over 1300 Securities/Companies listed in NSE
              </li>
              <li>
                Year-On-Year average shows Equity Markets gave an annual return of 18% / Year.
              </li>
              <li>B-Money Broking simplifies your Equity Investment & Trading Experience in both the major exchanges i.e. NSE & BSE</li>
            </ul>
          </div>
          <div>
            <h2 className="pagesubtitle">
              Stock Market Investments with B-Money Traders Broking
            </h2>

            <p className="pagetext">B-Money Broking, as a registered broker with NSE & BSE provides you with a Demat Account for investing in long-term Equities or trading in Equities as per your objectives and preferences. The Online Equity Trading with us is backed by a Robust and experienced Equity Research team which provided Free comprehensive Reports to make smart investments in the markets. We strongly focus on making Equity Trading easy and fast for you to experience its benefits; to this end we have our own proprietary trading platform .</p>
          </div>
        </div>
        <div>
        </div>
        <h2 className="pagesubtitle">
          8 Reasons to begin Trading with B-Money Traders Broking in
          Commodity Markets
        </h2>
        <FeaturesGrid />
      </div>
      <div className={styles.cont2}>
        <FeaturesCards title1={"Why Equity Trading with B-Money Traders?"} />
      </div>

      <FooterLinks />
    </div>
  );
}
