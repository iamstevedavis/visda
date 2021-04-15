// Logo.js
import { Link, graphql, useStaticQuery } from 'gatsby';

import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`;
const Logo = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "visda" }, extension: { eq: "png" }) {
        childImageSharp {
          gatsbyImageData(width: 50, layout: CONSTRAINED)
        }
      }
    }
  `);

  return (
    <LogoWrap as={Link} to="/">
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt="logo"
      />
    </LogoWrap>
  );
};

export default Logo;
