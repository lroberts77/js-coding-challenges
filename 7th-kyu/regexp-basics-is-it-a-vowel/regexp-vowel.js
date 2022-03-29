String.prototype.vowel = function() {
    return (/^[aeiou]$/i).test(this);
};

console.log(''.vowel());
console.log('a'.vowel());
console.log('E'.vowel());
console.log('ou'.vowel());