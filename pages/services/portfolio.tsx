import Head from "next/head";
import { FeaturesCardsPortfolio } from "../../components/FeatureCardsPortfolio";
import { Feature, FeaturesGrid } from "../../components/Featurescard";
import { FeaturesCards } from "../../components/Featurescard2";
import { FooterLinks } from "../../components/Footerhero";
import HeaderMenu from "../../components/Header";
import styles from "../../styles/commodity.module.scss";

export default function Portfolio() {
  return (
    <div >
      <Head>
        <title>Portfolio Management</title>
      </Head>
      <HeaderMenu />
      <div className="servicecard">
        <div>
          <h1 className="pagetitle">Portfolio Management</h1>
          <div>
            <h2 className="pagesubtitle">B-Money Traders Portfolio Management Services</h2>
            <ul className="pagetext">
              <li>
                At B-Money Traders , our Portfolio Management Services are customized to meet your needs. This enables you to achieve your goals with our years of experience in making customized solutions work.
              </li>
              <li>
                We factor in your risk appetite and financial goals to devise unique portfolios.
              </li>

            </ul>
          </div>
          <div>
            <h2 className="pagesubtitle">
              Specialized Investment and Portfolio Management
            </h2>

            <p className="pagetext">PMS – Portfolio Management Services is a highly sophisticated service wherein a portfolio manager makes investments in equity, fixed income, debt and other money market instruments for Individuals, HNI (High Net worth Individuals) or institutions with a minimum investment value of 25 lakhs.</p>
          </div>
          <div>
            <h2 className="pagesubtitle">
              Best Portfolio Management Services in India
            </h2>

            <p className="pagetext">Portfolio Management Services at B-Money Traders aims at appreciation of capital by making investments in sectors and growing companies while considering the risk potential and tenure of the investment. UBS Portfolio Management Services offer a wide range of PMS strategies that cater to different segments of clients. These are thematic strategies which aim at maximizing the investors wealth while making investments in diversified stocks in sectors which show growth at a fast pace. B-Money Traders PMS is a trusted name in the broking and distribution space owing to our portfolio managers who possess more than two decades of industry experience with demonstrated ability to create investment portfolios in varying markets.</p>
          </div>
        </div>
      </div>
      <div className={styles.cont2}>
        <FeaturesCardsPortfolio />
      </div>

      <FooterLinks />
    </div>
  );
}
