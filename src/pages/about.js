import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Kicker } from "../components/Kicker/Kicker"

const About = () => (
  <Layout>
    <SEO
    title="Hikari Otsu - About"
    description=""
    />
    <Kicker　titleEn="About Us, " titleJp="私について"/>
    <div className="about_introduction about-introduction grid">
      <h1 className="about-introduction_title t--beta grid_inner">Hikari Otsu <br/>ー Under Contstruction</h1>
      <p className="about-introduction_description t--epsilon grid_inner"></p>

    </div>
  </Layout>
)

export default About
