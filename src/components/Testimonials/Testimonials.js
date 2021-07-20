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
                <PricingCardPlan>Kenn</PricingCardPlan>
                {/* <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>

                  <PricingCardFeature>Hear how he has benefitted </PricingCardFeature>
                  <PricingCardFeature>from our web app.</PricingCardFeature>

                </PricingCardFeatures>
                <Button primary>Read More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <Img src= '../../images/pexels-mentatdgt-937483.jpg' />
                <PricingCardPlan>Dr Janice Tan</PricingCardPlan>
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
                <PricingCardPlan>Ek Soo</PricingCardPlan>
                {/* <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>

                  <PricingCardFeature>Receive vtal statistics and</PricingCardFeature>
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
export default Testimonials ;
// {"mode":"full","isActive":false}
