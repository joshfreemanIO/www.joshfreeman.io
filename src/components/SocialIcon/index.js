import React from 'react'
import styled from 'styled-components'
import Facebook from './icons/facebook.svg'
import Github from './icons/github.svg'
import Instagram from './icons/instagram.svg'
import LinkedIn from './icons/linkedin.svg'
import Twitter from './icons/twitter.svg'

const IconLink = styled.a`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 50px;
  width: 50px;
  display: inline-block;
  text-indent: -9000px;
  filter: grayscale(1) brightness(0);
  margin: 0 ${props => props.theme.scales.scale6};
  align-self: flex-end;

  &:hover {
    filter: none;
    cursor: pointer;
  }

  &.facebook {
    background-image: url(${Facebook});
  }

  &.twitter {
    background-image: url(${Twitter});
  }

  &.instagram {
    background-image: url(${Instagram});
  }

  &.linkedin {
    background-image: url(${LinkedIn});
  }

  &.github {
    background-image: url(${Github});

    &:hover {
      filter: invert(100%);
      background-color: black;
    }
  }
`

const SocialIcon = ({ platform, children, ...props }) => (
  <IconLink className={platform} target="_blank" rel="noopener noreferrer" {...props}>{children}</IconLink>
)

export default SocialIcon
