require("isomorphic-fetch")

const url = `https://www.instagram.com/graphql/query/?query_hash=15bf78a4ad24e33cbd838fdb31353ac1&variables={"id":"28507402079","first":8}`

const cache = {
  lastFetch: 0,
  posts: [],
}

async function getPosts() {
  const timeSinceLastFetch = Date.now() - cache.lastFetch
  if (timeSinceLastFetch <= 3600000) {
    return cache.posts
  }
  const posts = await fetch(url).then(res => res.json())
  cache.lastFetch = Date.now()
  cache.posts = posts
  return posts
}

exports.handler = async function (event, context, callback) {
  const posts = await getPosts()
  callback(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(posts),
  })
}
