console.log('connected to server');

document.getElementById('info-field').addEventListener('keyup', function(e) {
 const text = e.target.value;
 const deleteBTN = document.getElementById('info-btn');
 if(text === 'delete'){
    deleteBTN.removeAttribute('disabled');
 }

});
document.getElementById('info-btn').addEventListener('click', function(){
 const secret = document.getElementById('info-header');
 secret.style.display = 'none';
});