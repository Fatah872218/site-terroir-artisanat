//recuperation des donnees utilisateu

const inscriptionForm = document.getElementById("inscription");
const ButtonInscrire = document.getElementById("btnSubmit");

ButtonInscrire.addEventListener("click", () => {
  localStorage.setItem("Nom", document.querySelector("#name").value);
  console.log(document.querySelector("#name").value);
  localStorage.setItem("Prénom", document.querySelector("#prenom").value);
  console.log(document.querySelector("#prenom").value);
  localStorage.setItem("Email", document.querySelector("#email").value);
  console.log(document.querySelector("#email").value);
  localStorage.setItem(
    "Mot de passe",
    document.querySelector("#password").value
  );
  console.log(document.querySelector("#password").value);
  localStorage.setItem(
    "confirmation de mot de passe",
    document.querySelector("#confirm-password").value
  );
  console.log(document.querySelector("#confirm-password").value);
});

//Mot de passe: AZerty.1234

// recuperation et affiche des donnes sur la page web:

const titre2 = document.createElement("h3");
titre2.textContent = "Donnees stockées dans le local storage:";
console.log(titre2);
//-----------------
const nom = document
  .querySelector("section")
  .appendChild(document.createElement("p"));
nom.textContent = "Nom:";
console.log(nom);
nom.value = localStorage.getItem("Nom");
console.log(nom.value);

//---------------
const prenom = document.createElement("p");
prenom.textContent = "Prenom:";
console.log(prenom);
prenom.value = localStorage.getItem("Prénom");
console.log(prenom.value);
//----------------
const email = document.createElement("p");
email.textContent = "Email:";
console.log(email);
email.value = localStorage.getItem("Email");
console.log(email.value);
//------------------------
const motDePass = document.createElement("p");
motDePass.textContent = "Mot de Passe:";
console.log(motDePass);
motDePass.value = localStorage.getItem("Mot de passe");
console.log(motDePass.value);

//----------------------------------------------------------------------

// une autre methode ( a suivre):
/* let arryData = [];
const Form = document.querySelector("form");
const Name = document.querySelector("#name");
const Prenom = querySelector("#prenom");
const Email = querySelector("#email");
const Password = querySelector("#password");
const PasswordConfirm = querySelector("#confirm-password");

Form.addEventListener("click", (e) => {
  e.preventDefault;
  formVerify();
});

function formVerify() {
  const nameValue = Name.value.trim();
  const PrenomValue = Prenom.value.trim();
  const EmailValue = Email.value.trim();
  const pwdValue = Password.value.trim();
  const pwdConfValue = PasswordConfirm.value.trim();

  if (nameValue === "") {
    let message = "le Nom ne peut pas etre vide";
    SpeechSynthesisErrorEvent(nameValue, message);
  }
}



 */

/* function recupData() {
  const list = document.createElement("ul");
  const Form = document.querySelector("form");
  Form.forEach((input) => {
    const li = document.createElement("li");
    li.innerText = input.value;
    list.appendChild(li);
    document.body.appendChild(list);
  });
} */