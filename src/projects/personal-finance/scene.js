import React from 'react'
import {inject, observer} from 'mobx-react'
import ItemPanel from './components/ItemPanel'
import CentsToDollars from './utils/CentsToDollars'

const Scene = ({store}) => (
  <div className="personal-finance-scene">
    <div className="item-container">
      <h2>Stats</h2>

      <dl>
        <dt>Adjusted Gross Income</dt>
        <dd>{CentsToDollars(store.reports.AdjustedGrossIncome)}</dd>
      </dl>
    </div>

    <div className="item-container">
      <h2>Income</h2>
      { store.income.map(item => <ItemPanel item={item} />) }
    </div>

    <div className="item-container">
      <h2>Housing Expenses</h2>
      { store.expenses.filter(item => item.category === 'Housing').map(item => <ItemPanel item={item} />) }
    </div>

    <div className="item-container">
      <h2>Other Expenses</h2>
      { store.expenses.filter(item => item.category !== 'Housing').map(item => <ItemPanel item={item} />) }
    </div>
  </div>

)

export default inject('store')(observer(Scene))
