const R = require('ramda');

const getThisValue = R.path([
    'data',
    'employee',
    'expenseReport'
]);

console.log(getThisValue({
    data: {
        employee: {
            expenseReport: {
                name: 'My April Expenses'
            }
        }
    }
}))