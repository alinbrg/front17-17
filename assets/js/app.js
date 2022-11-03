const firstSection = document.getElementById("for-edit");
const firstSectionClass = document.querySelector(".for-edit");

const sections = document.querySelectorAll("section");

const flexboxItems = document.querySelectorAll(".flexbox .item");
const flexbox = document.querySelector(".flexbox");
// console.log(
// 	firstSectionClass.parentElement,
// 	sections,
// 	firstSection.closest("body")
// );

const div = document.createElement("div");

div.innerText = "created from js";
// textContent

firstSection.appendChild(div);
firstSection.append(div, "text");

const btn = document.querySelector(".btn");

const aTag = document.querySelector("a");

// btn.style.backgroundColor = "red";

btn.classList.add("red");

// flexbox.classList.add('reverse')

const btnForImg = document.querySelector("#for-img-change");
const img = document.querySelector("img");

function handleClick(event) {
	// console.log(event);
	event.stopPropagation();
	event.target.classList.toggle("red");

	if (event.target.classList.contains("red")) {
		event.target.innerText = "change";
	} else {
		event.target.innerText = "start";
	}

	// const sectionImgSrc = img.getAttribute("src");
	img.setAttribute("src", "assets/images/post-3.jpg");
}

btnForImg.addEventListener("click", handleClick);

// btnForImg.addEventListener("click", (e)=>{
// 	const img = document.querySelector("img");
// 	img.setAttribute("src", "assets/images/post-3.jpg");
// });

const imgSection = document.querySelector(".img-section");

imgSection.addEventListener("click", (e) => {
	e.stopPropagation();
	e.target.style.backgroundColor = "lightgreen";
});

aTag.addEventListener("click", (e) => {
	e.preventDefault();
	e.stopPropagation();
	console.log("clicked");
});

const characters = [
	{
		first_name: "Harry",
		last_name: "Potter",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/harry.jpg",
		actor: "Daniel Radcliffe",
	},
	{
		first_name: "Hermione",
		last_name: "Granger",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/hermione.jpeg",
		actor: "Emma Watson",
	},
	{
		first_name: "Ron",
		last_name: "Weasley",
		house: "Gryffindor",
		image: "https://hp-api.herokuapp.com/images/ron.jpg",
		actor: "Rupert Grint",
	},
	{
		first_name: "Draco",
		last_name: "Malfoy",
		house: "Slytherin",
		image: "https://hp-api.herokuapp.com/images/draco.jpg",
		actor: "Tom Felton",
	},
];

function renderCharacters(arr) {
	const renderedCards = characters.map((char) => {
		return `
			<div class="img-card">
				<h4></h4>
				<img src="${char.image}" class="card-img" alt="${char.first_name}" />
			</div>
		`;
	});

	const div = document.createElement("div");
	console.log(renderedCards.join(""));

	div.innerHTML = renderedCards.join("");

	imgSection.append(div);
}

renderCharacters();
