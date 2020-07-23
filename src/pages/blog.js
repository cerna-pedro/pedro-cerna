import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { menu } from "../lib/menu"
import { useFetch } from "../hooks/useFetch"
import loader from "../images/Ripple.svg"
import Toggle from "../components/toggle"
import { links } from "../lib/links"
import { ExternalLink } from "../components/footer"
import styled from "styled-components"

const Loader = styled.img`
  flex: 1;
`

const PostBox = styled.div`
  margin: 2rem 0;
  padding: 0 1rem 1.6rem;
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--link);
  box-shadow: 0 0 20px var(--text);
  overflow: hidden;
  border-radius: 1rem;
  p {
    padding: 1.6rem 0 0;
  }
  p a {
    color: inherit;
    text-decoration: none;
  }
  p a img {
    width: 100%;
  }
  p a time {
    display: block;
    padding-bottom: 3.2rem;
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    p a time {
      font-size: 1.6rem;
    }
  }
`

const PostContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const link = links.filter(link => link.name === "Instagram")[0]

const Blog = ({ location }) => {
  const { loading, posts } = useFetch()
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }
  return (
    <Layout location={location}>
      <SEO
        title={menu.filter(item => item.path === location.pathname)[0]?.name}
      />
      <Toggle location={location} />
      <section>
        <h1>BLOG</h1>
        {loading ? (
          <Loader
            src={loader}
            alt="Animation to denote that the website is loading"
          />
        ) : (
          <>
            <p>From time to time, I blog on social media.</p>
            <p>
              Check out my{" "}
              <ExternalLink
                title={link.name}
                href={link.url}
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                page
              </ExternalLink>
              .
            </p>
            <p>Here are some of my latest posts...</p>
            <PostContainer>
              {posts.map((post, i) => {
                const date = new Intl.DateTimeFormat("en-US", options).format(
                  new Date(post.timestamp * 1000)
                )
                return (
                  <PostBox key={i}>
                    <p>
                      <a
                        href={`https://instagram.com/p/${post.shortcode}`}
                        target="_blank"
                        rel="nofollow noreferrer noopener"
                        title={`Instagram post from ${date}`}
                      >
                        <img
                          src={post.imgSrc}
                          alt={`Instagram post from ${date}`}
                        />
                        <time>{date}</time>
                        {post.caption.split(" ").length > 25
                          ? post.caption.split(" ").slice(0, 25).join(" ") +
                            " ..."
                          : post.caption}
                      </a>
                    </p>
                  </PostBox>
                )
              })}
            </PostContainer>
          </>
        )}
      </section>
    </Layout>
  )
}

export default Blog
