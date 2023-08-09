const slides = document.querySelectorAll('.carousel-slide');
const stopButton = document.getElementById('stopButton');
const resumeButton = document.getElementById('resumeButton');
const progressBar = document.querySelector('.progress');
const audio = document.getElementById('somAtual')
const API_KEY = "300a90f59f474267bdfe74a93c450acc"
let ext = ".m4a";

let currentSlideIndex = 0;
let intervalId;
let progress = 0;
const slideDuration = 5000; // Tempo em milissegundos para cada slide

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');	
    progress = 0;
    progressBar.style.width = '0%';
}

function nextSlide() {
    progress = -50;
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function startCarousel() {
    intervalId = setInterval(updateProgress, 50);
}

function stopCarousel() {
    clearInterval(intervalId);
}

function updateProgress() {
    progress += 50;
    const percentage = (progress / slideDuration) * 100;
    progressBar.style.width = percentage + '%';
	
    if (progress >= slideDuration) {
		nextSlide();
	}
}

startCarousel();

stopButton.addEventListener('click', () => {
    stopCarousel();
});

resumeButton.addEventListener('click', () => {
    startCarousel();
});





