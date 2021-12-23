//Recuperer les valeurs 

var nom = document.getElementById('name');
var presentation = document.getElementById('presentation1');
var age = document.getElementById('age');
var mail = document.getElementById('mail');
var adresse = document.getElementById('adresse');
var telephone = document.getElementById('telephone');

var imageMe = document.getElementById('imageMe');





//Function pour modifier les valeurs au clique

nom.addEventListener('click', function () {
    const newNom = prompt("Entre ton nom :");

    if (newNom.length > 0) {
        nom.textContent = newNom;
    }else{
        nom.removeEventListener();
    }

})

presentation.addEventListener('click', function () {
    const newPresentation = prompt("Entre ta présentation:");

    if (newPresentation.length > 0) {
        presentation.textContent = newPresentation;
    }

})


age.addEventListener('click', function () {
    const newAge = prompt("Entre ton âge:");
    if (newAge.length > 0) {
        age.textContent = newAge;
    }

})

mail.addEventListener('click', function () {
    const newMail = prompt("Entre ton mail:");
    if (newMail.length > 0) {
        mail.textContent = newMail;
    }

})



telephone.addEventListener('click', function () {
    const newTelephone = prompt("Entre ton numéro de téléphone:");
    if (newTelephone.length > 0) {
        telephone.textContent = newTelephone;
    }

})

adresse.addEventListener('click', function () {
    const newAdresse = prompt("Entre ton adresse:");
    if (newAdresse.length > 0) {
        adresse.textContent = newAdresse;
    }

})

imageMe.addEventListener('click', function () {

    const newImage = prompt("Entrer le path ou le lien de votre nouvelle image");

    if (newImage.length > 0) {
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
skill1.addEventListener('click', function () {
    const newLangage = prompt('Entrer votre langage');
    const newPourcentage = prompt('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <= 100) {
        skill1.firstElementChild.firstElementChild.textContent = newLangage;
        skill1.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill1.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } else {
        skill1.removeEventListener();
    }
})

skill2.addEventListener('click', function () {
    const newLangage = prompt('Entrer votre langage');
    const newPourcentage = prompt('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <= 200) {
        skill2.firstElementChild.firstElementChild.textContent = newLangage;
        skill2.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill2.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } else {
        skill2.removeEventListener();
    }
})

skill3.addEventListener('click', function () {
    const newLangage = prompt('Entrer votre langage');
    const newPourcentage = prompt('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <= 300) {
        skill3.firstElementChild.firstElementChild.textContent = newLangage;
        skill3.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill3.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } else {
        skill3.removeEventListener();
    }
})

skill4.addEventListener('click', function () {
    const newLangage = prompt('Entrer votre langage');
    const newPourcentage = prompt('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <= 400) {
        skill4.firstElementChild.firstElementChild.textContent = newLangage;
        skill4.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill4.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } else {
        skill4.removeEventListener();
    }
})

skill5.addEventListener('click', function () {
    const newLangage = prompt('Entrer votre langage');
    const newPourcentage = prompt('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <= 500) {
        skill5.firstElementChild.firstElementChild.textContent = newLangage;
        skill5.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill5.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } else {
        skill5.removeEventListener();
    }
})

skill6.addEventListener('click', function () {
    const newLangage = prompt('Entrer votre langage');
    const newPourcentage = prompt('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <= 600) {
        skill6.firstElementChild.firstElementChild.textContent = newLangage;
        skill6.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill6.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } else {
        skill6.removeEventListener();
    }
})

skill7.addEventListener('click', function () {
    const newLangage = prompt('Entrer votre langage');
    const newPourcentage = prompt('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <= 700) {
        skill7.firstElementChild.firstElementChild.textContent = newLangage;
        skill7.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill7.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } else {
        skill7.removeEventListener();
    }
})

skill8.addEventListener('click', function () {
    const newLangage = prompt('Entrer votre langage');
    const newPourcentage = prompt('Entrer votre niveau');

    if (newLangage.length > 0 && newPourcentage.length > 0 && newPourcentage <= 800) {
        skill8.firstElementChild.firstElementChild.textContent = newLangage;
        skill8.firstElementChild.lastElementChild.textContent = newPourcentage + "%";
        skill2.lastElementChild.firstElementChild.style.width = newPourcentage + "%";
    } else {
        skill8.removeEventListener();
    }
})


//Modifier les datas dans Experiences
var experience1 = document.getElementById('experience1');
var experience2 = document.getElementById('experience2');
var experience3 = document.getElementById('experience3');



experience1.addEventListener('click', function () {



    for (i = 0; i < 5; i++) {

        var newData = prompt(experience1.getElementsByClassName('col-sm-2')[i].textContent.trim());

        if (newData.length > 0) {
            experience1.getElementsByClassName('col-sm-10')[i].textContent = newData;
        } else {
            experience1.removeEventListener();
        }



    }

})

experience2.addEventListener('click', function () {



    for (i = 0; i < 5; i++) {

        var newData = prompt(experience2.getElementsByClassName('col-sm-2')[i].textContent.trim());
        experience2.getElementsByClassName('col-sm-10')[i].textContent = newData;

    }

})

experience3.addEventListener('click', function () {



    for (i = 0; i < 5; i++) {

        var newData = prompt(experience3.getElementsByClassName('col-sm-2')[i].textContent.trim());
        experience3.getElementsByClassName('col-sm-10')[i].textContent = newData;

    }

})

//Modifier les datas dans Formations

var formation1 = document.getElementById('formation1');

formation1.addEventListener('click', function () {


var newData = prompt('Entrer le nom de votre formation');
var newData1 = prompt ('Entrer où et quand :')
   

document.getElementById('formation1').firstElementChild.textContent = newData;
document.getElementById('formation1').lastElementChild.textContent = newData1;

})

var formation2 = document.getElementById('formation2');

formation2.addEventListener('click', function () {


var newData = prompt('Entrer le nom de votre formation');
var newData1 = prompt ('Entrer où et quand :')
   

document.getElementById('formation2').firstElementChild.textContent = newData;
document.getElementById('formation2').lastElementChild.textContent = newData1;

})

var formation3 = document.getElementById('formation3');

formation3.addEventListener('click', function () {


var newData = prompt('Entrer le nom de votre formation');
var newData1 = prompt ('Entrer où et quand :')
   

document.getElementById('formation3').firstElementChild.textContent = newData;
document.getElementById('formation3').lastElementChild.textContent = newData1;

})

var buttonAddExperience = document.getElementById('addExperience');
k = 1;

buttonAddExperience.addEventListener('click',function(){

    var row = document.getElementById('experiences');

    newDiv = document.createElement('div');

    newDiv.setAttribute('class','row mt-3 hover-effect');

    newDiv.setAttribute('id',`experience${k}`);

    
    

    row.appendChild(newDiv);

    for (h=1 ; h <= 5; h++){

        

        if(h == 1){
            var text = "Poste:"
        }else if(h == 2) {
            var text = "Entreprise:"
        }else if(h == 3) {
            var text = "Lieu:"
        }else if(h == 4) {
            var text = "Date:"
        }else if(h == 5) {
            var text = "Description:"
        }
        
        newDiv2 = document.createElement('div')
        newDiv2.setAttribute('class','col-sm-2');

        newDiv3 = document.createElement('div');
        newDiv3.setAttribute('class','pb-1');
        newDiv3.textContent = text;

        newDiv2.appendChild(newDiv3);
        newDiv.appendChild(newDiv2);

        newDiv4 = document.createElement('div');
        newDiv4.setAttribute('class','col-sm-10');

        newDiv5 = document.createElement('div');
        newDiv5.setAttribute('class','pb-1 fw-bolder');
        newDiv5.textContent = prompt(text);

        newDiv4.appendChild(newDiv5);
        newDiv.appendChild(newDiv4);



    }
k++;

})
var buttonDeleteExperience = document.getElementById ('deleteExperience');

buttonDeleteExperience.addEventListener('click',function(){

    var row = document.getElementById('experiences').getElementsByClassName('row mt-3 hover-effect');


    for(i = 2; i >= 0 ; i = i-1){

        row[i].remove();

    }
})


var buttonDeleteFormation = document.getElementById('deleteFormation');
buttonDeleteFormation.addEventListener('click',function(){

    var row = document.getElementById('formations').getElementsByClassName('hover-effect');


    for(i = 2; i >= 0 ; i = i-1){

        row[i].remove();

    }
})

var buttonDeleteSkill = document.getElementById('deleteSkill');

buttonDeleteSkill.addEventListener('click',function(){

    var row = document.getElementById('skill').getElementsByClassName('py-1');


    for(i = 7; i >= 0 ; i = i-1){

        row[i].remove();

    }

})


var buttonAddSkill = document.getElementById('addSkill');

var j = 0;

buttonAddSkill.addEventListener('click',function(){

j = j + 1;
    
    var row = document.getElementById('skill').getElementsByClassName('col-md-5')[0];

    console.log(document.getElementById('skill').getElementsByClassName('col-md-5')[0]);
    



    newDiv = document.createElement('div');

    

    newDiv.setAttribute("id", `skill${j}`);
    newDiv.setAttribute("class","py-1");

    row.appendChild(newDiv);

    newDiv1 = document.createElement('div');
    newDiv1.setAttribute("class","d-flex text-small fw-bolder");

    newSpan1 = document.createElement('span');
    newSpan1.setAttribute("class","me-auto");

    newSpan1Text = prompt('Entrer votre langage informatique');
    newSpan1.textContent = newSpan1Text;

    newSpan2 = document.createElement('span');

    newSpan2Text = prompt('Entrer votre niveau');
    newSpan2.textContent = newSpan2Text + "%";


    newDiv2 = document.createElement('div');
    newDiv2.setAttribute("class","progress my-1");

    newDiv3 = document.createElement('div');
    newDiv3.setAttribute('class','progress-bar bg-primary');
    newDiv3.setAttribute('role','progressbar');
    newDiv3.setAttribute('style',`width: ${newSpan2Text}%`);

    newDiv2.appendChild(newDiv3);

  

    newDiv1.appendChild(newSpan1);
    newDiv1.appendChild(newSpan2);

    newDiv.appendChild(newDiv1);
    newDiv.appendChild(newDiv2);
    
})
