document
  .getElementById("more-event")
  .addEventListener("mousemove", function () {
    console.log("tiger");
  });

document.getElementById("text").addEventListener("focus", function () {
  console.log("cat");
});
document.getElementById("text").addEventListener("blur", function () {
  console.log("dog");
});

document.getElementById("text").addEventListener("keydown", function () {
  console.log(event.target.value);
  const key = event.target.value;
  document.getElementById("keys");
  keys.innerText = key;
}); //keyboard Typeahead

