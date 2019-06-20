import React from 'react'
import Sound from 'react-sound'
import Logoff from './sounds/windows-xp-shutdown.mp3'
import SocialIcon from '../SocialIcon'
/* global soundManager:false */

class MusicalLinkAway extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shouldPlay: false
    }

    this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this)
  }

  componentDidMount() {
    soundManager.setup({ debugMode: false })
  }

  handleSongFinishedPlaying(e) {
    e.preventDefault()

    this.setState({ shouldPlay: true })

    const { href } = this.props

    setTimeout(() => window.open(href, '_blank'), 300)
  }

  render() {
    const { children } = this.props
    const { shouldPlay } = this.state

    return (
      <SocialIcon onClick={this.handleSongFinishedPlaying} {...this.props}>
        {children}

        {shouldPlay && <Sound url={Logoff} playStatus={Sound.status.PLAYING} />}
      </SocialIcon>
    )
  }
}

export default MusicalLinkAway
