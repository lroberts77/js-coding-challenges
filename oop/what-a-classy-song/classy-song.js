class Song {
  constructor(artist, title) {
    this.artist = artist;
    this.title = title;
    this.viewers = []
  }
  howMany(listeners){
    listeners = listeners.map(e => e.toLowerCase())
    let result = [];
    for(let i = 0; i < listeners.length; i++){
      if(!this.viewers.includes(listeners[i])){
        result.push(listeners[i])
        this.viewers.push(listeners[i])
      }
    }
    return result.length
  }
}

let mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose.artist)
console.log(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']));
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));