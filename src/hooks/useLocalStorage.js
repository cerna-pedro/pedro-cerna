import { useState, useEffect } from "react"

export const useLocalStorage = (key, initial) => {
  let item;
  if (typeof window !== "undefined") {
    item = localStorage.getItem(key)
  }
  const [value, setValue] = useState(item || initial)
  useEffect(() => {
    if (typeof value === "string") {
      localStorage.setItem(key, value)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [value, key, initial, item])
  return [value, setValue]
}
