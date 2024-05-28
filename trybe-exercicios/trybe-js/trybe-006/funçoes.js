const trybeBankCustomers = ['oliva', 'mati', 'gus'];
const pirilamposCustomers = ['noel', 'carol', 'angelo', 'kissyla'];

function findElement(array, element) {
    return array.includes(element);
};

console.log(findElement(trybeBankCustomers, 'guss'));
console.log(findElement(pirilamposCustomers, 'carol'));
