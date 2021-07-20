import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiFaceToFace} from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiMicrophone} from 'react-icons/gi'
import { HiOutlineInformationCircle } from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';
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
  PricingCardFeature,
  ImgWrapper,
  Img
} from './Testimonials.elements';

function Testimonials() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>The Library</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <CgProfile />
                </PricingCardIcon>
                <PricingCardPlan>Kenn Tan</PricingCardPlan>
                {/* <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>

                  <PricingCardFeature>Read about how he has  </PricingCardFeature>
                  <PricingCardFeature>benefitted from our web app</PricingCardFeature>

                </PricingCardFeatures>
                <Button primary>Read More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
              <PricingCardIcon>
                  <CgProfile />
                </PricingCardIcon>
                <PricingCardPlan>Dr Janice Tan</PricingCardPlan>
                {/* <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>

                  <PricingCardFeature>Watch this webinar to </PricingCardFeature>
                  <PricingCardFeature> learn how to identify MDD</PricingCardFeature>

                </PricingCardFeatures>
                <Button primary>Watch Now</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                <CgProfile />
                </PricingCardIcon>
                <PricingCardPlan>Faez Nabil</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>

                  <PricingCardFeature>Learning how to empathise</PricingCardFeature>
                  <PricingCardFeature> with those around you </PricingCardFeature>

                </PricingCardFeatures>
                <Button primary>Read More</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Testimonials ;
// {"mode":"full","isActive":false}
