// const list = [1, 2, 3, 4];

// const [a, b, c, d] = list;

// console.log(a);
// console.log(b);

// const [firstItem, ...rest] = list;
// console.log(firstItem);
// console.log(rest);

const car = {
    make: 'Honda',
    model: 'CR-V'
};

const carWithUpgrade = {
    ...car,
    engine: 'turbo'
}

console.log(carWithUpgrade);