import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import App from "./App"
import HomePage from "./components/HomePage"
import Jumbotron from "./components/Jumbotron"

const Layout = ({ isHomePage, children }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <div data-is-root-path={isHomePage}>
      {/* lalala
    <App/> */}
      <Jumbotron title={title} />
      <div className="global-wrapper">
        <header className="global-header">
          {isHomePage ? (
            // <h1 className="main-heading">
            //   <Link to="/">{parse(title)}</Link>
            // </h1>
            <HomePage />
          ) : (
            <Link className="header-link-home" to="/">
              {title}
            </Link>
          )}
        </header>

        <main>{children}</main>

      </div>
      <footer>
        <div className="global-wrapper">
          © {new Date().getFullYear()}  Zürich Tourismus
        </div>
      </footer>
    </div>
  )
}

export default Layout
