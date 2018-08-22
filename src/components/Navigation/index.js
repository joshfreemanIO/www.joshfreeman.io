import React from 'react'
import { Link } from 'gatsby'
import { inject, observer } from 'mobx-react'

const Navigation = ({store}) => {
  const className = store.UIStore.Navigation.isOpen ? 'site-navigation active' : 'site-navigation'

  return (
    <nav className={className}>
      <Link to="" className="site-title">Josh Freeman</Link>

      <div className="input-group nav-group">
        <label htmlFor="subscribe">Subscribe</label>
        <input type="text" id="subscribe" placeholder="me@domain.com"/>
      </div>

      <div className="navigation-links">
        <div className="nav-group">
          <Link className="nav-link" to="/">Blog</Link>
        </div>

        <div className="nav-group">
          <Link className="nav-link" to="/about">About</Link>
        </div>

        <div className="nav-group">
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default inject('store')(observer(Navigation))
