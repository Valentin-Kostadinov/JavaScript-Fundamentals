function solve(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let n = input.shift();
  let songs = [];

  for (let i = 0; i < n; i++) {
    let currentInput = input.shift();

    let [currentTypeList, currentName, currentTime] = currentInput.split("_");

    let song = new Song(currentTypeList, currentName, currentTime);
    songs.push(song);
  }

  let preferredList = input.shift();

  for (let song of songs) {
    if (song.typeList === preferredList || preferredList == "all") {
      console.log(song.name);
    }
  }
}

solve([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
