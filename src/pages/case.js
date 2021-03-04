import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/Header/Header"

const Case = () => (
  <Layout>
    <SEO
    title="Hikari Otsu - Case Name"
    description=""
    />
    <Header caseStudyOnly={true} url="/about"/>
    <p className="hero-text pd-top16">I am a UXD Student and Product designer born and raised in Japan</p>
    <Link to="/">To Home</Link>
  </Layout>
)

export default Case
