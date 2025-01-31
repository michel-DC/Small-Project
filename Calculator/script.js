// Fonction pour ajouter un chiffre ou un opérateur au champ d'affichage
function appendValue(value) {
    const result = document.getElementById('result');
    // Si l'affichage contient 'Erreur', on le réinitialise
    if (result.value === 'Erreur') {
        result.value = '';
    }
    // Ajouter la valeur cliquée à l'affichage
    result.value += value;
}

// Fonction pour vider l'affichage
function clearDisplay() {
    const result = document.getElementById('result');
    result.value = '';
}

// Fonction pour calculer l'expression et afficher le résultat
function calculate() {
    const result = document.getElementById('result');
    try {
        // Utiliser eval() pour évaluer l'expression mathématique
        // Assurez-vous que l'entrée de l'utilisateur est sécurisée (pas de code malveillant)
        result.value = eval(result.value);
    } catch (e) {
        // Si une erreur se produit, afficher 'Erreur' à l'utilisateur
        result.value = 'Erreur';
    }
}
