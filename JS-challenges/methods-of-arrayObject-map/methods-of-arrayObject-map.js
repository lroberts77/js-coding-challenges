var a = ["abcd","efjgh"]
    var b = a.map((x) => {
      return (x.length % 2 == 0 ? 
        x.slice(0,x.length/2) + "|" + x.slice(x.length/2)
        : 
        x.slice(0,x.length/2) + "|" + x.slice(x.length/2 + 1))
    })
    console.log(b);
