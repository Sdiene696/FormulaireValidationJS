const card=document.querySelector('.card')
const cardSecond=document.querySelector('#cardsecond')
const btnAjouter=document.querySelector('#btn')

const nom=document.querySelector('#nom')
const prenom=document.querySelector('#prenom')
const adresse=document.querySelector('#adresse')


function erreur(){
  if (nom.value.trim()===""||prenom.value.trim()===""||adresse.value.trim()==="") {
  //  nom.classList.add("is-invalid")
  //  prenom.classList.add("is-invalid")
  //  adresse.classList.add("is-invalid")
   btnAjouter.disabled=true;
   
  }else{
    
    nom.classList.remove("is-invalid")
    prenom.classList.remove("is-invalid")
    adresse.classList.remove("is-invalid")
     btnAjouter.disabled=false;
    nom.classList.add("is-valid")
    prenom.classList.add("is-valid")
    adresse.classList.add("is-valid")
   
  }
}


erreur()
nom.addEventListener('input',function(e){
  
e.preventDefault()
let longueurnom=nom.value.length
if(longueurnom<5){
  
   nom.style.borderColor='green'
}
if(longueurnom>=5){
   nom.style.borderColor='yellow'
}
if(longueurnom>=10){
  nom.style.borderColor='red'
}

})

prenom.addEventListener('input',function(e){

e.preventDefault()
let longueurprenom=prenom.value.length
if(longueurprenom<5){
  
   prenom.style.borderColor='green'
}
if(longueurprenom>=5){
   prenom.style.borderColor='yellow'
}
if(longueurprenom>=10){
  prenom.style.borderColor='red'
}
})

adresse.addEventListener('input',function(e){
  let longueuradresse=adresse.value.length
  if(longueuradresse<5){
    
     adresse.style.borderColor='green'
  }
  if(longueuradresse>=5){
     adresse.style.borderColor='yellow'
  }
  if(longueuradresse>=10){
    adresse.style.borderColor='red'
  }
})



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

})







// function valider() {
//   alert("C'est valide.")
// }
// function supprimer() {
//   alert("Suppression effectuée.")
//   personne.nom=""
//   personne.prenom=""
//   personne.adresse=""
// }



