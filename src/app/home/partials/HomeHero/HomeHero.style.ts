/*
 * HomeHero Styles
 * ---------------
 * Description:
 * This file defines the styled components for the HomeHero component, which is the main visual element on the homepage.
 * It includes styles for the container, background, content, image wrappers, titles, subtitles, and button wrappers.
 */

import styled from 'styled-components';

export const HomeHeroContainer = styled.div`
  overflow: hidden;

  background-image: url('/images/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;
`;

export const HomeHeroContent = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;

  padding-bottom: 100px;

  flex-direction: column;

  justify-content: flex-end;
`;

export const HomeHeroImageWrapper = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-57%);
  width: 27%;
  height: auto;

  margin: auto;
  img {
    width: 100%;
    height: auto;

    object-fit: contain;
    user-select: none;
  }
`;

export const HomeHeroSplatterWrapper = styled.div`
  position: absolute;
  left: 0;

  bottom: 0;
  z-index: 0;

  width: 45%;

  height: auto;

  z-index: -2;
  transform: translateY(10%) translateX(50%);

  img {
    width: 100%;
    height: auto;

    object-fit: contain;
    user-select: none;
  }
`;

export const HomeHeroTitle = styled.h1`
  color: #fff;
  font-size: 75px;

  font-family: 'ModernWarfare', sans-serif;
`;

export const HomeHeroSubtitle = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 16px;
  font-family: 'mont-blanc-400', sans-serif;
  max-width: 68ch;
  margin-left: auto;
  margin-right: auto;
`;

export const HomeHeroButtons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
