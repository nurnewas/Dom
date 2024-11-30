document.getElementById("submitBTN").addEventListener("click", function() {
const commentBox = document.getElementById("comment");
const commentValue = commentBox.value
console.log(commentValue);

const commentContainer = document.getElementById("comment-container");
const p = document.createElement("p");
p.innerText = commentValue;

commentContainer.appendChild(p);
comment.value = '';
});