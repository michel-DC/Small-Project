// Fonction pour ajouter un chiffre ou un opérateur au champ d'affichage
function appendValue(value) {
    const result = document.getElementById('result');
    if (result.value === 'Erreur') {
        result.value = '';
    }
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

        const expr = result.value.replace(/Math.sqrt\(/g, 'Math.pow(').replace(/Math.log\(/g, 'Math.log10(');
        result.value = eval(expr);
    } catch (e) {
        result.value = 'Erreur';
    }
}
