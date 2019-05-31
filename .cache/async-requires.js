// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/leonardo/Projects/leomfelicissimo.github.io/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/dev-404-page.js"),
  "component---src-pages-blog-js": require("gatsby-module-loader?name=component---src-pages-blog-js!/Users/leonardo/Projects/leomfelicissimo.github.io/src/pages/blog.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/leonardo/Projects/leomfelicissimo.github.io/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/layout-index.json"),
  "blog-automate-with-webhooks.json": require("gatsby-module-loader?name=path---blog-automate-with-webhooks!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("gatsby-module-loader?name=path---blog-hello-world!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("gatsby-module-loader?name=path---blog-static-sites-are-great!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/blog-static-sites-are-great.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/dev-404-page.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/blog.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/layouts/index.js")
}