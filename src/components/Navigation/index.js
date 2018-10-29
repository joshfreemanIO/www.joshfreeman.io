import React from 'react'
import { Link  } from 'gatsby'
import { inject, observer } from 'mobx-react'
import Subscribe from './Subscribe'

const Navigation = ({store}) => {
  const className = store.UIStore.Navigation.isOpen ? 'site-navigation active' : 'site-navigation'

  return (
    <nav className={className}>
      <Link to="" className="site-title">joshfreeman.io</Link>

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

      <Subscribe />

    </nav>
  )
}

export default inject('store')(observer(Navigation))
