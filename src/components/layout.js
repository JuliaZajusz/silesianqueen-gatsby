import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import HomePage from "./components/HomePage"
import Menu from "./components/Menu"
import Jumbotron from "./components/Jumbotron"

const Layout = ({ isHomePage, pageTitle, pageHeading, image, children }) => {

  return (
    <div data-is-root-path={isHomePage}>
      <Menu />
      {image && <Jumbotron
        title={pageTitle}
        image={image}
        heading={pageHeading}
      />}
      <div className="global-wrapper">
        {/* <header className="global-header"> */}
        {isHomePage && <HomePage />}
        {/* </header> */}

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
