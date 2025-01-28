document.addEventListener('DOMContentLoaded', function() {
    // Vérifiez que le script est exécuté une seule fois
    if (window.scriptAlreadyLoaded) return;
    window.scriptAlreadyLoaded = true;

    // Sélectionner les éléments de la page
    const citationContainer = document.getElementById('citation-container');
    const typeSelector = document.getElementById('type-selector');
    const generateButton = document.getElementById('generate-button');

    // Charger le fichier JSON contenant les citations
    fetch('BDD.json')
        .then(response => response.json())
        .then(data => {
            // Réinitialiser les options existantes
            typeSelector.innerHTML = '';

            // Remplir le menu déroulant avec les types de citations
            const types = Object.keys(data);
            types.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type.charAt(0).toUpperCase() + type.slice(1);
                typeSelector.appendChild(option);
            });

            // Générer une citation aléatoire en fonction du type sélectionné
            generateButton.addEventListener('click', function() {
                const selectedType = typeSelector.value;
                if (selectedType && data[selectedType]) {
                    const quotes = data[selectedType];
                    const randomIndex = Math.floor(Math.random() * quotes.length);
                    const randomQuote = quotes[randomIndex];
                    citationContainer.innerHTML = `
                        <p class="quote-text">"${randomQuote.quote}"</p>
                        <p class="quote-author">— ${randomQuote.author}</p>
                    `;
                } else {
                    citationContainer.innerHTML = '<p class="error">Veuillez sélectionner un type de citation.</p>';
                }
            });
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});
