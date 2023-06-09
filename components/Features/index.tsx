import Image from 'next/image'
import trading from '../../public/assets/images/trading.svg';
import portfolio from '../../public/assets/images/portfolio.svg';
import mutual from '../../public/assets/images/mutual.svg';


export function Features() {
  return (
    <div>
      <div id='features'>
        <div id="gradbox">
          <p id="featurestitle">Why B-Money Broking is The Best Brokerage Firm for You ?</p>
        </div>
        <div id="sets">
          <div className="set" id="set1">
            <p className="settitle">Customer Service </p>
            <span className="settext"><ul><li>Always Available, Proactive and Keen to Help.</li>
              <li>Service that makes your Investments and portfolio management a Breeze.</li></ul></span>
          </div>
          <div className="set" id="set2">
            <p className="settitle">Online Demat Account</p>
            <span className="settext"><ul><li>Instant and Paperless.</li>
              <li>Think – Register – Start. That’s how simple we make for you.</li>
              <li>In the interest of environment – 100% paperless transactions.</li></ul></span>
          </div>
          <div className="set" id="set3">
            <p className="settitle">Best Full Service Broker</p>
            <span className="settext"><ul><li>We work with the Best in Business.</li>
              <li>Experts who are on top of their game.</li>
              <li>Dedicated to provide you the Best Services & Facilities.</li></ul></span>
          </div>
          <div className="set" id="set4">
            <p className="settitle">Our Legacy</p>
            <p className="settext" id="set4text">With a presence in over 12 State in India , B-Money has built a Indian & global brand and a legacy over the past 10 years.  us in a unique position to create the best is class experience.</p>
          </div>

        </div>
      </div>

      <div id="services">
        <div id="tiles">
          <div className="tile">
            <Image src={trading} height="400"></Image>
            <p className='tiletext'>Trading</p>
          </div>
          <div className="tile">
            <Image src={portfolio} height="180px"></Image>
            <p className='tiletext'>Profile Management</p>
          </div>
          <div className="tile">
            <Image src={mutual} height="330px"></Image>
            <p className='tiletext'>Mutual Fund</p>
          </div>
        </div>
      </div>

      <div id='massage'>
        <div id='massagebox'>
          <p id='massagetitle'>Attention Investors!</p>
          <p id='massagetext'>1.Stock Brokers can accept securities as margin from clients only by way of pledge in the depository system w.e.f. September 1, 2020.
            Update your mobile number & email Id with your stock broker/depository participant and receive OTP directly from depository on your <br></br>2.email id and/or mobile number to create pledge.
            <br></br>3.Pay 20% upfront margin of the transaction value to trade in cash market segment.
            <br></br>4.Check your Securities /MF/ Bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
        </div>
      </div>
    </div>
  );
};

