import { useState, useEffect } from "react"

export const useWait = (str, time, delay = 0) => {
  const [progress, setProgress] = useState("")
  const wait = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  useEffect(() => {
    const write = async () => {
      await wait(delay)
      for (const letter of str) {
        setProgress(prevState => (prevState += letter))
        await wait(time)
      }
    }
    write()
    // eslint-disable-next-line
  }, [])
  return progress
}
