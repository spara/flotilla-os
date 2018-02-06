import React from "react"
import Link from "gatsby-link"
import { ExternalLink } from "react-feather"
import Logo from "../assets/favicon.png"

const Title = () => (
  <Link to="/" className="fl-header-link fl-header-title">
    <div className="fl-header-title-name">Flotilla</div>
    <div className="fl-header-title-sub">Stitch Fix Open Source</div>
  </Link>
)

const Header = () => (
  <div className="fl-header-container" id="header">
    <div className="fl-header-inner">
      <div className="fl-header-section fl-header-section-left">
        <img
          className="fl-header-logo"
          src={Logo}
          alt="stitchfix-logo"
          id="headerLogo"
        />
        <Title />
      </div>
      <div className="fl-header-section fl-header-section-right">
        <Link
          className="fl-header-link"
          activeClassName="active"
          to="/docs/introduction"
        >
          Docs
        </Link>
        <a
          className="fl-header-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/stitchfix/flotilla-os"
        >
          Github&nbsp;<ExternalLink size={16} />
        </a>
      </div>
    </div>
  </div>
)

export default Header