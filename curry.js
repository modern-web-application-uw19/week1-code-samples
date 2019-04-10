function getMoneyInWallet(myChange) {
    return myChange + 20 + 5;
}

function print(change) {
    return function printWithChange(fn) {
        console.log('here you go: ' + fn(change));
    }
}

console.log(print(5)(getMoneyInWallet));