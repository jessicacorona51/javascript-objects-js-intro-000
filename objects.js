var playlist = {
  female: "summer"
}
function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
