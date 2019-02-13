import Header from './Header'
import React from 'react'

const layoutStyle = {
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
