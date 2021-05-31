import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Kicker } from "../components/Kicker/Kicker"
import { ScrolledText } from "../components/ScrolledText/ScrolledText"

const About = () => (
  <Layout>
    <SEO
    title="Hikari Otsu - About"
    description=""
    />
    <Kicker　titleEn="About Us, " titleJp="私について"/>

    <div className="about_introduction about-introduction grid">
      <div className="grid_inner">
        <h1 className="about-introduction_title t--beta grid_inner">Hikari Otsu <br/>ー Under Contstruction</h1>
        <p className="about-introduction_description t--epsilon grid_inner"></p>
        <p className="t--zeta">I am originally from South Africa. I studied Visual Communications Design in China and recently moved to Berlin. I love travel, adventure and meeting new people. I am used to being outside of my comfort zone.  I consider my curious mind and communication skills as two of my biggest strengths. You will usually find me spending my downtime researching something. </p>
      </div>
    </div>

        
    <ScrolledText />
  </Layout>
)

export default About
