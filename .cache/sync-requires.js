// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/leonardo/Projects/leomfelicissimo.github.io/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/dev-404-page.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/leonardo/Projects/leomfelicissimo.github.io/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/leonardo/Projects/leomfelicissimo.github.io/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/layout-index.json"),
  "blog-automate-with-webhooks.json": require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/blog-static-sites-are-great.json"),
  "dev-404-page.json": require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/dev-404-page.json"),
  "blog.json": require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/blog.json"),
  "index.json": require("/Users/leonardo/Projects/leomfelicissimo.github.io/.cache/json/index.json")
}