import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  html, body, #___gatsby, .main-wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;

    > div[role=group] {
      height: 100%;
      width: 100%;
    }
  }

  #___gatsby > div[role=group] {
    height: 100%;
    width: 100%;
    overflow: auto;
  }

  * {
    box-sizing: border-box;
  }
`

export default Style
