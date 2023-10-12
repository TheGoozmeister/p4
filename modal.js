function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalX = document.querySelector(".close");
const submit = document.querySelector(".btn-submit");

let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let birthDate = document.querySelector(".birthDate");
let numberOfParticipations = document.querySelector(".numberOfParticipations");
let citiesChecked = document.querySelectorAll(".cityCheck");
let conditionsChecked = document.querySelector(".conditionsCheck");
let eventsChecked = document.querySelector(".eventsChecked");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// cloase modal on click 
modalX.addEventListener("click", function(){
  modalbg.style.display = "none";
})



submit.addEventListener("click", function(event) {
  event.preventDefault();
  isFormOk();
});

// main verification function 
function isFormOk() {
  const isFirstNameOk = checkFirstName();
  const isLastNameOk = checkLastName();
  const isEmailOk = checkEmail();
  const isBirthOk = checkBirth();
  const isParticipationsOk = checkParticipations();
  const isCityOk = checkCitySelected();
  const isConditionsOk = checkConditionsAndEvents();

  if (isFirstNameOk && isLastNameOk && isEmailOk && isBirthOk && isParticipationsOk && isCityOk && isConditionsOk) {
    document.querySelector(".modal-body").innerHTML = "<div class='confirmation'><div class='thanks'>Merci pour votre inscription</div><div class='quitter'><input class='btn-submit button quit' type='submit' value='Fermer'></div></div>";
    const quit = document.querySelector(".quitter");
    quit.addEventListener("click", function(event){
      event.preventDefault();
      modalbg.style.display = "none";
    })
  }
}

// firstName verification 
function checkFirstName() {
  if (/^.{2,}$/.test(firstName.value)) {
    document.querySelector(".errorFirstName").innerText = "";
    return true;
  } else {
    document.querySelector(".errorFirstName").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    return false;
  }
}

// lastName verification 
function checkLastName() {
  if (/^.{2,}$/.test(lastName.value)) {
    document.querySelector(".errorLastName").innerText = "";
    return true;
  } else {
    document.querySelector(".errorLastName").innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
}

// email verification
function checkEmail() {
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value)) {
    document.querySelector(".errorEmail").innerText = "";
    return true;
  } else {
    document.querySelector(".errorEmail").innerText = "Veuillez entrer une adresse mail valide.";
    return false;
  }
}

// birthDate verification 
function checkBirth() {
  console.log(birthDate.value)
  if (birthDate.value!="") {
    document.querySelector(".errorBirth").innerText = "";
    return true;
  } else {
    document.querySelector(".errorBirth").innerText = "Veuillez entrer une date de naissance.";
    return false;
  }
}

// numberOfParticipations verification 
function checkParticipations() {
  console.log(isNaN(numberOfParticipations.value));
  if (/\d+/.test(numberOfParticipations.value)) {
    document.querySelector(".errorQuantity").innerText = "";
    return true;
  } else {
    document.querySelector(".errorQuantity").innerText = "Veuillez entrer une valeur numérique.";
    return false;
  }
}

// citySelected verification 
function checkCitySelected() {
  let selectedCity = null;
  citiesChecked.forEach(city => {
    if (city.checked) {
      selectedCity = city.value;
    }
  });
  if (selectedCity==null) {
    document.querySelector(".errorCity").innerText = "Veuillez sélectionner une ville.";
    return false;
  } else {
    document.querySelector(".errorCity").innerText = "";
    return true;
  }
}

// conditions and events verification 
function checkConditionsAndEvents() {
  if (conditionsChecked.checked) {
    document.querySelector(".errorConditions").innerText = "";
    return true;
  } else {
    document.querySelector(".errorConditions").innerText = "Veuillez accepter les conditions utilisateur.";
    return false;
  }
}
