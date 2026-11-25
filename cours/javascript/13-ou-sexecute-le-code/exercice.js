// Informations sur un joueur de l'équipe Iron Phoenix
const pseudoJoueur = "Ashen";
const posteJoueur = "Duelliste";
const score = 5000;
let scoreSaison = 5210;
let Bonus = 100;
let scoreTotal = scoreSaison + Bonus
const isHigher = scoreTotal > score;
console.log(pseudoJoueur, isHigher);
console.log(pseudoJoueur, scoreTotal)
