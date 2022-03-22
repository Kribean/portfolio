let x = document.getElementsByClassName("heart");
let divProjet = document.getElementById("projet");
let API_URL =
  "https://api.github.com/users/Kribean/repos#list-repositories-for-a-user";

/*Permet d'activer la classe permettant d'activer le coeur */
for (let i = 0; i < x.length; i++) {
  x[i].addEventListener("click", (event) => {
    x[i].classList.toggle("is-active");
  });
}

/*recherche dans github les projets de R. Bruno*/
fetch(API_URL, {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})
  .then((result) => {
    return result.json();
  })
  .then((tableauMessages) => {
    tableauMessages.forEach((element) => {
      divProjet.innerHTML += `<div class="card m-2" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">${element.name}</h3>
        <p class="card-text">Le language principale utilisé pour ce projet est <span class="btn btn-warning">${element.language}</span></p>
        <h3>Description du projet</h3>
        <p>${element.description}</p>
        <a href="${element.html_url}" class="btn btn-success h3" target="_blank">Accéder au projet</a>
      </div>
    </div>`;
    });
  });
