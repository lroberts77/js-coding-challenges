const friend = (friends) => {
    return friends.filter((a) => a.length === 4)
    
  }

  console.log(friend(["Ryan", "Kieran", "Mark"]));
//   ["Ryan", "Mark"]
  console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
//   ["Jimm", "Cari", "aret"]
  console.log(friend(["Love", "Your", "Face", "1"]))
//   ["Love", "Your", "Face"]
  console.log(friend(["Hell", "Is", "a", "badd", "word"]))
//   ["Hell", "badd", "word"]