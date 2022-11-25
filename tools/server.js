const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const withTM = require('next-transpile-modules')([])

const config = withTM({
  reactStrictMode: true,
  ...(dev && {
    experimental: {
      externalDir: true,
    },
  }),
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.(graphql|gql)$/,
  //     exclude: /node_modules/,
  //     loader: 'graphql-tag/loader',
  //   });
  //   return config;
  // },
})
const app = next({
  port,
  dev,
  dir: './',
  conf: config,
})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // https://nextjs.org/docs/routing/introduction
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
