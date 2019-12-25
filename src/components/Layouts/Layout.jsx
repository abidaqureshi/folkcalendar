import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header'
import Footer from '../footer/footer'
/*
    Layout container which holds the
    Auto complete search component
*/

const Layout = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <main role="main">
        {children}
      </main>
      <Footer />
    </>

  )
}

export default Layout

Layout.propTypes = {

  children: PropTypes.object.isRequired,

}
