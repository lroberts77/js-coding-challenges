countSheep = (num) => {
    let i=0, ans =''
    while (i<num) {
      ans += `${++i} sheep...`
      // ans += `${++i} sheep...\n`
    }
    return ans
  }
  console.log(countSheep(1))
  console.log(countSheep(2))
  console.log(countSheep(3))