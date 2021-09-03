ensureQuestion = (s) => {
    return s.includes('?') ? s : `${s}?`
}

console.log(ensureQuestion(""));
console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));