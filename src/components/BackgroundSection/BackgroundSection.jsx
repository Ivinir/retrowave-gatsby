import React, { useEffect } from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image-es5';
import styles from './BackgroundSection.module.scss';

const initGlitchEffect = () => {
  const bg = document.getElementById('background');
  const count = 10;
  for (let i = 0; i < count; i++) {
    const glitchBox = document.createElement('div');
    glitchBox.className = 'box';
    bg.appendChild(glitchBox);
  }
  const glitch = document.getElementsByClassName('box');
  let glitchInterval = Math.floor(Math.random() * 3000) + 1000;
  setInterval(() => {
    for (let i = 0; i < glitch.length; i++) {
      glitch[i].style.left = `${Math.floor(Math.random() * 100)}vw`;
      glitch[i].style.top = `${Math.floor(Math.random() * 100)}vh`;
      glitch[i].style.width = `${Math.floor(Math.random() * 200)}px`;
      glitch[i].style.height = `${Math.floor(Math.random() * 20)}px`;
      glitch[i].style.backgroundPosition = `${Math.floor(Math.random() * 50)}px`;
    }
    glitchInterval = Math.floor(Math.random() * 4000) + 1000;
    setTimeout(() => {
      for (let i = 0; i < glitch.length; i++) {
        glitch[i].style.width = '0px';
        glitch[i].style.height = '0px';
        glitch[i].style.backgroundPosition = '0px';
      }
    }, 200);
  }, glitchInterval);
};

const BackgroundSection = () => {
  useEffect(() => {
    initGlitchEffect();
  });

  return (
    <StaticQuery
      query={graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
      render={(data) => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid;
        return (
          <div
            className={`background ${styles.background}`}
            id="background">

            <BackgroundImage
              Tag="section"
              fluid={imageData}
              backgroundColor={'#040e18'}
            />
          </div>
        );
      }}
    />
  );
};

export default BackgroundSection;
