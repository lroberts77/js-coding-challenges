multiTable = (number) => {
    let table = ''
    for(var i=1; i<11; i++){
        table += `${i} * ${number} = ${i*number} ${(i<10 ? '\n' : '')}`
    }
    return table
}
console.log(multiTable(5))