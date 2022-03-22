let x = document.getElementsByClassName('heart');
let divProjet = document.getElementById('projet');
let API_URL = 'https://api.github.com/users/Kribean/repos#list-repositories-for-a-user';
let tableau=[];



for(let i =0;i<x.length;i++)
{
  x[i].addEventListener('click',(event)=>{
    x[i].classList.toggle("is-active");
});
}


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
    this.tableau = tableauMessages;
    console.log(this.tableau);
    tableauMessages.forEach(element => {
      divProjet.innerHTML+=`<div class="card m-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">Le language principale utilisé pour ce projet est ${element.language}</p>
        <h5>Description du projet</h5>
        <p>${element.description}</p>
        <a href="${element.html_url}" class="btn btn-success h3" target="_blank">Accéder au projet</a>
      </div>
    </div>`
    });
  });

  