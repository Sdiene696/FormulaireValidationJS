const card=document.querySelector('.card')
const cardSecond=document.querySelector('#cardsecond')
const btnAjouter=document.querySelector('#btn')

const labelnom=document.querySelector('.form-labelnom')
const labelprenom=document.querySelector('.form-labelprenom')
const labeladresse=document.querySelector('.form-labeladresse')

const nom=document.querySelector('#nom')
const prenom=document.querySelector('#prenom')
const adresse=document.querySelector('#adresse')



let saisie=false

function erreur(){
  let nomvide=nom.value.trim()===""
  let prenomvide=prenom.value.trim()===""
  let adressevide=adresse.value.trim()===""
  if (saisie) {
   nom.classList.toggle("is-invalid")
   prenom.classList.toggle("is-invalid")
   adresse.classList.toggle("is-invalid")

    nom.classList.toggle("is-valid")
    prenom.classList.toggle("is-valid")
    adresse.classList.toggle("is-valid")
  }
  // On verifie que nom prenom et adresse ne sont pas vides
  btnAjouter.disabled=nomvide||prenomvide||adressevide

}
// On vérifie si valeur de input est vide puis on change les valeurs 
// et supprime les classes invalides pour mettre les classes valides.
nom.addEventListener('input',()=>{
  saisie=true;
  erreur()
})
prenom.addEventListener('input',()=>{
  saisie=true;
  erreur()
})
adresse.addEventListener('input',()=>{
  saisie=true;
  erreur()
})

// nom.addEventListener('input',function(e){
  
// e.preventDefault()
// let longueurnom=nom.value.length
// if(longueurnom<5){
//    labelnom.style.color='red'
//    nom.style.borderColor='red'
//    nom.classList.add("is-invalid")
// }
// if(longueurnom>=5){
//   labelnom.style.color='yellow'
//    nom.style.borderColor='yellow'
//    nom.classList.remove("is-invalid")
// }
// if(longueurnom>=10){
//   labelnom.style.color='green'
//   nom.style.borderColor='green'
//   nom.classList.add("is-valid")
// }

// })

// prenom.addEventListener('input',function(e){

// e.preventDefault()
// let longueurprenom=prenom.value.length
// if(longueurprenom<5){
//    labelprenom.style.color='red'
//    prenom.style.borderColor='red'
//    prenom.classList.add("is-invalid")
// }
// if(longueurprenom>=5){
//   labelprenom.style.color='yellow'
//    prenom.style.borderColor='yellow'
//    prenom.classList.remove("is-invalid")
// }
// if(longueurprenom>=10){
//   labelprenom.style.color='green'
//   prenom.style.borderColor='green'
//   prenom.classList.add("is-valid")
// }
// })

// adresse.addEventListener('input',function(e){
//   let longueuradresse=adresse.value.length
//   if(longueuradresse<5){
//      labeladresse.style.color='red'
//      adresse.style.borderColor='red'
//      adresse.classList.add("is-invalid")
//   }
//   if(longueuradresse>=5){
//     labeladresse.style.color='yellow'
//      adresse.style.borderColor='yellow'
//      adresse.classList.remove("is-invalid")
//   }
//   if(longueuradresse>=10){
//     labeladresse.style.color='green'
//     adresse.style.borderColor='green'
//     adresse.classList.add("is-valid")
//   }
// })



btnAjouter.addEventListener('click',function(e){
 
  e.preventDefault()
    let personne={
        'nom':nom.value,
        'prenom':prenom.value,
        'adresse':adresse.value
    }


cardSecond.insertAdjacentHTML('beforebegin',`<div class="card cardsecond" style="width: 18rem;">
  
<div class="card-body">
    <h5 class="card-title">Nom : ${personne.nom}</h5>
    <h5 class="card-title">Prenom : ${personne.prenom}</h5>
    <h5 class="card-title">Adresse : ${personne.adresse}</h5>
    <div class="btns">
     <a href="#" class="btn " onclick="valider()">Valider</a>
     <a href="#" class="btn " onclick="supprimer()">Supprimer</a>
    </div>
  </div>
</div>`)

nom.value=""
prenom.value=""
adresse.value=""
erreur()
})
erreur()






// function valider() {
//   alert("C'est valide.")
// }
// function supprimer() {
//   alert("Suppression effectuée.")
//   personne.nom=""
//   personne.prenom=""
//   personne.adresse=""
// }



