// console.log("hello World!");
const sections = document.querySelectorAll('section');
console.log(sections);
console.log(sections.length);

for(const section of sections) {
    console.log(section);
    section.style.border ='red 3px solid';
    section.style.margin = '10px';
}