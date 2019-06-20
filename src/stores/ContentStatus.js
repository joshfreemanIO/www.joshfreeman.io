import { types } from 'mobx-state-tree'

const stylsheetLoaded = () => {
  const stylesheets = []

  for (let i = 0; i < document.styleSheets.length; i++) {
    stylesheets.push(document.styleSheets[i].href || '')
  }

  return stylesheets
    .filter(href => href.match('fonts.googleapis.com/css'))
    .length > 0
}

const activateWhenReady = model => {
  if (stylsheetLoaded()) {
    model.activate()
  } else {
    setTimeout(() => activateWhenReady(model), 25)
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
      self.contentLoaded = true
    }
  }))

export default UIStore
