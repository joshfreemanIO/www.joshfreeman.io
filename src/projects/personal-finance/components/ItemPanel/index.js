import React from 'react'
import { observer } from 'mobx-react'
import centsToDollars from '../../utils/CentsToDollars'


const RenderPanel = observer(({ item }) => {
  return (
    <div className="item-panel" onClick={item.edit}>
      <p className="name">{item.name}</p>
      <p className="value">{centsToDollars(item.value)}</p>
    </div>
  )
})

const EditPanel = observer(({ item }) => {
  return (
    <div className="item-panel">
      <label htmlFor="edit-name">Name</label>
      <input id="edit-name" type="text" name="name" value={item.name} onChange={item.update} />

      <label htmlFor="edit-name">Value</label>
      <input id="edit-value" type="text" name="value" value={item.value} onChange={item.updateValue} />

      <button onClick={item.cancel}>Cancel</button>
      <button onClick={item.save}>Save</button>
    </div>
  )
})

const ItemPanel = ({ item }) => {
  if (item.isEditing) {
    return <EditPanel item={item} />
  }
  return <RenderPanel item={item} />
}

export default observer(ItemPanel)
