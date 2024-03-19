/*
 * HomeHero Component
 * ------------------
 * Description:
 * This component serves as the main hero section of the homepage. It prominently features a hero image,
 * a title, a subtitle, and a list of buttons for user actions. The HomeHero component is designed to
 * capture the user's attention and direct them to key actions like starting a new game or joining an existing one.
 *
 * Structure:
 * - HomeHeroContainer: The outer container that encapsulates the hero section.
 * - HomeHeroBackground: A background image layer.
 * - HomeHeroImageWrapper: A wrapper for the main hero image.
 * - HomeHeroContent: A container for the textual content and buttons.
 * - HomeHeroSplatterWrapper: An optional decorative image wrapper.
 * - HomeHeroTitle: The main title of the hero section.
 * - HomeHeroSubtitle: A descriptive subtitle that provides additional context or information.
 * - HomeHeroButtons: A wrapper for the action buttons provided by the ButtonList component.
 *
 * Props:
 * This component does not currently accept any props but is designed to be easily extendable for dynamic content.
 */

'use client';
import React from 'react';
import Image from 'next/image';
import {
  HomeHeroContainer,
  HomeHeroBackground,
  HomeHeroContent,
  HomeHeroImageWrapper,
  HomeHeroTitle,
  HomeHeroSubtitle,
  HomeHeroButtons,
  HomeHeroSplatterWrapper,
} from './HomeHero.style';

import ButtonLink from '../../../../components/Atoms/Buttons/ButtonLink/ButtonLink';
interface HomeHeroProps {}

const HomeHero: React.FC<HomeHeroProps> = () => {
  return (
    <HomeHeroContainer>
      <HomeHeroBackground>
        <Image src="/images/background.png" alt="background" layout="fill" />
      </HomeHeroBackground>

      <HomeHeroImageWrapper>
        <Image src="/images/agent.png" width={472} height={551} alt="agent" />
      </HomeHeroImageWrapper>
      <HomeHeroContent>
        <HomeHeroSplatterWrapper>
          <Image src="/images/splatter.png" width={616} height={626} alt="splatter" />
        </HomeHeroSplatterWrapper>
        <HomeHeroTitle>Start a new Game</HomeHeroTitle>
        <HomeHeroSubtitle>
          Aruspicem Asbolium Sericum igni adiecta validis passim interemit pronuntiante se supra hoe
          est sorte flammis enim se iussurum flammis ferro.
        </HomeHeroSubtitle>
        <HomeHeroButtons>
          <ButtonLink theme="primary">Play</ButtonLink>
          <ButtonLink theme="secondary">Join Game</ButtonLink>
        </HomeHeroButtons>
      </HomeHeroContent>
    </HomeHeroContainer>
  );
};

export default HomeHero;
