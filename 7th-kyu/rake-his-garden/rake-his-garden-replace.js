const rakeGarden = (garden) => {
   return garden.replace(/(?!rock\b)\b\w+/g,'gravel');
}

console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel'));
console.log(rakeGarden('gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'));
console.log(rakeGarden('gravel rock gravel snail weed'));