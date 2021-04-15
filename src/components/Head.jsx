import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { convertToBgImage } from 'gbimage-bridge';
import { getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  color: #FFF;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BackgroundSection = ({ className }) => {
  // https://www.gatsbyjs.com/plugins/gatsby-background-image/#gatsby-3--gatsby-plugin-image
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `,
  );

  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      // fixed={imageData}
      {...bgImage}
      backgroundColor="#040e18"
    >
      <StyledContentCenterWrapper>
        <h2>Stephen Davis</h2>
        <p>
          Professional.
          <br />
          {' '}
          I do not give a shit about your product, culture, or stock
          options.
        </p>
      </StyledContentCenterWrapper>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledBackgroundSection;
