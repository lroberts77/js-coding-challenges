ensureQuestion = (s) => {
    return s.slice(-1) === '?' ? s : `${s}?`
}
  

console.log(ensureQuestion(""));
console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));