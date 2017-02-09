var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}
// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function (library) {
  var outputRaw = [];
  var playlists = library.playlists;
  getData(playlists, outputRaw);
  return outputRaw;
}
function getData (list, addTo) {
  for (var i in list) {
    var pNum = list[i].id;
    var pName = list[i].name;
    var pTracks = list[i].tracks.length;
    var listItem = `${pNum}: ${pName} - ${pTracks} tracks`
    addTo.push(listItem);
  }
}
      console.log(printPlaylists(library));

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
var printTracks = function () {
  var output = [];
  var tracks = library.tracks;
  trackData(tracks, output);
  return output;
}
function trackData (list, addTo) {
  for (var i in list) {
  var tNum = list[i].id;
  var tName = list[i].name;
  var tArtist = list[i].artist;
  var tAlbum = list[i].album;
  var tInfo = `${tNum}: ${tName} by ${tArtist} (${tAlbum})`
  addTo.push(tInfo);
  }
}
      console.log(printTracks(library));

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
var printPlaylist = function (playlistId) {
  var playListNum = playlistId.slice(1);
  var trackList = library.playlists.p01.tracks;
  console.log(printPlaylists(library)[playListNum-1]);
  console.log(printTracks(library)[0]);
  console.log(printTracks(library)[1]);
}
console.log(printPlaylist("p01"));
// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  var playlists = library.playlists[playlistId].tracks;
  playlists.push(trackId);
  return playlists;
}
console.log(addTrackToPlaylist("t03", "p01"));
// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
// adds a track to the library
var addTrack = function (name, artist, album) {
  newId = uid();
  library.tracks[newId] = {name: name, artist: artist, album: album}
}
addTrack("Hello", "Cher", "That Album")
// adds a playlist to the library

var addPlaylist = function (name) {
  newId = uid();
  library.playlists[name] = {id: newId, name: name, tracks:[]};
  console.log(library);
}
addPlaylist("My Jams");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
