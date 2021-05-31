import React from 'react';
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby"
import { Kicker } from "../components/Kicker/Kicker"
import { TeaserList } from '../components/TeaserList/TeaserList';
import { ScrolledText } from '../components/ScrolledText/ScrolledText';

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
      url: "/case/",
      image: data.cover1.childImageSharp.fluid,
    },
    {
      title: "Boxing App",
      category: "UI/UX Design",
      date: 2018,
      filename: "bag.jpg",
      alt: "bag image",
      url: "/case/",
      image: data.cover1.childImageSharp.fluid,
    },
    {
      title: "Kere Foundation Website",
      category: "UI/UX Design",
      date: 2018,
      filename: "bag.jpg",
      alt: "bag image",
      url: "/case/",
      image: data.cover1.childImageSharp.fluid,
    },
  ]
  return (
    <Layout>
      <SEO
      title="Hikari Otsu - Digital Designer"
      description=""
      />
      <Kicker homeOnly={true} titleEn="Hallo, Servus, " titleJp="こんにちは👋"/>
      <TeaserList items={projects}/>
      <ScrolledText />
    </Layout>
  );
}


