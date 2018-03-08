import "./all.sass"
import React from "react"
import PropTypes from "prop-types"

const TemplateWrapper = ({ children }) => (
  <div>
    <div>{children()}</div>
  </div>
)

export default TemplateWrapper
