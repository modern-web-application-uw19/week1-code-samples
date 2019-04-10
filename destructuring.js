const person = {
    name: 'Brian',
    favoriteColor: 'salmon'
};

const person2 = {
    name: 'Champ',
    occupation: {
        location: {}
    }
};

// const name = person.name;
let {name: firstName} = person;

const {occupation: {location}} = person2;

console.log(firstName);