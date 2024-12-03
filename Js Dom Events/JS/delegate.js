console.log('connected to server');

const items = document.getElementsByClassName('item');
for (const item of items){
    item.addEventListener('click',function(){
        console.log(item.innerHTML);
        // console.log(e.target.parentNode);
    });
};
