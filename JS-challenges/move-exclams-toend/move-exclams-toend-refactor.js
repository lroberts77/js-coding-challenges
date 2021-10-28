remove = (s) => {
    return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}

console.log(remove("Hi! Hi!"));
console.log(remove("Hi! !Hi Hi!"));
console.log(remove("Hi! Hi!! Hi!"));

// store everything that is [^!] 