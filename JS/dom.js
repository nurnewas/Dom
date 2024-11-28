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


