import React, { Component } from 'react'

import playerService from 'src/playerService'
import styles from './PlayerHolder.scss'

export default
class PlayerHolder extends Component {
  componentDidMount() {
    playerService.init(this.playerElt)
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    let prerenderedPlayerTemplate = null
    if (process.env.IS_BROWSER) {
      const prerenderedPlayerHolder = document.getElementById('player-holder')
      prerenderedPlayerTemplate = prerenderedPlayerHolder && prerenderedPlayerHolder.innerHTML
    }

    return (
      <div className={styles.playerHolder}>
        <div className={styles.sixteenByNiner}>
          <div
            id="player-holder"
            ref={(elt) => this.playerElt = elt}
            className={styles.playerDiv}
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: prerenderedPlayerTemplate || playerService.getFreshPlayerTemplate()
            }}
          />
        </div>
      </div>
    )
  }
}
