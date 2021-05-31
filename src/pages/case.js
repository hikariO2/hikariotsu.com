import React, { Fragment } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Kicker } from "../components/Kicker/Kicker"
import { DateLabel } from "../components/DateLabel/DateLabel"

const Case = () => (
  <Layout>
    <SEO
    title="Hikari Otsu - Case Name"
    description=""
    />
    <Kicker caseStudyOnly={true} url="/"/>

    <div className="grid">
      <div className="case-kicker grid_inner">
        <h1 className="t--beta">Daysk App<br/>ー Online marketplace for sharing workspaces</h1>
        <div className="t--epsilon">
          <span>2019</span>
          <span>-</span>
          <span>6 month</span>
          <span>/</span>
          <span>Freelance</span>
        </div>
      </div>

      <div className="case-intro grid_inner">
        <p className="t--zeta">Daysk is an online marketplace that offers office workers or freelancers various spaces such as co-working spaces, restaurants, galleries or shrines as comfortable and inspiring workspace. In this app user can filter seats by amenities such as power, Wi-Fi, non-smoking, food and free drinks and reserve available seats.</p>
        <div className="t--epsilon">
          <div>
            <DateLabel date="Role"/>
            <ul>
              <li>Research</li>
              <li>Scoping</li>
              <li>Ideation</li>
              <li>UI Development</li>
              <li>Prototyping</li>
              <li>Validation</li>
            </ul>
          </div>
          <div>
            <DateLabel date="Role"/>
            <ul>
              <li>Research</li>
              <li>Scoping</li>
              <li>Ideation</li>
              <li>UI Development</li>
              <li>Prototyping</li>
              <li>Validation</li>
            </ul>
          </div>
          <div>
            <DateLabel date="Role"/>
            <ul>
              <li>Research</li>
              <li>Scoping</li>
              <li>Ideation</li>
              <li>UI Development</li>
              <li>Prototyping</li>
              <li>Validation</li>
            </ul>
          </div>
        </div>
          <ul>
            <li></li>
          </ul>
      </div>
      <div className="case-section grid_inner">
        <span className="t--epsilon">01</span>
        <h1 className="t--beta">Insights & <br/>Problems</h1>
        <p className="t--zeta">Daysk is an online marketplace that offers office workers or freelancers various spaces such as co-working spaces, restaurants, galleries or shrines as comfortable and inspiring workspace. In this app user can filter seats by amenities such as power, Wi-Fi, non-smoking, food and free drinks and reserve available seats.</p>
      </div>
    </div>

  </Layout>
)

export default Case
