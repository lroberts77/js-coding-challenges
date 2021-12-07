bump = (x) => {
  return (x.match(/n/g) || []).length < 16 ? 'Woohoo!' : 'Car Dead';
}

console.log(bump("n"));
console.log(bump("______n___n_"));
console.log(bump("nnnnnnnnnnnnnnnnnnnnn"));