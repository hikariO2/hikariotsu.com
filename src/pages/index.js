import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "../components/image"
import { Header } from "../components/Header/Header"

export default function Home() {
  return (
    <Layout>
      <SEO
      title="Hikari Otsu - Digital Designer"
      description=""
      />
      <Header homeOnly={true} titleEn="Hallo, Servus, " titleJp="こんにちは👋"/>
      <div className="home" >
        <Image />
        <Link to="/about/">Go to about page</Link>
        <Link to="/case/">Go to case page</Link>
      </div>
    </Layout>
  );
}
