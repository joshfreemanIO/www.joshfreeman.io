import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  body {
    font-family: "Open Sans", "Helvetica Neue", Arial, sans-serif;
    color: ${props => props.theme.colors.grey};
    font-size: ${props => props.theme.scales.scale6};
    line-height: 1.5;
  }

  h1 { font-size: ${props => props.theme.scales.scale9}; line-height: ${props => props.theme.scales.scale9}; font-weight: bold; }
  h2 { font-size: ${props => props.theme.scales.scale7}; line-height: ${props => props.theme.scales.scale7}; font-weight: bold; }
  h3 { font-size: ${props => props.theme.scales.scale5}; line-height: ${props => props.theme.scales.scale5}; font-weight: bold; }
  h4 { font-size: ${props => props.theme.scales.scale3}; line-height: ${props => props.theme.scales.scale3}; font-weight: bold; }
  h5 { font-size: ${props => props.theme.scales.scale2}; line-height: ${props => props.theme.scales.scale2}; font-weight: bold; }
  h6 { font-size: ${props => props.theme.scales.scale1}; line-height: ${props => props.theme.scales.scale1}; font-weight: bold; }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${props => props.theme.scales.scale7};
    margin-left: -3px;
  }

  p {
    margin-bottom: ${props => props.theme.scales.scale8};
  }
`

export default Style
