import React, { Component, Fragment } from 'react'

import styles from './Recommandations.scss'

export default class Recommandations extends Component {
  state = {
    videos: [],
  }

  componentDidMount() {
    this.setState({
      videos: [...new Array(100)],
    })
  }

  renderRecommandation(index) {
    return (
      <div className={styles.recommandation} key={index}>
        <div className={styles.thumbnail}></div>
        <div className={styles.description}>
          <h4>A video</h4>
          <p>From A channel</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        {this.state.videos.map((_, index) => (
          this.renderRecommandation(index)
        ))}
      </Fragment>
    )
  }
}
