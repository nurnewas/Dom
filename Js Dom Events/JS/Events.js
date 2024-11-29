// 1 Decet set on HTML 
{/* <button onclick="document.body.style.backgroundColor = 'yellow'"></button> */}

// 2
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// 3
const blueMe = document.getElementById("makeMeBlue");
blueMe.onclick = Blue;

// makeMeBlue. Function
function Blue() {
  document.body.style.backgroundColor = "blue";
}


// 3 another
const purpleBtn = document.getElementById("purple");
purpleBtn.onclick = function purpleColor() {
    document.body.style.backgroundColor = "purple";
}

// 4
const pinkBtn = document.getElementById("pink");
pinkBtn.addEventListener("click",pinkColor);


function pinkColor() {
    document.body.style.backgroundColor = "pink";
}