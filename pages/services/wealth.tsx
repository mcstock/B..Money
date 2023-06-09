import Head from "next/head";
import { Feature, FeaturesGrid } from "../../components/Featurescard";
import { FeaturesCards } from "../../components/Featurescard2";
import { FooterLinks } from "../../components/Footerhero";
import HeaderMenu from "../../components/Header";
import styles from "../../styles/commodity.module.scss";

export default function Wealth() {
  return (
    <div>
      <Head>
        <title>Equity</title>
      </Head>
      <HeaderMenu />
      <div className="servicecard">
        <div>
          <h1 className="pagetitle">Wealth Management Services</h1>
          <div>
            <h2 className="pagesubtitle">At UBS, it’s not about Wealth Management but about Wealth Creation.</h2>
            <ul className="pagetext">
              <li>
                Wealth Management Services are a smart blend of Financial Planning and Investment Management.
              </li>
              <li>
                Dedicated Wealth Manager as your personal Wealth Advisor and Wealth Manager.
              </li>
              <li>High-end tools & techniques of modern Wealth Management with solutions to drive consistent and growing returns.</li>
            </ul>
          </div>
          <div>
            <h2 className="pagesubtitle">
              Complete Wealth Management Solution
            </h2>

            <p className="pagetext">Lead by a team of experts with tremendous experience in wealth creation, B-Money Traders offers turnkey wealth management solutions. Profile and family based personalization with complete discretion. Latest techniques and tools are harnessed to ensure maximum portfolio growth with thorough planning, research and management.</p>
          </div>

        </div>
      </div>
      <div className={styles.cont2}>
        <FeaturesCards title1={"Why wealth Management with B-Money Traders"} />
      </div>

      <FooterLinks />
    </div>
  );
}
