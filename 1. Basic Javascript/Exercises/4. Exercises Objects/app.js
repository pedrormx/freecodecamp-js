/**
 * Record Colletion
 */

/**
 * Your function must always return the entire object.
 * If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
 * If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
 * If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
 * If value is an empty string, delete the given prop property from the album.
 * Note: A copy of the collection object is used for the tests.
 */

// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object,id, prop, value) {
  if (prop === "tracks" && (!(object[id]).tracks)) { //se prop for igual tracks e object[id].tracks nao for verdadeiro
      object[id].tracks = []; //criar um array vazio
  }
  if (prop === "tracks" && value !== "") {
      object[id].tracks.push(value);
  }
  if (prop !== "tracks" && value !== "") {
      object[id][prop] = value;
  }
  if (value === "") {
      delete object[id][prop];
  }
  return collection;
}

updateRecords(collection, 5439, 'artist', 'ABBA')
updateRecords(collection, 5439, "tracks", "Take a Chance on Me")
updateRecords(collection, 2548, 'tracks', "")
updateRecords(collection, 1245, 'albumTitle', 'Riptide')
updateRecords(collection, 1245, "tracks", "Addicted to Love")