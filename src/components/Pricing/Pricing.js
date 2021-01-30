import React from "react";
import { Button } from "../../globalStyles";
// import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
// import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

import Chatdetector from "../../images/p7.svg";
import Calldetector from "../../images/p9.svg";
import Alldetector from "../../images/p11.svg";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/signin">
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiRock /> */}
                  <img src={Chatdetector} alt="" srcset="" width="120px" />
                </PricingCardIcon>
                <PricingCardPlan>Chat Detector</PricingCardPlan>
                <PricingCardCost>$9.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature> Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/signin">
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiCrystalBars /> */}
                  <img src={Calldetector} alt="" srcset="" width="120px" />
                </PricingCardIcon>
                <PricingCardPlan>Call Detector</PricingCardPlan>
                <PricingCardCost>$2.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/signin">
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiCutDiamond /> */}
                  <img src={Alldetector} alt="" srcset="" width="120px" />
                </PricingCardIcon>
                <PricingCardPlan>No Cheating</PricingCardPlan>
                <PricingCardCost>$29.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
