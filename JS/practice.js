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

  section.addEventListener("mouseover", () => {
    section.style.backgroundColor = "green";
    section.style.transition = "background-color 0.5s";

    section.addEventListener("mouseout", () => {
      section.style.backgroundColor = "pink";
      section.style.borderRadius = "0px 25px 0px 25px ";
    })
  })

}

// Hover 

