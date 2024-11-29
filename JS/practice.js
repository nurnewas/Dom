const list = document.getElementsByClassName("listitem");

for (const item of list) {
  console.log(item);
}

const sections = document.getElementsByTagName("section");
for (const section of sections) {
  console.log(sections);
//   sections.style.backgroundColor = "pink";
  section.style.border = "1px solid black";
}
