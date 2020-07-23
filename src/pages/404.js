import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Toggle from "../components/toggle"
import { InternalLink } from "./about"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="PAGE NOT FOUND" />
    <Toggle location={location} />
    <section>
      <h1>PAGE NOT FOUND</h1>
      <p>
        You just hit a route that doesn't seem to exist...
        <span role="img" aria-label="Crying Face">
          😢
        </span>
      </p>
      <p>
        Click{" "}
        <InternalLink fade to="/" duration={0.3} title="Home Page">
          here
        </InternalLink>{" "}
        to go back to the home page.
      </p>
    </section>
  </Layout>
)

export default NotFoundPage
