const removeConsecutiveDuplicates = (s) => {
    return s.replace(/\b(\w+)(?: \1)+\b/g, '$1')
};

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));
