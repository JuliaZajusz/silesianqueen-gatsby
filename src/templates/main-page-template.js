import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { extractHeadingFromContent } from '../utils/expractHeadingFromContent'

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes
  const featuredImage = posts[0] && {
    data: posts[0].featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: posts[0].featuredImage?.node?.alt || ``,
  }
  if (!posts.length) {
    return (
      <Layout isHomePage pageTitle={"Ups"}>
        <Seo title="All posts" />
        <p>
          No articles found. Try again later!
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      isHomePage
      pageTitle={posts[0].title}
      pageHeading={!!posts[0].content && extractHeadingFromContent(parse(posts[0].content)).heading}
      image={featuredImage?.data && (
        <GatsbyImage
          image={featuredImage.data}
          alt={featuredImage.alt}
          style={{ marginBottom: 50 }}
        />
      )}
    >
      <Seo title="All posts" />

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title

          return (
            <li key={post.uri}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.uri} itemProp="url">
                      <span itemProp="headline">{parse(title)}</span>
                    </Link>
                  </h2>
                  <small>{post.date}</small>
                </header>
                <section itemProp="description">{parse(post.excerpt)}</section>
              </article>
            </li>
          )
        })}
      </ol>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressAllArticles($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
