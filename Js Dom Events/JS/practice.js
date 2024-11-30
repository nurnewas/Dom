console.log('connecting to server');

function handelOnClick() {
    document.body.style.backgroundColor = 'red';
}

// text Change 
function changeText() {
    const text  = document.getElementById('text');
    text.innerText = "Are you Hacked !!!!!"
}

// 2///
document.getElementById('btnListener').addEventListener('click',function (){
   const handelStatus = document.getElementById('text');
   handelStatus.innerText = "Updated by the event status update"
});

// input field set up 
document.getElementById('btn-update').addEventListener('click',function() {
    const inputfield = document.getElementById('input-field');
    // console.log(inputfield.value);
    const inputText = inputfield.value;

    const text = document.getElementById('input-text');
    text.innerText = inputText;
})