import { useState, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [value, setValue] = useLocalStorage(
    "pedro-cerna-blog-posts",
    JSON.stringify(posts)
  )
  const url = `https://www.instagram.com/graphql/query/?query_hash=15bf78a4ad24e33cbd838fdb31353ac1&variables={"id":"28507402079","first":8}`
  useEffect(() => {
    if (
      JSON.parse(value).length > 0 &&
      Date.now() - JSON.parse(value)[0].pullTime <= 3600000
    ) {
      setPosts(JSON.parse(value))
      setLoading(false)
      return
    } else {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const leanPosts = data.data.user.edge_owner_to_timeline_media.edges.map(
            post => {
              return {
                pullTime: Date.now(),
                timestamp: post.node.taken_at_timestamp,
                shortcode: post.node.shortcode,
                imgSrc: post.node.display_resources[0].src,
                caption: post.node.edge_media_to_caption.edges[0].node.text,
              }
            }
          )

          setPosts(leanPosts)
          setValue(JSON.stringify(leanPosts))
          setLoading(false)
        })
        .catch(e => {
          return
        })
    }
    // eslint-disable-next-line
  }, [])

  return { loading, posts }
}
