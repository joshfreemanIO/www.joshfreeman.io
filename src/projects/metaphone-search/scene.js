import React from 'react'
import { inject, observer } from 'mobx-react'

const Scene = ({ store }) => (
  <main className="scene">
    <h1>Metaphone Search</h1>

    <div className="metaphone-scene">
      <input type="text" name="search" className="metaphone-search" onChange={event => store.search.updateSearchTerm(event.target.value)} value={store.search.searchTerm} />

      <ul className={`application-list ${store.search.isEmpty ? 'empty' : ''}`}>
        {store.filteredApplications.map(app => (
          <li className="application-listing" key={app.name}>
            <strong>{app.department}</strong>
            -
            <i>{app.name}</i>
          </li>
        ))}
      </ul>

    </div>
  </main>

)

export default inject('store')(observer(Scene))
