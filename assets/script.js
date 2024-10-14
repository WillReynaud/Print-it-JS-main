const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');
// Création de l'action de clique flèches
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajout des points dynamiques
const dotsContainer = document.querySelector('.dots');
slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) {
        dot.classList.add('dot_selected'); // La première diapositive est sélectionnée par défaut
    }
    dotsContainer.appendChild(dot);
});

// Création de du défilement des slide

let currentIndex = 0;

arrowRight.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Revenir au début si on dépasse le dernier slide
    }
    updateCarousel();
});

arrowLeft.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Revenir à la fin si on dépasse le premier slide
    }
    updateCarousel();
});

function updateCarousel() {
    
    // Mise à jour de l'image et du texte
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    bannerText.innerHTML = slides[currentIndex].tagLine;
    
    // Mise à jour des points (bullets)
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === currentIndex);
    });
}