isolateIt = (arr) => {
    var b = arr.map((x) => {
      return (x.length % 2 == 0 ? 
        x.slice(0,x.length/2) + "|" + x.slice(x.length/2)
        : 
        x.slice(0,x.length/2) + "|" + x.slice(x.length/2 + 1))
    })
    return b
  }
  console.log(isolateIt(["abcd","efjgh"]))
  console.log(isolateIt(["abcde","fghijk"]))

