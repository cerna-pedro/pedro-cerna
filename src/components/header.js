import React from "react"
import Nav from "./nav"
import styled from "styled-components"

const Navigation = styled.nav`
  padding: 0.3rem;
  background-image: linear-gradient(
    to right,
    var(--green),
    var(--blue),
    var(--purple),
    var(--pink)
  );
`

const Header = ({ location }) => (
  <header>
    <Navigation>
      <Nav location={location} />
    </Navigation>
  </header>
)

export default Header
