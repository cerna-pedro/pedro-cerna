import React, { useState } from "react"
import { menu } from "../lib/menu"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Container = styled.ul`
  font-size: 2.8rem;
  font-weight: 600;
  display: flex;
  list-style: none;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`

const AvatarContainer = styled.div`
  width: 25vmin;
  height: 25vmin;
  min-height: 60px;
  min-width: 60px;
  max-height: 110px;
  max-width: 110px;
  border-radius: 50%;
  border: 0.15rem solid var(--link);
  overflow: hidden;
`

const ListItems = styled.li`
  background-color: var(--transparent-bg);
  border-radius: 1px;
  transition: background-color 0.3s ease;
  flex: 1;
  &.current {
    background-color: transparent;
    a {
      text-shadow: 1px 1px 1px var(--bg);
    }
  }

  :first-child {
    flex: 0 0 30%;
    padding-left: 5rem;
    :focus-within {
      position: relative;
      outline: 4px groove var(--link);
      z-index: 1000;
    }
    @media (max-width: 768px) {
      flex: 1 0 100%;
      padding-left: 0;
      display: flex;
      justify-content: center;
    }
  }

  :not(:first-child) {
    flex: 1 1 17.5%;
    :hover {
      background-color: transparent;
    }
    a {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    @media (max-width: 768px) {
      font-size: 2.4rem;
      flex: 1 1 40%;
    }
    @media (max-width: 500px) {
      font-size: 1.8rem;
    }
  }
`

const NavLink = styled(AniLink)`
  color: var(--text);
  text-decoration: none;
`

const Nav = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "showcase.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  const [hover, setHover] = useState(false)
  return (
    <Container>
      <ListItems
        aria-label="Home Page"
        className={"/" === location.pathname ? "current" : ""}
        style={hover ? { backgroundColor: "transparent" } : {}}
      >
        <AvatarContainer
          onPointerEnter={() => {
            setHover(true)
          }}
          onPointerLeave={() => {
            setHover(false)
          }}
        >
          <NavLink fade to="/" duration={0.3} title="Home Page">
            <Img
              tabIndex="0"
              fluid={data.file.childImageSharp.fluid}
              alt="Pedro Cerna"
            />
          </NavLink>
        </AvatarContainer>
      </ListItems>
      {menu
        .filter(item => item.name !== "Pedro Cerna")
        .map((item, i) => (
          <ListItems
            className={item.path === location.pathname ? "current" : ""}
            key={i}
          >
            <NavLink fade to={item.path} duration={0.3} title={item.title}>
              {item.name}
            </NavLink>
          </ListItems>
        ))}
    </Container>
  )
}

export default Nav
