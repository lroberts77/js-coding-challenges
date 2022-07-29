// const rakeGarden = (garden) => {
//   return garden.split(' ').map(a => a !== 'rock' ? 'gravel' : a).join(' ')
// }

const rakeGarden = (garden) => {
  return garden.split(' ').map(a => a !== ('rock' || 'gravel') ? 'gravel' : a).join(' ')
}

console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel'));
console.log(rakeGarden('gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'));
console.log(rakeGarden('gravel rock gravel snail weed'));