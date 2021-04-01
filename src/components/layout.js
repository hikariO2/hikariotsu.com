/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

//Google fonts 400: Regular, 500: Medium
import "@fontsource/manrope/400.css"
import "@fontsource/manrope/500.css"
import "@fontsource/noto-sans-jp/400.css"
import "@fontsource/noto-sans-jp/500.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
