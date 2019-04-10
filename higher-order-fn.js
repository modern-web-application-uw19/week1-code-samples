function getMoneyInWallet(change) {
    return change + 20 + 5;
}

// console.log(getMoneyInWallet);

function print(fn, change) {
    console.log('Here is your result: ' + fn(change));
}

print(getMoneyInWallet, 5);
