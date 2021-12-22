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

//My Skill on récupere les datas
var skill1 = document.getElementById('skill1');
var skill2 = document.getElementById('skill2');
var skill3 = document.getElementById('skill3');
var skill4 = document.getElementById('skill4');
var skill5 = document.getElementById('skill5');
var skill6 = document.getElementById('skill6');
var skill7 = document.getElementById('skill7');
var skill8 = document.getElementById('skill8');



//Edit les datas de skill
skill1.addEventListener('click',function(){
    const newLangage = prompt ('Entrer votre langage');
    const newPourcentage = prompt ('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <=100){
        skill1.firstElementChild.firstElementChild.textContent = newLangage;
        skill1.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill1.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    }else{
        console.log('test');
    }
})

skill2.addEventListener('click',function(){
    const newLangage = prompt ('Entrer votre langage');
    const newPourcentage = prompt ('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <=200){
        skill2.firstElementChild.firstElementChild.textContent = newLangage;
        skill2.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill2.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    }else{
        skill2.removeEventListener();
    }
})

skill3.addEventListener('click',function(){
    const newLangage = prompt ('Entrer votre langage');
    const newPourcentage = prompt ('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <=300){
        skill3.firstElementChild.firstElementChild.textContent = newLangage;
        skill3.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill3.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } 
})

skill4.addEventListener('click',function(){
    const newLangage = prompt ('Entrer votre langage');
    const newPourcentage = prompt ('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <=400){
        skill4.firstElementChild.firstElementChild.textContent = newLangage;
        skill4.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill4.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } 
})

skill5.addEventListener('click',function(){
    const newLangage = prompt ('Entrer votre langage');
    const newPourcentage = prompt ('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <=500){
        skill5.firstElementChild.firstElementChild.textContent = newLangage;
        skill5.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill5.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } 
})

skill6.addEventListener('click',function(){
    const newLangage = prompt ('Entrer votre langage');
    const newPourcentage = prompt ('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <=600){
        skill6.firstElementChild.firstElementChild.textContent = newLangage;
        skill6.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill6.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } 
})

skill7.addEventListener('click',function(){
    const newLangage = prompt ('Entrer votre langage');
    const newPourcentage = prompt ('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <=700){
        skill7.firstElementChild.firstElementChild.textContent = newLangage;
        skill7.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill7.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } 
})

skill8.addEventListener('click',function(){
    const newLangage = prompt ('Entrer votre langage');
    const newPourcentage = prompt ('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <=800){
        skill8.firstElementChild.firstElementChild.textContent = newLangage;
        skill8.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill2.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } 
})

