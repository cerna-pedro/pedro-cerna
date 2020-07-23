import React from "react"
import { links } from "../lib/links"
import styled from "styled-components"

const NiceFooter = styled.footer`
  padding: 0.3rem;
  background-image: linear-gradient(
    to right,
    var(--green),
    var(--blue),
    var(--purple),
    var(--pink)
  );
  font-size: 1.6rem;
`
const Copyright = styled.p`
  font-size: 1.6rem;
`
const Container = styled.div`
  background-color: var(--transparent-bg);
  p {
    padding:.5rem 0;
  }
  p a {
    padding-top:.2rem;
  }
`

export const ExternalLink = styled.a`
  margin: 1rem 0;
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

const Footer = () => {
  return (
    <NiceFooter>
      <Container>
        {links.map((link, i) => (
          <p key={i}>
            <ExternalLink
              title={link.name}
              href={link.url}
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              {link.name} {link.icon}
            </ExternalLink>
          </p>
        ))}
        <Copyright>
          &#169; Pedro Cerna 2019 - {new Date().getFullYear()}
        </Copyright>
      </Container>
    </NiceFooter>
  )
}

export default Footer
