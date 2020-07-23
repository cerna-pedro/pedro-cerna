import React, { useState, useRef } from "react"
import styled from "styled-components"

const WarningContainer = styled.div`
  align-self: center;
  max-width: 768px;
  width: 100%;
  margin-top: 1rem;
  border: 2px solid var(--red);
  border-radius: 10px;
`

const WarningText = styled.p`
  text-align: left;
  padding: 1rem;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`

const WarningButton = styled.button`
  margin-left: 1rem;
  transition: transform 0.3s ease;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  padding: 1rem;
  font-size: inherit;
  font-family: inherit;
  color: var(--text);
  background: none;
  border-radius: 5px;
  border: 2px solid var(--red);
  box-shadow: 0px 0px 5px var(--text);
  :hover {
    transform: scale(1.01);
    box-shadow: 0px 0px 10px var(--text);
  }
  white-space: nowrap;
  @media (max-width: 500px) {
    margin: 1rem;
  }
`

export const useWarning = () => {
  const [warning, setWarning] = useState("")
  const warningRef = useRef(null)
  const Warning = () => {
    return (
      <WarningContainer ref={warningRef}>
        <WarningText>
          {warning}
          <WarningButton onClick={() => setWarning("")}>
            Close{" "}
            <span role="img" aria-label="Cross Mark">
              ❌
            </span>{" "}
          </WarningButton>
        </WarningText>
      </WarningContainer>
    )
  }
  return [warning, setWarning, Warning]
}
