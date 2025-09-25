// Dátum a čas, do ktorého odpočítavame
// Nastav si vlastný dátum a čas
const countdownDate = new Date().getTime() + 60 * 1000;

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

// Funkcia na spustenie konfiet s knižnicou
function launchConfetti() {
    confetti({
        particleCount: 150, // Počet konfiet
        spread: 120, // Rozptyl (v stupňoch)
        origin: { y: 0.6 } // Bod, odkiaľ konfety vyletia (v strede hore)
    });
}