var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

const greetDevelopers = (list) => {

  for(let i=0;i<list.length;i++) {
    list[i].greeting = `Hi ${list1[i].firstName}, what do you like most ${list1[i].language}`
  }
  return list
}

console.log(greetDevelopers(list1));
