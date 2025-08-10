import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Toggle from "../components/toggle"
import { menu } from "../lib/menu"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const InternalLink = styled(AniLink)`
  font-size: inherit;
  color: inherit;
  background-image: linear-gradient(to right, var(--green), var(--green));
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 100% 0.4rem;
  color: inherit;
  text-decoration: none;
  transition: background-size 0.2s ease;
  :hover {
    background-size: 100% 50%;
  }
`

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title={menu.filter(item => item.path === location.pathname)[0]?.name}
      />
      <Toggle location={location} />
      <section>
        <h1>ABOUT</h1>
        <p>
          I'm an engineer.
        </p>
        <p>
          <InternalLink fade to="/contact/" duration={0.3} title="Contact Me">
            Contact me
          </InternalLink>!{" "}
          <span role="img" aria-label="Beaming Face with Smiling Eyes">
            😁
          </span>
        </p>
      </section>
    </Layout>
  )
}

export default About
