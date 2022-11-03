// დავალება:
// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.
function isEven(num) {
	if (num % 2 == 0) {
		return true;
	} else {
		return false;
	}

	return num % 2 == 0;
}

// console.log(isEven(2), isEven(3), isEven(5));

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის პერიმეტრს.

function rectanglePerimeter(a, b) {
	return 2 * (a + b);
}

// console.log(rectanglePerimeter(3, 4));

// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის პერიმეტრს. პერიმეტრის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.
function squarePerimeter(a) {
	return rectanglePerimeter(a, a);
}

// console.log(squarePerimeter(5));

// 4.
// Math.random() - არის ფუნქცია, რომელიც აბრუნებს შემთხვევით რიცხვს 0-დან 1-მდე.
// Math.floor() - ამრგვალებს რიცხვს ქვემოთ, მაგალითად Math.floor(4.9) აბრუნებს 4-ს.
// Math.round()- ამრგვალებს რიცხვს უახლოეს მთელამდე.
// დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

function getRandomNumber() {
	let random = Math.round(Math.random() * 101);
	return random;
}

// console.log(getRandomNumber());
// 5. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს შესაბამისი შეტყობინება

function getCurrencySymbol(code) {
	console.log(code);
	let symbol;

	// if (code === "USD") {
	// 	symbol = "$";
	// } else if (code === "EUR") {
	// 	symbol = "€";
	// } else if (code === "GEL") {
	// 	symbol = "₾";
	// } else {
	// 	symbol = "✅";
	// }

	switch (code) {
		case "USD":
			symbol = "$";
			break;
		case "EUR":
			symbol = "€";
			break;
		case "GEL":
			symbol = "₾";
			break;

		default:
			break;
	}

	return symbol;
}

console.log(getCurrencySymbol("lira"));

// 6. შექმენით ობიექტების 5 ელემენტიანი მასივი, სადაც თითოეულ ობიექტს გააჩნია name და age ველები. შემდეგ შექმენით ფუნქცია, რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს ყველაზე ახალგაზრდა ობიექტს (რომლის age ველიც არის უმცირესი).

let userArr = [
	{
		name: "gio",
		age: 20,
	},
	{
		name: "nino",
		age: 25,
	},
	{
		name: "nika",
		age: 18,
	},
	{
		name: "lasha",
		age: 30,
	},
	{
		name: "mako",
		age: 15,
	},
];

function getYoungestUser(arr) {
	const sortedArr = arr.sort((a, b) => {
		return a.age - b.age;
	});

	return sortedArr[0];
}

// console.log(getYoungestUser(userArr));

const ages = userArr.map((el) => el.age); //მხოლოდ ასაკის მასივის შექმნა
console.log(ages);
const minAge = Math.min(...ages); //უმცირესი ასაკის პოვნა
console.log(minAge);

const youngestUser = userArr.find((el) => el.age === minAge); //იუზერი, რომლის ასაკიც ემთხვევა უმცირესს

console.log(youngestUser);
