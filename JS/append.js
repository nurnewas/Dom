const nameList = document.getElementById("nameList");
const li = document.createElement("li");
li.innerHTML = "Md"

nameList.appendChild(li);

// /add a new Section 
// const main = document.getElementById("main");
// const section = document.createElement("section");
// const h1 = document.createElement("h1");
// h1.textContent = "New Section added by js";
// section.appendChild(h1);

// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// li1.innerText = "Kabab";

// const li2 = document.createElement("li");
// li2.innerText = "Brani";

// const li3 = document.createElement("li");
// li3.innerText = "Salad";

// section.appendChild("ul");

// main.appendChild(section);



// /gpt

const main = document.getElementById("main");

const section = document.createElement("section");

const h1 = document.createElement("h1"); // Fixed: Correct method.
h1.textContent = "New Section added by js";
section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "Kabab";
ul.appendChild(li1); // Fixed: Append <li> to <ul>.

const li2 = document.createElement("li");
li2.innerText = "Biryani"; // Fixed: Correct spelling.
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Salad";
ul.appendChild(li3);

section.appendChild(ul); // Fixed: Append the actual <ul>, not a string.
main.appendChild(section);
