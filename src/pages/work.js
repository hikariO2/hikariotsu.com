import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header } from "../components/Header/Header"

const Work = () => (
  <Layout>
    <SEO
    title="Hikari Otsu - Work"
    description=""
    />
    <Header　titleEn="All Work, " titleJp="作品集"/>
    <Link to="/">To Home</Link>
  </Layout>
)

export default Work
