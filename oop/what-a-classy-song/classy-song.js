class Song {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
    this.listeners = []
  }
  howMany(todaysListeners){
    todaysListeners = todaysListeners.map(e => e.toLowerCase())
    let result = [];
    for(let i = 0; i < todaysListeners.length; i++){
      if(!this.listeners.includes(todaysListeners[i])){
        result.push(todaysListeners[i])
        this.listeners.push(todaysListeners[i])
      }
    }
    return result.length
  }
}

let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose.artist)
console.log(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']));
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));