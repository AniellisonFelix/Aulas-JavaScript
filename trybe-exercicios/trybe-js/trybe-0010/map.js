const products = [
	{id: 1, name: 'Smartphone', price: 1500, manufacturer: 'Samsung'},
	{id: 2, name: 'Nootbook', price: 2500, manufacturer: 'Dell'},
	{id: 3, name: 'TV', price: 2000, manufacturer: 'LG'},
	{id: 4, name: 'Headphones', price: 100, manufacturer: 'Sony'},
	{id: 5, name: 'Tablet', price: 1200, manufacturer: 'Apple'},
	{id: 6, name: 'Digital Camera', price: 800, manufacturer: 'Canon'},
	{id: 7, name: 'Video Game Console', price: 3000, manufacturer: 'Microsoft'},
	{id: 8, name: 'Monitor', price: 700, manufacturer: 'Acer'},
	{id: 9, name: 'Headphone', price: 150, manufacturer: 'JBL'},
];

const productsWithDiscount = products.map((product) => {
	const discount = product.price * 0.1;
	const discountedPrice = product.price - discount;

	return {
		name: product.name,
		newPrice: discountedPrice,
		discount: discount,
	}
})

console.log(productsWithDiscount);