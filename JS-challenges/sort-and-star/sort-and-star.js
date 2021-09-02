twoSort = (s) => {
    return s.sort()[0].split('').map((a,b) => b == s[0].length-1 ? a : `${a}***` ).join('')
}
  