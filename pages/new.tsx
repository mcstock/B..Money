import Image from "next/image";
import Link from "next/link";
import openDemate from 'public/assets/images/open_demate.svg';
import Bussiness from 'public/assets/images/business.svg';
import Banner from 'public/assets/images/banner1210.jpg';
import BannerMob from 'public/assets/images/banner1210-mob.jpg';
import {
    TickerSymbol,
    TickerTape,
    TickerTapeSymbol,
} from "react-ts-tradingview-widgets";

export default function New() {
    const symbols: TickerSymbol[] = [
        {
            title: "",
            proName: "NASDAQ:AMZN",
        },
        {
            title: "",
            proName: "NASDAQ:NFLX",
        },
        {
            title: "",
            proName: "BSE:FEDERALBNK",
        },
        {
            title: "",
            proName: "BSE:BANKBARODA",
        },
        {
            title: "",
            proName: "BSE:NIFTYBEES",
        },
        {
            title: "",
            proName: "BSE:SBIN",
        },
        {
            title: "",
            proName: "BSE:GUJGAS",
        },
    ];
    return (
        <>
            <div className="clearfix" />
            <div>
                <div className="wper">
                    <div className="no_one_pad text-center">
                        <div className="innerPart">
                            <Image src={Bussiness} alt="bussiness"></Image>
                            <div className="clearfix" />
                        </div>
                        <div>
                            <h1>
                                Single platform for all your financial needs
                                <div>
                                    Invest in Equity, Algo Trading, Commodity, Currency, Mutual funds{" "}
                                    <br className="hideMobile" />
                                    and Insurance with personalized NISM Certified Dedicated Advisor.
                                </div>
                            </h1>
                            <div className="clearfix" />
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Link href="/auth/login" target="_blank" className="orange_apply_now">

                                    <div style={{ background: '#ef4123', border: '1px solid #ef4123', padding: '5px 20px 5px 20px', marginRight: '20px', borderRadius: 5, width: 'fit-content', textAlign: 'center', alignSelf: 'center', color: 'white' }} >Login</div>
                                </Link>
                                <Link href="/auth/signup" target="_blank" className="orange_apply_now">

                                    <div style={{ background: 'white', border: '1px solid #ef4123', padding: '5px 20px 5px 20px', borderRadius: 5, width: 'fit-content', textAlign: 'center', alignSelf: 'center', color: '#ef4123' }} >SignUp</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TickerTape symbols={symbols} colorTheme="dark"></TickerTape>
            <div className="largestCommodity" style={{ display: "none" }}>
                <div className="wper">
                    <div className="largestCommodity_right">
                        <div className="innerPad">
                            <div className="awardBox">
                                <img
                                    src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/largest_commodity.png"
                                    className="awardsImg"
                                />
                                <img
                                    src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/largest_commodity_down_link.png"
                                    className="dropDownLink"
                                />
                                <div>
                                    Top Performer in Currency Derivatives 2018-19 by BSE
                                    <br />
                                    <br />
                                    Times of India Award for Excellence in Financial Services (2016)
                                    <br />
                                    <br />
                                    3 Times winner of the MCX Commodity Broker of the Year Award
                                    (2016-17, 2017-18, 2018-19)
                                    <br />
                                    <br />
                                    NCDEX Krishi Pragati Award (2017)
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                    <div className="largestCommodity_left" style={{ display: "none" }}>
                        <div>
                            <center>
                                <Link href="/auth/login" target="_blank"
                                    className="orange_apply_now mobileView"
                                >
                                    5 Min Account Opening
                                </Link>
                                <br />
                                <br />
                            </center>
                            <h1>Largest Commodity Broker In India</h1>
                            <div className="clearfix" />
                            <div>
                                <div className="grayBox">
                                    Among the top 2 in the country by contributing 24.46% of ICEX
                                    overall exchange volume
                                </div>
                                <div className="grayBox2">
                                    No.1 stock broker for commodity trading by contributing 17.3% of
                                    NCDEX overall exchange volume
                                </div>
                                <div className="grayBox">
                                    Among the top 10 stock brokers in the country by contributing
                                    3.29% of the MCX exchange volume
                                </div>
                            </div>
                            <div className="clearfix" />
                            <div>
                                <ul>
                                    <li>
                                        <h2>
                                            Intraday commodity limits on demand for commodity trading
                                        </h2>
                                    </li>
                                    <li>
                                        <h2>
                                            Personalised evening dealer support for commodity trading
                                        </h2>
                                    </li>
                                    <li>
                                        <h2>
                                            Nation-wide network to support physical delivery at commodity
                                            exchanges
                                        </h2>
                                    </li>
                                    <li>
                                        <h2>Limits in Agri Commodity trading segment</h2>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wper">
                <div className="clm-lft">
                    <div className="trdfst">
                        <h2 className="thdn2">
                            <strong>Trade Faster with B-Money</strong>
                        </h2>
                        <p className="pras">
                            Grab every Market Opportunity with B-Money's Low Latency Trading
                            Platforms.
                        </p>
                        <div className="row m-t-25">
                            <div className="col-6">
                                <p className="pras">
                                    <img style={{ marginTop: 50, marginBottom: 50 }} src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/mobNotLap.jpg" />
                                </p>
                            </div>
                            <div className="col-6">
                                <ul className="tchlst">
                                    <li>Instant price alerts and notifications.</li><br />
                                    <li>Single-top buying and selling of scrips.</li><br />
                                    <li>Check real-time fund position with MTM updates.</li><br />
                                    <li>Intuitive user-interface with intelligent auto-screening.</li><br />
                                    <li>
                                        Get best charting software ChartiQ with actionable
                                        notifications.
                                    </li><br />
                                    <li>
                                        Unparalleled Server Latency for Lightning-Quick Order Execution
                                        Seamless back-office integration for smooth trading experience.
                                    </li><br />
                                    <li>
                                        Access pre and post analytics and reports, advanced drawing
                                        tools and indicators
                                    </li><br />
                                    <li>
                                        Wealth management through Al-driven platforms like Alphaniti and
                                        Narnolia
                                    </li><br />
                                    <li>
                                        Advanced Algo Trading with B-Money's TradeTron ModemAlgo, Algo
                                        Bulls, Fox Trader, and more.
                                    </li><br />
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mtf">
                <div className="wper">
                    {/*  MF Banner */}
                    <div className="mfbner">
                        <div className="wper">
                            <div className="lftx">
                                <h1 className="hdn1">
                                    <i>0</i>
                                    <br />
                                    <br />
                                    <span>
                                        <b>Zero</b>
                                        <br />
                                        Commision
                                    </span>
                                </h1>
                            </div>
                            <div className="ritx">
                                <div className="rtbxin">
                                    <h2 className="hdn2">
                                        Direct <b>Mutual Funds</b>
                                    </h2>
                                    <p className="slgs">
                                        Discover the Power of Direct Mutual Funds Invest with B-Money
                                        Today
                                    </p>
                                    <h3 className="hdn3">
                                        Benefits Direct Mutual Funds with B-Money{" "}
                                    </h3>
                                    <ul className="lstng">
                                        <li>Lower Expense Ratio</li> <li>Better Returns</li>{" "}
                                        <li>No Middlemen Involved</li> <li>Tax Benefits</li>{" "}
                                        <li>Convenient Investment</li> <li>Transparency</li>{" "}
                                        <li>Easy to Switch</li> <li>Flexibility</li>
                                    </ul>
                                    <p className="slgs">
                                        <Link href="/auth/login" target="_blank"
                                            className="btns"
                                        >
                                            Apply Now!
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  MF Banner End */}{" "}
                </div>
            </div>
            <div className="mtf">
                <div className="wper">
                    <Link href="/auth/login" target="_blank"
                    >
                        <div className="DktImg">
                            <Image
                                layout="responsive"
                                style={{ width: "100%" }}
                                objectFit="cover"
                                src={Banner}
                            />
                        </div>

                    </Link>
                    <Link href="/auth/login" target="_blank"
                    >
                        <div className="MktImg">
                            <Image
                                src={BannerMob}
                                layout="responsive"
                                style={{ width: "100%" }}
                                objectFit="cover"
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="openAccountArea">
                <div className="wper">
                    <div className="headingArea">
                        <h3>
                            Open an Online
                            <br />
                            Demat &amp; Trading Account for FREE <br />
                            <small>Apply Online. Paperless Process. Zero Hidden Charges*</small>
                        </h3>
                    </div>
                    <div className="clearfix" />
                    <div className="text-center">
                        <Link href="/auth/login" target="_blank"
                            className="orange_apply_now"
                        >
                            Apply Now
                        </Link>
                    </div>
                    <div className="clearfix" />
                    <div className="largeImageArea" >
                        <Image alt="open_demate" src={openDemate}></Image>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>
            <div className="wper">
                <div className="extraPointsArea">
                    <div className="equalBoxes">
                        <div className="col secondBlock">
                            <div>
                                <div className="iconArea">
                                    <img
                                        src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/icons/Icon-1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="clearfix" />
                                <div className="iconAreaHeading">
                                    <span className="counter" style={{ display: "inline-block" }}>
                                        18
                                    </span>
                                    +
                                </div>
                                <div className="clearfix" />
                                <div className="iconAreaParagrp">
                                    Years old
                                    <br />
                                    Company
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                        <div className="col fourthBlock">
                            <div>
                                <div className="iconArea">
                                    <img
                                        src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/icons/Icon-2.png"
                                        alt=""
                                    />
                                </div>
                                <div className="clearfix" />
                                <div className="iconAreaHeading">
                                    <span className="counter1" style={{ display: "inline-block" }}>
                                        Round the clock
                                    </span>
                                </div>
                                <div className="clearfix" />
                                <div className="iconAreaParagrp">
                                    Customer
                                    <br />
                                    Support
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                        <div className="col fifthBlock">
                            <div>
                                <div className="iconArea">
                                    <img
                                        src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/icons/Icon-3.png"
                                        alt=""
                                    />
                                </div>
                                <div className="clearfix" />
                                <div className="iconAreaHeading">
                                    <span className="counter" style={{ display: "inline-block" }}>
                                        315
                                    </span>
                                    +
                                </div>
                                <div className="clearfix" />
                                <div className="iconAreaParagrp">
                                    Locations Pan
                                    <br />
                                    India presence
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rmnyGyanh">
                <div className="wper">
                    <div className="hdn1">
                        <span>
                            <Link href="/">Investment Gyan</Link>
                        </span>
                    </div>
                    <ul className="R-GyanLst">
                        <li>
                            <Link href="/" target="_blank"
                                className="GynImg"
                            >
                                <img src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/11/RmnyGyan1.png" />
                            </Link>
                            <h2 className="hdg2">
                                Investment <br />
                                Webinars
                            </h2>
                            <Link href="/" target="_blank"
                                className="btn"
                            >
                                Read More
                            </Link>
                        </li>
                        <li>
                            <Link href="/" target="_blank"
                                className="GynImg"
                            >
                                <img src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/11/RmnyGyan2.png" />
                            </Link>
                            <h2 className="hdg2">
                                Investment <br />
                                Youtube
                            </h2>
                            <Link href="/" target="_blank"
                                className="btn"
                            >
                                Read More
                            </Link>
                        </li>
                        <li>
                            <Link href="/" target="_blank"
                                className="GynImg"
                            >
                                <img src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/11/RmnyGyan3.png" />
                            </Link>
                            <h2 className="hdg2">
                                Investment <br />
                                Telegram
                            </h2>
                            <Link href="/" target="_blank"
                                className="btn"
                            >
                                Read More
                            </Link>
                        </li>
                        <li>
                            <Link href="/" target="_blank"
                                className="GynImg"
                            >
                                <img src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/11/RmnyGyan4.png" />
                            </Link>
                            <h2 className="hdg2">
                                Investment Blogs <br />
                                for Beginners
                            </h2>
                            <Link href="/" target="_blank"
                                className="btn"
                            >
                                Read More
                            </Link>
                        </li>
                        <li>
                            <Link href="/" target="_blank"
                                className="GynImg"
                            >
                                <img src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/11/RmnyGyan5.png" />
                            </Link>
                            <h2 className="hdg2">
                                Investment Blogs <br />
                                for Traders
                            </h2>
                            <Link href="/" target="_blank"
                                className="btn"
                            >
                                Read More
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="wper">
                <div className="whatIsStock">
                    <div className="headingArea">
                        <h3>What is stock market?</h3>
                        <img
                            src="https://rmoneyindia.com/wp-content/themes/rmoney-8.14/assets/images/v-3.1/heading_seprater.png"
                            alt=""
                        />
                    </div>
                    <div className="clearfix" />
                    <div className="equalAreaOuter">
                        <div className="equalArea">
                            A stock market is a place where the shares of a public listed company
                            are traded. Stock market is divided into a primary and secondary
                            market.
                            <br />
                            <br />
                            Primary stock market is the one where companies come up with an
                            Initial Public Offering (IPO) for raising capital from the investors.
                            <br />
                            <br />
                            Secondary market is the one where the stocks already listed and
                            offered for public investments are traded. In the secondary stock mark
                            the investors buy and sell shares at a prevailing market price.
                            Secondary stock mark or the stock exchanges are regulated by the
                            Securities and Exchange Board of India.
                        </div>
                        <div className="equalArea">
                            <strong>How Does Stock market work</strong>
                            <br />
                            The stock mark works in the following sequences
                            <ul>
                                <li>Understanding the stock exchange platforms</li>
                                <li>
                                    Listing of the companies and their stocks in the primary market.
                                </li>
                                <li>
                                    The trading of the stocks then takes place in the secondary market
                                </li>
                                <li>
                                    Trading is conducted through the stock brokers in the country.
                                    These can be an individual stock broker or a brokerage firm. The
                                    investors can associate with any one of them on the basis of their
                                    preferences.
                                </li>
                                <li>Passing the order to the exchange.</li>
                                <li>
                                    Settlement of the order after finalization from the exchange.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="clearfix" />
                    <div className="text-center italicContent">
                        <h3 />
                        <h3>
                            For increasing their returns from stock trading investors need to
                            associate with the best Indian stock broker.
                        </h3>
                    </div>
                    <div className="clearfix" />
                    <div className="text-center">
                        <Link href="/auth/login" target="_blank"
                            className="orange_apply_now"
                        >
                            Invest Now
                        </Link>
                    </div>
                </div>
            </div>
        </>

    )
}