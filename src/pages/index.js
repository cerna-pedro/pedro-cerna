import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import landingVideo from "../videos/landing-color.mp4"
import { menu } from "../lib/menu"
import { useWait } from "../hooks/useWait"
import Toggle from "../components/toggle"
import styled from "styled-components"

const IndexSection = styled.section`
  padding-bottom: 0;
`

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
`

const Landing = styled.video`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 110%;
  height: 110%;
  z-index: -100;
  object-fit: cover;
  filter: blur(7px);
`

const TitleContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`

const H1Container = styled.div`
  text-align: left;
  flex: 1;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
`
const H2Container = styled.div`
  position: absolute;
  bottom: 0;
  text-align: right;
  flex: 1;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Title = styled.h1`
  pointer-events: none;
  position: relative;
  z-index: 200;
  font-size: 7rem;
  color: var(--white);
  text-shadow: 0.2rem 0.2rem 0.5rem var(--blue);
  @media (max-width: 768px) {
    font-size: 5.5rem;
  }
  @media (max-width: 500px) {
    font-size: 4rem;
  }
`
const SubTitle = styled.h2`
  pointer-events: none;
  position: relative;
  z-index: 200;
  font-size: 6rem;
  color: var(--white);
  text-shadow: 0.2rem 0.2rem 0.5rem var(--orange);
  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`

const IndexPage = ({ location }) => {
  const title1 = useWait("I AM", 40, 100)
  const title2 = useWait("PEDRO", 40, 260)
  const title3 = useWait("CERNA", 40, 460)
  const subTitle1 = useWait("I make", 55, 1300)
  const subTitle2 = useWait("awesome", 55, 1630)
  const subTitle3 = useWait("websites", 55, 2015)
  return (
    <Layout location={location}>
      <SEO
        title={menu.filter(item => item.path === location.pathname)[0]?.name}
        titleTemplate={`%s | Web Developer`}
      />
      <Toggle location={location} />
      <IndexSection>
        <TitleContainer>
          <H1Container>
            <Title>{title1}</Title>
            <Title>{title2}</Title>
            <Title>{title3}</Title>
          </H1Container>
          <H2Container>
            <SubTitle>{subTitle1}</SubTitle>
            <SubTitle>{subTitle2}</SubTitle>
            <SubTitle>{subTitle3}</SubTitle>
          </H2Container>
        </TitleContainer>
        <VideoOverlay></VideoOverlay>
        <Landing width="300" muted loop autoPlay playsInline>
          <source src={landingVideo} type="video/mp4" />
          Your browser does not support video.
        </Landing>
      </IndexSection>
    </Layout>
  )
}

export default IndexPage
