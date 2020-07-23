import React from "react"
import { useTheme } from "../hooks/useTheme"
import styled from "styled-components"

const Container = styled.div`
  font-size: 2rem;
  margin-top: 1.6rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1rem;
`

const Switch = styled.label`
  margin-left: 0.6rem;
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.4rem;
`

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  :checked + span {
    background-color: var(--text);
  }
  :checked + span:before {
    transform: translate3d(2.6rem, 0, 0);
  }
  :focus + span {
    outline: 4px groove var(--link);
  }
`

const RoundSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--text);
  transition: 0.3s;
  :before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 2.6rem;
    width: 2.6rem;
    left: 0.4rem;
    bottom: 0.4rem;
    background-color: var(--bg);
    transition: 0.3s;
  }
  border-radius: 3.4rem;
`

const Toggle = ({ location }) => {
    const { theme, toggleTheme } = useTheme()
    return (
      <Container>
        {location.pathname !== "/" && (
          <>
            <span
              role="img"
              aria-label={theme ? "Last Quarter Moon Face" : "Sun With Face"}
            >
              {theme ? "🌜" : "🌞"}
            </span>
            <Switch>
              <Checkbox
                aria-label="Theme Toggle"
                onChange={toggleTheme}
                type="checkbox"
                checked={theme ? "checked" : ""}
              />
              <RoundSlider></RoundSlider>
            </Switch>
          </>
        ) }
      </Container>
    )
  }

export default Toggle
