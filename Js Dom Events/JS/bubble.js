console.log('connected to server');

document.getElementById('item-2').addEventListener('click', function(event){
    console.log('Item 2 clicked');
    event.stopPropagation();
});
document.getElementById('list-ul').addEventListener('click',function(){
console.log('ul clicked');
});
document.getElementById('list-container').addEventListener('click',function(){
console.log('container clicked');
});
document.getElementById('body').addEventListener('click',function(){
console.log('body clicked');
});