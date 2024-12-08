//button connexion
const btnConnexion = document.getElementById("connexion");
btnConnexion.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/connexion/connexion.html";
});
//butoon inscription
const btnInscription = document
  .getElementById("inscription")
  .addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/inscription/inscription.html";
    prompt("vous avez plus de 18 ans");
    alert("bienvenue sur la page d'inscription");
  });

//logo box
const logoBox = document.getElementsByClassName("logo-box");
/* logoBox.addEventListener('type', listener, options) */
