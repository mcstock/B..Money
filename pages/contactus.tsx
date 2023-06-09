import { ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import Head from "next/head";
import { ContactUs } from "../components/Contact";
import { FooterLinks } from "../components/Footerhero";
import HeaderMenu from "../components/Header";
import styles from "../styles/aboutus.module.scss";

export default function Contactus() {
  return (
    <div >
      <Head>
        <title>Contact Us</title>
      </Head>
      <HeaderMenu />
      <div className="pagecard">
        <h1 className="pagetitle">Contact Us</h1>
        <div className="pagetext">
          Trade with low* brokerage charges and avail a host of facilities with
          one of the best broking companies in India. In case you are not
          satisfied with broker resolution, You can also file complaint at SEBI
          Scores website

          <p className='pagetext' style={{ marginBottom: '0' }}>
            Customer Support: moneygooglinfo@gmail.com
          </p>

          <p className='pagetext' style={{ marginTop: '0' }}>
            Address: Near Himayat Nagar, Hyderabad, Andhra Pradesh - 500029</p>

        </div>
      </div>
      <div className={styles.container}>
        <ContactUs />
      </div>
      <FooterLinks />
    </div>
  );
}
