import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        <Redirect from="*" to="/" />
      </div>
    )
  }
}
