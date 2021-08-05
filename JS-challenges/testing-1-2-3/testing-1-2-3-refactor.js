var number = (array) => {
    return array.map((k,v) => 
        `${++v}: ${k}`
    )
}
console.log(number(["a", "b", "c"]));