import { types } from 'mobx-state-tree'

const stylsheetLoaded = () => {
  if (typeof document === 'undefined') {
    return false
  }

  const stylesheets = []

  for (let i = 0; i < document.styleSheets.length; i++) {
    stylesheets.push(document.styleSheets[i].href || '')
  }

  return stylesheets
    .filter(href => href.match('fonts.googleapis.com/css'))
    .length > 0
}


const UIStore = types
  .model({
    contentLoaded: false
  })
  .actions(self => ({
    activate() {
      self.contentLoaded = true
    },
    activateWhenReady() {
      if (stylsheetLoaded()) {
        self.activate()
      } else {
        setTimeout(() => self.activateWhenReady(), 100)
      }
    }
  }))

export default UIStore
