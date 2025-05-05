const findTheOldest = function (people_obj) {
  // loop through the people obj
  // calculate the age
  // Store the oldest person obj
  // return people_obj[idx]

  let oldest_person;
  let oldest_age = 0;
  let new_age;
  for (const person of people_obj) {
    // This gives the person object

    new_age = find_age(person);
    if (new_age > oldest_age) {
      oldest_age = new_age;
      oldest_person = person;
    }
  }
  return oldest_person;
};

function find_age(person) {
  const birth_year = person.yearOfBirth;
  const death_year = person.yearOfDeath;
  let age;

  if (death_year == undefined) {
    const currentYear = new Date().getFullYear();
    age = currentYear - birth_year;
  } else {
    age = death_year - birth_year;
  }

  return age;
}

// Do not edit below this line
module.exports = findTheOldest;
