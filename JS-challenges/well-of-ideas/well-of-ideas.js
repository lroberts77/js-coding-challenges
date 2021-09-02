well = (x) => {
    let judge = 0
    x.forEach((a) => a == 'good' ? judge++ : ''
    )
     return !judge ? 'Fail!' : judge > 2 ? 'I smell a series!' : 'Publish!'
}

console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));