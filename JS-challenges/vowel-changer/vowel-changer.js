vowelChange = (str, vow) => {
    return str.replace(/[aeiou]/g, a => vow)
}

console.log(vowelChange("Hannah Hannah bo-bannah Banana fanna fo-fannah Fee, fy, mo-mannah. Hannah!",'i'));
console.log(vowelChange('adira wants to go to the park', 'o'));