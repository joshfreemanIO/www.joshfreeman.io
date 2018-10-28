import React from 'react'
import {inject, observer} from 'mobx-react'

const Button = ({store}) => (
  <button
    className={`navigation-toggle ${store.UIStore.Navigation.isOpen ? 'active' : ''}`}
    onClick={store.UIStore.Navigation.toggle}
    >
    <span class="menu-icon"></span>
    <span class="close-icon"></span>

  </button>
)

export default inject('store')(observer(Button))
