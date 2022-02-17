const evensAndOdds = (num) => {
    return num.toString(num % 2 ? 16 : 2) 
  };
  
  console.log(evensAndOdds(2));
  console.log(evensAndOdds(13));
  console.log(evensAndOdds(47));
  console.log(evensAndOdds(12800));