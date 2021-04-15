import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'

export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  color: #000;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "banner2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      <StyledContentCenterWrapper>
        <h2>Stephen Davis</h2>
        <p>Professional.<br /> I do not give a shit about your product, culture, or stock options.</p>
      </StyledContentCenterWrapper>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledBackgroundSection