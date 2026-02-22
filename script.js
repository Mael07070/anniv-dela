// -------- Compte à rebours -----------
const countdown = document.getElementById('countdown');
const birthday = new Date('2026-02-23T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = birthday - now;
  if (diff <= 0) {
    countdown.innerHTML = "🎉 C'est ton anniversaire ! 🎉";
    clearInterval(timer);
    return;
  }
  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff/(1000*60*60)) % 24);
  const minutes = Math.floor((diff/(1000*60)) % 60);
  const seconds = Math.floor((diff/1000) % 60);
  countdown.innerHTML = `${days}j ${hours}h ${minutes}m ${seconds}s`;
}
const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// -------- Lettre animée -----------
const letterText = `20 ans… 💖

Déjà 20 ans que tu illumines nos vies.
20 ans de sourires, de rires, de rêves et de moments inoubliables.

Je suis tellement fier de la personne incroyable que tu es devenue.
Ta force, ta douceur, ton courage et ton cœur immense font de toi une femme exceptionnelle.

Que cette nouvelle décennie t’apporte :
✨ Des rêves encore plus grands
💫 Des réussites infinies
❤️ Un amour sincère
🌟 Et une vie remplie de bonheur

N’oublie jamais à quel point tu es précieuse.

Joyeux 20 ans 💕`;

let i = 0;
const typedText = document.getElementById("typedText");
function typeWriter() {
  if (i < letterText.length) {
    typedText.innerHTML += letterText.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
typeWriter();

// -------- WhatsApp messages --------
function sendWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const phone = "22896930901"; // <-- son numéro avec indicatif pays
  const text = `🎉 Message pour tes 20 ans 💖\nDe : ${name}\n\n${message}`;

  // Confettis au clic
  for(let j=0; j<15; j++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
    const duration = 0.8 + Math.random()*0.7;
    confetti.style.animationDuration = `${duration}s`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), duration*1000);
  }

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank");
}

// -------- Confettis en continu -----------
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = `${Math.random() * window.innerWidth}px`;
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  const duration = 1 + Math.random()*1;
  confetti.style.animationDuration = `${duration}s`;
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), duration*1000);
}
setInterval(createConfetti, 200);