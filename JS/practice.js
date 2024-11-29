const list = document.getElementsByClassName("listitem");

for (const item of list) {
  console.log(item);
}

const sections = document.getElementsByTagName("section");

for (const section of sections) {
  console.log(sections);
  section.style.backgroundColor = "pink";
  section.style.border = "1px solid black";
  section.style.margin = "10px";
  section.style.borderRadius = "25px 0px 25px 0px";

  // Hover
  section.addEventListener("mouseover", () => {
    section.style.backgroundColor = "green";
    section.style.transition = "background-color 0.5s";

    section.addEventListener("mouseout", () => {
      section.style.backgroundColor = "pink";
      section.style.borderRadius = "0px 25px 0px 25px";
    });
  });
}

// add a new Element
const second = document.getElementById("section2");
const li = document.createElement("li");
li.innerText = "list4";
second.appendChild(li);

// add Section
const main = document.getElementById("main-section");
const section = document.createElement("section");
section.innerText = `
<h1>This is my Dynamic section </h1>
    <ul>
        <li>list 1 </li>
        <li>list 2 </li>
        <li>list 3 </li>
    </ul>
`
;

main.appendChild(section);

