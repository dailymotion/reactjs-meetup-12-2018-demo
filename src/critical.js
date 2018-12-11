import playerService from 'src/playerService'

playerService.init(document.getElementById('player-holder'))
playerService.load(window.location.pathname.replace(/^\//, ''))

import(/* webpackChunkName: "reactapp" */ './client')
