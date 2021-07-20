import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiFaceToFace} from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiMicrophone} from 'react-icons/gi'
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
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
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>For The Workplace</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiMicrophone />
                </PricingCardIcon>
                <PricingCardPlan>Professional Talks</PricingCardPlan>
                {/* <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Talks given by professionals</PricingCardFeature>
                  <PricingCardFeature>on how to manage mental </PricingCardFeature>
                  <PricingCardFeature> health </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Read More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiFaceToFace />
                </PricingCardIcon>
                <PricingCardPlan>Contract consulting</PricingCardPlan>
                {/* <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Enjoy regular dedicated therapy</PricingCardFeature>
                  <PricingCardFeature> sessions by our team of</PricingCardFeature>
                  <PricingCardFeature> professionals for your company</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <HiOutlineInformationCircle />
                </PricingCardIcon>
                <PricingCardPlan>Data Analytics</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Receive vital statistics and</PricingCardFeature>
                  <PricingCardFeature>advice on the mental </PricingCardFeature>
                  <PricingCardFeature>well being of members</PricingCardFeature>
                  <PricingCardFeature>in your company</PricingCardFeature>
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
// {"mode":"full","isActive":false}
