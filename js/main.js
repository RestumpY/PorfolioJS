//Recuperer les valeurs 

var nom = document.getElementById('name');
var presentation =document.getElementById('presentation');
var age = document.getElementById('age');
var mail = document.getElementById('mail');
var adresse = document.getElementById('adresse');
var telephone = document.getElementById('telephone');

var imageMe = document.getElementById('imageMe');





//Function pour modifier les valeurs au clique

nom.addEventListener('click', function () {
    const newNom = prompt("Entre ton nom :");

    if (newNom.length > 0){
        nom.textContent = newNom;
    } 
})

presentation.addEventListener('click', function () {
    const newPresentation = prompt("Entre ta présentation:");

    if (newPresentation.length > 0){
        presentation.textContent = newPresentation;
    } 
    
})
age.addEventListener('click', function () {
    const newAge = prompt("Entre ton âge:");
    if (newAge.length > 0){
        age.textContent = newAge;
    } 
    
})

mail.addEventListener('click', function () {
    const newMail = prompt("Entre ton mail:");
    if (newMail.length > 0){
        mail.textContent = newMail;
    } 

})



telephone.addEventListener('click', function () {
    const newTelephone = prompt("Entre ton numéro de téléphone:");
    if (newTelephone.length > 0){
        telephone.textContent = newTelephone;
    } 

})

adresse.addEventListener('click', function () {
    const newAdresse = prompt("Entre ton adresse:");
    if (newAdresse.length > 0){
        adresse.textContent = newAdresse;
    } 

})

imageMe.addEventListener('click', function () {

    const newImage = prompt("Entrer le path ou le lien de votre nouvelle image");

    if (newImage.length > 0){
        imageMe.src = newImage;
    } 
    

})
