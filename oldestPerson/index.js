function oldestPerson(people) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentAge = 0;
  let name = '';
  let age = 0;
  let currentName = '';
  for (let i = 0; i < people.length; i++) {
    currentName= people[i].name;
    if (people[i].death) {
      currentAge = people[i].death - people[i].birth
      
    } else{
      currentAge = currentYear - people[i].birth
    }
    if (currentAge > age) {
      age = currentAge;
      name = currentName
      
    }
    
  }
  console.log(name)
  return name;
}

module.exports = oldestPerson;