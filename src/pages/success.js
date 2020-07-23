import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Toggle from "../components/toggle"
import { InternalLink } from "./about"

const Success = ({ location }) => (
  <Layout location={location}>
    <SEO title="Congrats!" />
    <Toggle location={location} />
    <section>
      <h1>MESSAGE SENT</h1>
      <p>Thanks for sending a message!</p>
      <p>You'll be contacted shortly.</p>
      <p>
        Click{" "}
        <InternalLink fade to="/" duration={0.3} title="Home Page">
          here
        </InternalLink>{" "}
        to go back to the home page.
      </p>
      <p>
        Have a good one!{" "}
        <span role="img" aria-label="Beaming Face with Smiling Eyes">
          😁
        </span>
      </p>
    </section>
  </Layout>
)

export default Success
