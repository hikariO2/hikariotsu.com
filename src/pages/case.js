import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Kicker } from "../components/Kicker/Kicker"

const Case = () => (
  <Layout>
    <SEO
    title="Hikari Otsu - Case Name"
    description=""
    />
    <Kicker caseStudyOnly={true} url="/about"/>
  </Layout>
)

export default Case
