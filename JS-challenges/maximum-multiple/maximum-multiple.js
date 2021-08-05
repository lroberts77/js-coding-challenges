maxMultiple = (divisor, bound) => {
    for (let i=0; i<=bound; bound--) {
      if(bound % divisor == 0) {break} 
   }
    return bound
}
console.log(maxMultiple(2,7)); //should === 6
console.log(maxMultiple(10,50)); // should === 50
console.log(maxMultiple(37,200)); // should === 185