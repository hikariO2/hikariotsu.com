import React from 'react';
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby"
import { Kicker } from "../components/Kicker/Kicker"
import { Teaser } from "../components/Teaser/Teaser"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      cover1:file(relativePath: { eq: "bag.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      cover2:file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  

  const projects = [
    {
      title: "Boxing App",
      category: "UI/UX Design",
      date: 2018,
      filename: "bag.jpg",
      alt: "bag image",
      url: "/about/",
      image: data.cover1.childImageSharp.fluid,
    },
    {
      title: "Dasyk Sharing App",
      category: "UI/UX Design",
      date: 2020,
    },
  ]
  return (
    <Layout>
      <SEO
      title="Hikari Otsu - Digital Designer"
      description=""
      />
      <Kicker homeOnly={true} titleEn="Hallo, Servus, " titleJp="こんにちは👋"/>
      <Teaser 
        title={projects[0].title} 
        category={projects[0].category}
        date={projects[0].date}
        filename={projects[0].filename}
        to={projects[0].url}
        image={<Img
          fluid={projects[0].image}
          alt={projects[0].alt}
        />}
      />
      <div className="home" >
        <Link to="/about/">Go to about page</Link>
        <Link to="/case/">Go to case page</Link>
      </div>
    </Layout>
  );
}


