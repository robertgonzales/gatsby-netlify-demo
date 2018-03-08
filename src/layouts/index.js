import "./all.sass"
import React from "react"
import PropTypes from "prop-types"
import Navbar from "../components/Navbar"

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar />
    <div>{children()}</div>
  </div>
)

export default TemplateWrapper
