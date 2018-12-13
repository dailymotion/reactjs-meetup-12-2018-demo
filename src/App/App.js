import React, { Component } from 'react'

import playerService from 'src/playerService'

import bigModuleString from './BigModuleForNoReason'
if (process.env.IS_BROWSER) {
  console.debug(bigModuleString)
}

import Recommandations from './Recommandations/Recommandations'
import PlayerHolder from './PlayerHolder/PlayerHolder'
import './style.scss'

import styles from './App.scss'

export default
class App extends Component {
  state = { mounted: false }
  componentDidMount() {
    this.setState({
      mounted: true,
    })
  }

  renderDescriptionSection() {
    if (!this.state.mounted) {
      return <div>Loading the description</div>
    }

    return (
      <div className={styles.description}>
        <h1>An awesome video</h1>
        Lorem ipsum everything. Bla bla bla.
        Lorem ipsum everything. Bla bla bla.
        Lorem ipsum everything. Bla bla bla.
        Lorem ipsum everything. Bla bla bla.
        Lorem ipsum everything. Bla bla bla.
        Lorem ipsum everything. Bla bla bla.
      </div>
    )
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.playerCell}>
          <PlayerHolder />
        </div>
        <div className={styles.descriptionCell}>
          {this.renderDescriptionSection()}
        </div>
        <Recommandations />
      </div>
    )
  }
}
