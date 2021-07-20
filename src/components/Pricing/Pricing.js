import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
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
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Professional Talks</PricingCardPlan>
                {/* <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Talks given by professionals on   how to manage mental health in a workplace setting</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Read More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Contract consulting</PricingCardPlan>
                {/* <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Enjoy regular dedicated therapy sessions by our team of professionals for your company</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Data Analytics</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Receive vital statistics and advice on the mental well-being of members in your company</PricingCardFeature>

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