import { types } from 'mobx-state-tree'
import MainWrapper from '@components/Layout/MainWrapper/UIModel'
import LoadingIcon from '@components/LoadingIcon/UIModel'
import Navigation from '../components/Navigation/UIModel'
import ContentStatus from './ContentStatus'

const UIStore = types
  .model({
    Navigation: types.optional(Navigation, {}),
    ContentStatus: types.optional(ContentStatus, {}),
    MainWrapper: types.optional(MainWrapper, {}),
    LoadingIcon: types.optional(LoadingIcon, {})
  })

export default UIStore
