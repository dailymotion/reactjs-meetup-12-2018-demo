export default new class PlayerService {
  initialized = false;
  currentVideoId = null;
  playerElement = null;
  player = null;

  init = (domElt) => {
    if (this.initialized) {
      return;
    }

    if (process.env.IS_BROWSER) {
      this.playerElement = domElt;
      this.playerElement.style.background = 'orange'
      this.playerElement.innerHTML = '<div id="player-inner"><span>I\'m initialized</span></div>'
      this.initialized = true;
    }
  };

  load = (videoId) => {
    if (this.currentVideoId === videoId) {
      return Promise.resolve();
    }

    this.currentVideoId = videoId;
    window.performance.mark('player_load')
    window.performance.measure('time_to_player_load', 'html_parse_start', 'player_load')
    this.playerElement.style.background = 'green'
    this.player = DM.player(this.playerElement.querySelector('#player-inner'), {
      video: videoId,
      width: '100%',
      height: '100%',
      params: {
        autoplay: true,
        mute: true,
        'queue-enable': false,
        'sharing-enable': false,
      },
    })
    return new Promise((resolve) => {
      this.player.addEventListener('playback_ready', resolve)
    })
  };

  getFreshPlayerTemplate = () => {
    return '<div>PLAYER_INITIAL_TEMPLATE</div>'
  }
}();
