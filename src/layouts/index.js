import "./all.sass"
import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Navbar"

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar />
    <div>{children()}</div>
    <footer>Hello, I'm a footer.</footer>
  </div>
)

export default TemplateWrapper
