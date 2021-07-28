twoOldestAges = (ages) => {
      end = ages.sort((a,b) => a-b )
         while (end.length > 2) {
           end.shift()
      }
    return end
  }
  console.log(twoOldestAges([11,15,25,36,57,12]))