import { types } from 'mobx-state-tree'
import { document } from 'browser-monads'

const stylsheetLoaded = () => {
  const stylesheets = []

  for (let i = 0; i < document.styleSheets.length; i++) {
    stylesheets.push(document.styleSheets[i].href || '')
  }

  console.log('document.styleSheets', document.styleSheets)
  console.log('styleSheets', stylesheets)

  return stylesheets
    .filter(href => href.match('fonts.googleapis.com/css'))
    .length > 0
}

const activateWhenReady = model => {
  if (stylsheetLoaded()) {
    model.activate()
  } else {
    setTimeout(() => activateWhenReady(model), 100)
  }
}

const UIStore = types
  .model({
    contentLoaded: false
  })
  .actions(self => ({
    afterAttach() {
      activateWhenReady(self)
    },
    activate() {
      console.log('Content Status: activated')
      self.contentLoaded = true
    }
  }))

export default UIStore
