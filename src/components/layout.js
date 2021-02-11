import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "typeface-montserrat"
import "./layout.css"
import styled from "styled-components"

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children, location }) => {
  return (
    <Container>
      <Header location={location} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
