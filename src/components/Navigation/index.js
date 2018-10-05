import React from 'react'
import { Link  } from 'gatsby'
import { inject, observer } from 'mobx-react'

const Navigation = ({store}) => {
  const className = store.UIStore.Navigation.isOpen ? 'site-navigation active' : 'site-navigation'

  return (
    <nav className={className}>
      <Link to="" className="site-title">Josh Freeman</Link>

      <div className="input-group nav-group">
        <label htmlFor="subscribe">Subscribe</label>

        <div className="subscribe-wrapper">
          <input type="text" id="subscribe" className="subscribe-input" placeholder="me@domain.com"/>
          <button className="subscribe-button"></button>
        </div>
      </div>

      <div className="navigation-links">
        <div className="nav-group">
          <Link className="nav-link" to="/blog" onClick={store.UIStore.Navigation.dismiss}>Blog</Link>
        </div>

        <div className="nav-group">
          <Link className="nav-link" to="/about" onClick={store.UIStore.Navigation.dismiss}>About</Link>
        </div>

        <div className="nav-group">
          <Link className="nav-link" to="/contact" onClick={store.UIStore.Navigation.dismiss}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default inject('store')(observer(Navigation))
