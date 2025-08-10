import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { menu } from "../lib/menu"
import { useWarning } from "../hooks/useWarning"
import { navigate } from "gatsby"
import Toggle from "../components/toggle"
import { ExternalLink } from "../components/footer"
import styled from "styled-components"

const NiceForm = styled.form`
  align-self: center;
  width:100%;
  max-width:768px;
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p label {
    flex: 1;
    display: flex;
  }
  p label span {
    display: flex;
    flex:1 0 20%
  }
  p label input,
  textarea {
    border:none;
    color: var(--black);
    margin-left: 2rem;
    padding: 0.2rem .5rem;
    font-size: inherit;
    font-family: inherit;
    border-radius: 5px;
    flex: 1 0 60%;
    height: 3.6rem;
    align-self: flex-end;
  }
  p label textarea {
    resize: none;
    min-height: 14rem;
  }
  @media (max-width: 768px) {
    p label{
      flex-direction:column;
    }
    p label *{
      width:100%;
    }
    }
`

const NiceButton = styled.button`
transition:transform .3s ease;
transition:box-shadow .3s ease;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid var(--link);
  box-shadow: 0px 0px 5px var(--text);
  padding: 1rem;
  background: transparent;
  :hover{
    transform:scale(1.01);
    box-shadow: 0px 0px 10px var(--text);
  }
`

const Contact = ({ location }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [warning, setWarning, Warning] = useWarning()
  const encodeFormData = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleSubmit = e => {
    e.preventDefault()
    setWarning("")
    fetch("/success/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData({
        "form-name": "Contact Form",
        name,
        email,
        message,
      }),
    })
      .then(() => {
        navigate("/success/")
      })
      .catch(() => {
        setWarning(
          "Something went wrong when you tried to send the message. Try sending an email instead."
        )
        navigate("/contact/", { state: { name, email, message, warning } })
      })
  }
  return (
    <Layout location={location}>
      <SEO
        title={menu.filter(item => item.path === location.pathname)[0]?.name}
      />
      <Toggle location={location} />
      <section>
        {warning && <Warning />}
        <h1>CONTACT</h1>
        <p>Feel free to reach out!</p>
        <p>
          You can fill out the form below.{" "}
          <span role="img" aria-label="Party Popper">
            🎉
          </span>
        </p>
        <NiceForm
          onSubmit={handleSubmit}
          name="Contact Form"
          method="POST"
          data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="form-name" value="Contact Form" />
          <p>
            <label>
              <span>Name:</span>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <span>Email:</span>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="YourName@email.com"
                required
              />
            </label>
          </p>
          <p>
            <label>
              <span>Message:</span>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                name="message"
                placeholder="Your Message"
                required
              />
            </label>
          </p>
          <p>
            <NiceButton type="submit">
              Send Message{" "}
              <span role="img" aria-label="Postbox">
                📮
              </span>
            </NiceButton>
          </p>
        </NiceForm>
      </section>
    </Layout>
  )
}

export default Contact
