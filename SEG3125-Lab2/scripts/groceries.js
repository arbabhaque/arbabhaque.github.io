	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "garlic",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 12.00
	},
	{
		name: "salsa",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.99
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 14.00
	},
	{
		name: "spinach",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 3.50
	},
	{
		name: "apples",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 3.99
	},
	{
		name: "salt",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	var org = document.getElementById("organic").checked;
	let product_names = [];
	let temp = []

	if(org == true){
		for (let i=0; i<prods.length; i+=1) {
			if (prods[i].organic == org){
				temp.push(prods[i]);
			}
		}	
	}else{
		temp = prods;
	}

	for (let i=0; i<temp.length; i+=1) {
		if ((restriction == "V/G") && ((temp[i].vegetarian == true) && (temp[i].glutenFree == true))){
			product_names.push(`${temp[i].name} - $${temp[i].price}`);
		}
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}