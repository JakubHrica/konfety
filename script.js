// Nastavenie CIEĽOVÉHO DATUMU a ČASU pre odpočet
// Tento dátum bude rovnaký pre všetky zariadenia
// Príklad: 25. december 2025 o 10:00:00
const countdownDate = new Date("Dec 25, 2025 13:10:00").getTime(); 

const countdownDiv = document.getElementById('countdown');
const countdownContainer = document.getElementById('countdown-container');
const rickrollContainer = document.getElementById('rickroll-container');

// Funkcia na aktualizáciu odpočtu každú sekundu
const updateCountdown = setInterval(() => {
    // Aktuálny čas
    const now = new Date().getTime();
    
    // Rozdiel medzi cieľovým a aktuálnym časom
    const distance = countdownDate - now;
    
    // Výpočty pre dni, hodiny, minúty a sekundy
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Zobrazenie výsledku
    countdownDiv.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    // Ak je odpočet hotový, zobrazí GIF a konfety
    if (distance < 0) {
        clearInterval(updateCountdown);
        countdownContainer.classList.add('hidden');
        rickrollContainer.classList.remove('hidden');
        countdownDiv.innerHTML = "Čas vypršal!";
        
        // Spustenie konfiet
        launchConfetti();
    }
}, 1000);

// Funkcia na spustenie konfiet s knižnicou Confetti.js
function launchConfetti() {
    confetti({
        particleCount: 150, 
        spread: 120, 
        origin: { y: 0.6 } 
    });
}