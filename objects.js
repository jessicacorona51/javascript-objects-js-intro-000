var playlist = {
  female: "summer"
}
function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}
function removeFromPlaylis (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
