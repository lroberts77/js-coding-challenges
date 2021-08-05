var number = (array) => {
    let val = 0
        return array.map((x) => {
            val++
            return `${val}` + ": " + x
    })
  }
  console.log(number(["a", "b", "c"]));
  