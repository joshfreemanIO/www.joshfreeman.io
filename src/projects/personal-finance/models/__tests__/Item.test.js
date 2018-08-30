import Item from '../Item'
import { getSnapshot } from 'mobx-state-tree'

test('Item instantiation', () => {
  const item = Item.create()

  expect(getSnapshot(item)).toMatchSnapshot()
})
