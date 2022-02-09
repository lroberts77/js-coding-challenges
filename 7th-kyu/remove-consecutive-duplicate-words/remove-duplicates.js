const removeConsecutiveDuplicates = (s) => {
    s = s.split(' ')
    let ans = []
    for(let i=0;i<s.length;i++) {
      if (s[i] !== s[i+1]) {
        ans.push(s[i])
      }
    }
    return ans.join(' ')
};

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
