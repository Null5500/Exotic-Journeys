document.addEventListener('DOMContentLoaded', () => {
    fetch('destinations.json')
        .then(response => response.json())
        .then(data => {
            const destinationCards = document.getElementById('destination-cards');
            data.destinations.forEach(destination => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${destination.image}" alt="${destination.name}">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                `;
                destinationCards.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading destinations:', error));
});
