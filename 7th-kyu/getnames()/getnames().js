var data = [
    {name: 'Joe', age: 20},
    {name: 'Bill', age: 30},
    {name: 'Kate', age: 23}
]

getNames = (data) => {
    return data.map(el => el.name)
}

console.log(getNames(data));
