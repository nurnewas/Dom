document.getElementById("more-event").addEventListener("mousemove", function(){
    console.log("tiger");
})

document.getElementById("text").addEventListener("focus", function(){
    console.log("cat");
})
document.getElementById("text").addEventListener("blur", function(){
    console.log("dog");
})