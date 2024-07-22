/** variable js : var , let , const
 var : c'est à proscrire depuis ES6
 let : quand votre variable est voué à changer
 const : quand votre variable est voué à ne pas changer , exemple : PI (3.14)
 **/

function displayAge(){
// stocker de l'information
// 1. récupération de l'information
const age = document.getElementById("age").value;

// 2. traitement
/** deux manières :
const textAge = "Vous avez " + age + " ans."
const textAge = `Vous avez ${age} ans.`
**/

const textAge = "Vous avez <i>" + age + "</i> ans.";

// 3. affichage
document.getElementById("textAge").innerHTML = textAge;

}