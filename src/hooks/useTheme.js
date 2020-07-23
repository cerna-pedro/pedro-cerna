import { useState, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const useTheme = () => {
  const [value, setValue] = useLocalStorage(
      "pedro-cerna-website-theme",
      "light"
    )
    const [theme, setTheme] = useState(value === "light" ? false : true)
    useEffect(() => {
      if (!theme) {
        document.body.classList.remove("dark")
        setValue("light")
      }
      if (theme) {
        document.body.classList.add("dark")
        setValue("dark")
      }
      // eslint-disable-next-line
    }, [theme])
    const toggleTheme = () => {
      setTheme(!theme)
    }
    return { theme, toggleTheme }
  }
