const findTheOldest = function (people) {
    let oldestPersonAge = 0;
    let oldestPerson = null;

    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        const currentYear = new Date().getFullYear();
        const currentPeopleAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;

        if (!oldestPerson || currentPeopleAge > oldestPersonAge) {
            oldestPersonAge = currentPeopleAge;
            oldestPerson = person;
        }
    }

    return oldestPerson;


};

// Do not edit below this line
module.exports = findTheOldest;

