// console.log("hello World!");
const sections = document.querySelectorAll("section");
console.log(sections);
console.log(sections.length);

for (const section of sections) {
  console.log(section);
  section.style.border = "red 3px solid";
  section.style.margin = "10px";
  section.style.padding = "20px";
  section.style.backgroundColor = "lightgray";
  // section.style.hoverBackgroundColor = 'pink';
  section.addEventListener("mouseover", () => {
    section.style.backgroundColor = "pink"; // Change to pink on hover
  });
  section.addEventListener("mouseout", () => {
    section.style.backgroundColor = "lightgray"; // Revert to lightgray
  });
//   sections.addEventListener('mouseover',() => {
//     sections.style.color = "red";
// });
}


// document.createElement("div").innerText = " Hello I create a Div using js ";

const newDiv = document.createElement("div"); // Create the <div>
newDiv.innerText = "Hello, I created a Div using JS"; // Set the text content

document.body.appendChild(newDiv); // Add the <div> to the <body>
