console.log("connected to server");

// const items = document.getElementsByClassName('item');
// for (const item of items){
//     item.addEventListener('click',function(e){
//         // console.log(item.innerHTML);
//         // console.log(e.target.parentNode);
//         e.target.parentNode.removeChild(e.target);
//     });
// };
document
  .getElementById("content-container")
  .addEventListener("click", function (e) {
    e.target.parentNode.removeChild(e.target);
  });

// add  button
document.getElementById("btn-add-item").addEventListener("click", function () {
  const container = document.createElement("content-container");

  const li = document.createElement("li");
  li.textContent = "New Item";
  container.appendChild(li);
});
