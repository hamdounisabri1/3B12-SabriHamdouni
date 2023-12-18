

function send(){
var nom = document.getElementById('nameInput').value;
var email = document.getElementById('eamilInput').value;
var text = document.getElementById('textInput').value;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var state=true
 
    if (nom === '') {
    alert('Veuillez entrer votre nom');
    state=false
        return;
    } 
    if (email === '') {
        alert('Veuillez entrer votre email');
        state=false
        return;
    } 
    if(emailRegex.test(email)===false){
        alert('Veuillez verifier votre email');
        state=false
        return;
    }
    if (text === '') {
        alert('Veuillez entrer votre message');
        state=false
        return;
    }

    if(state === true){
           confirm("Veuillez confirmer votre message");

    }


}
