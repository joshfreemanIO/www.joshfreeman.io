import { getSnapshot } from 'mobx-state-tree'
import Item from '../Item'

test('Item instantiation', () => {
  const item = Item.create()

  expect(getSnapshot(item)).toMatchSnapshot()
})
