
// Bläschen-Container erstellen und zum Body hinzufügen
const bubblesContainer = document.createElement('div');
bubblesContainer.className = 'subtle-bubbles';
document.body.appendChild(bubblesContainer);

// Anzahl der Bläschen basierend auf Bildschirmgröße
const isMobile = window.innerWidth < 768;
const bubbleCount = isMobile ? 20 : 50; // Weniger auf Mobile

// Bläschen generieren
for (let i = 0; i < bubbleCount; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'subtle-bubble';
  
  // Random Größe (2-5px für kleine Punkte)
  const size = Math.random() * 3 + 2;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  
  // Random horizontale Position
  bubble.style.left = Math.random() * 100 + '%';
  
  // Random horizontale Drift während des Aufsteigens (-30px bis +30px)
  const drift = (Math.random() - 0.5) * 60;
  bubble.style.setProperty('--drift', drift + 'px');
  
  // Random Animations-Verzögerung (0-20s)
  bubble.style.animationDelay = Math.random() * 20 + 's';
  
  // Random Animations-Dauer (15-30s für langsames Aufsteigen)
  const duration = Math.random() * 15 + 15;
  bubble.style.animationDuration = duration + 's';
  
  bubblesContainer.appendChild(bubble);
}
