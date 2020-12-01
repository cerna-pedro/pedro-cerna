import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { menu } from "../lib/menu"
import { projects } from "../lib/projects"
import Toggle from "../components/toggle"
import { ExternalLink } from "../components/footer"

const Projects = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO
        title={menu.filter(item => item.path === location.pathname)[0]?.name}
      />
      <Toggle location={location} />
      <section>
        <h1>PROJECTS</h1>
        <p>
          Here's a list of some websites I've worked on, as well as some
          personal projects:
        </p>

        {projects.reverse().map((project, i) => (
          <p key={i}>
            <ExternalLink
              title={project.name}
              href={project.url}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              {project.name}
            </ExternalLink>
          </p>
        ))}
      </section>
    </Layout>
  )
}

export default Projects
