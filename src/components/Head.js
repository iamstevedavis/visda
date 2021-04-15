import { graphql, useStaticQuery } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Head = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: {eq: "banner"}, extension: {eq: "jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }        
      }
    }
  `);
  // const image = getImage(data.file.childImageSharp.fluid)
console.log(JSON.stringify(data))
  return (
    // <View style={styles.imageWrapper}>
    //  <ImageBackground style={styles.theImage} source={{uri : item.imageUrl}}>
    //       <Text>Hey</Text>
    //  </ImageBackground>
    // </View> 
    // <StaticImage src={data.file.childImageSharp.fluid.src} alt="A kitten" />
    <div style={{ backgroundColor: "black" }}>
      <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
    </div>
  )
}

export default Head