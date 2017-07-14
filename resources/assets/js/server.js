import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './js/modules/routes'

const app = express()

const renderPage = (appHtml) => {
    return `
        <!doctype html public="storage">
        <html>
        <meta charset=utf-8/>
        <title>My First React Router App</title>
        <link rel=stylesheet href=/index.css>
        <div id=root>${appHtml}</div>
        <script>console.log('${appHtml}')</script>
        <script src="/bundle.js"></script>
    `
}

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'client')))

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
//   res.sendFile(path.join(__dirname, 'client', 'index.html'))
})

const PORT = process.env.PORT || 8000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})